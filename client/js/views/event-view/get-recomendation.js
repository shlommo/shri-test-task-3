import {getDateValue} from '../../tools/helpers';
/**
 * @typedef {Object} Person
 * @property {String} login Идентификатор сотрудника.
 * @property {Number} floor "Домашний" этаж сотрудника.
 * @property {String} avatar Ссылка на аватар.
 */

/**
 * @typedef {Object} Room
 * @property {Number} id Идентификатор переговорки.
 * @property {String} title Название переговорки.
 * @property {Number} capacity Вместимость (количество человек).
 * @property {Number} floor Этаж, на котором расположена переговорка.
 */

/**
 * @typedef {Object} EventDate
 * @property {Number} start Timestamp начала встречи.
 * @property {Number} end Timestamp окончания встречи.
 */

/**
 * @typedef {Object} Event
 * @property {String} id Идентификатор встречи.
 * @property {String} title Название встречи.
 * @property {String[]} members Логины участников встречи.
 * @property {EventDate} date Дата и время проведения встречи.
 * @property {Number} room Идентификатор переговорки.
 */

/**
 * @typedef {Object} RoomsSwap
 * @property {string} event Идентификатор встречи.
 * @property {String} room Новый идентификатор переговорки.
 */

/**
 * @typedef {Object} Recommendation
 * @property {EventDate} date Дата и время проведения встречи.
 * @property {String} room Идентификатор переговорки.
 * @property {RoomsSwap[]} [swap] Необходимые замены переговорк для реализации рекомендации.
 */

/**
 * @param {EventDate} date Дата планируемой встречи.
 * @param {Person[]} members Участники планируемой встречи.
 * @param {Object} db
 * @param {Event[]} db.events Список все встреч.
 * @param {Room[]} db.rooms Список всех переговорок.
 * @param {Person[]} db.persons Список всех сотрудников.
 * @returns {Recommendation[]}
 */

function getRecommendation(date, members, db) {
  const eventStart = date.start;
  const eventEnd = date.end;
  const eventDuration = eventEnd - eventStart;
  const dayEnd = new Date(eventStart).setHours(23, 0, 0);
  const dbEvents = db.events;
  const dbRooms = db.rooms;
  const dbUsers = db.persons;
  const numberOfMembers = members.length;
  let recommendation = {};
  let recommendationArr = [];

  const now = new Date();
  const today = getDateValue(now).day;
  const currentMinute = getDateValue(now).minute;
  const eventStartDate = new Date(date.start);
  const eventStartDay = getDateValue(eventStartDate).day;

  if (today === eventStartDay) {
    if (currentMinute > eventStart || currentMinute > eventEnd) { // если время предпологаемого события меньше текущего времени
      return [];
    }
  } else if (today > eventStartDay) {
    return [];
  }

  let swapArr = [];

  roomLoop: for (let dbRoom of dbRooms) {
    let dbRoomId = dbRoom.id;
    if (dbRoom.capacity < numberOfMembers) { // если вместимость комнаты меньше участников события
      continue;
    }

    // Цикл который пробегается по всему дню, начиная со времени начала предпологаемого события, с шагом в продолжительность события
    for (let t = eventStart; t <= dayEnd - eventDuration;) {
      let tStart = t; // Время начала предпологаемого события
      let tEnd = tStart + eventDuration; // Время окончания предпологаемого

      let isTimeHasnotEvent = true;

      for (let dbEvent of dbEvents) {
        let dbEventStart = getDateValue(new Date(dbEvent.dateStart)).minute;
        let dbEventEnd = getDateValue(new Date(dbEvent.dateEnd)).minute;
        let dbEventDuration = dbEventEnd - dbEventStart;
        let dif = tEnd - dbEventStart;

        if (currentMinute > dbEventEnd) {
          continue;
        }

        if (dbEvent.room.id === dbRoomId) { // если в этой комнате есть события
          if (tStart - dbEventEnd >= 0 || tEnd - dbEventStart < 0 ) {
            continue;
          }

          if (tStart <= dbEventStart && tEnd >= dbEventEnd && eventDuration > dbEventDuration) { // Если событие идет не весь промежуток времени
            swapArr.push({
              event: dbEvent,
              tStart: getDateValue(new Date(tStart)).minute,
              tEnd: getDateValue(new Date(tEnd)).minute,
              roomId: dbRoom.id,
              roomFloor: dbRoom.floor
            });

            if (swapArr.length > 1) {
              let eventSwap = checkEventsForSwap(swapArr, dbUsers, dbRooms);

              if (eventSwap.length > 0) {
                for (let swap of eventSwap) {
                  if (swap.eventRoom === dbRoomId) {
                    recommendation = {
                      date: {
                        start: getDateValue(new Date(tStart)).minute,
                        end: getDateValue(new Date(tEnd)).minute
                      },
                      room: dbRoomId
                    };
                    if (recommendation.hasOwnProperty('swap')) {
                      recommendation.swap.push({
                        event: swap.event,
                        room: swap.newRoom
                      });
                    } else {
                      recommendation.swap = [{
                        event: swap.event,
                        room: swap.newRoom
                      }];
                    }
                    recommendationArr.push(recommendation);
                    recommendation = {};
                    continue roomLoop;
                  }
                }
              }
            }
          }

          if (dif > 1) { // если на этот промежуток времени запланировано событие
            t = dbEventEnd + 1;
            isTimeHasnotEvent = false;
            break;
          }
          t += eventDuration;
        }
      }

      if (isTimeHasnotEvent) {
        recommendation = {
          date: {
            start: getDateValue(new Date(tStart)).minute,
            end: getDateValue(new Date(tEnd)).minute
          },
          room: dbRoomId
        };
        recommendationArr.push(recommendation);
        recommendation = {};
        continue roomLoop;
      }
    }
  }

  return recommendationArr;
}

const checkEventsForSwap = (events, users, dbRooms) => {
  let floorsValueOne;
  let floorsValueTwo;
  let isFeet;
  let swap = [];

  for (let i = 0; i < events.length; i++) {
    let eventOne = events[i].event;
    let startOne = getDateValue(new Date(eventOne.dateStart)).minute;
    let endOne = getDateValue(new Date(eventOne.dateEnd)).minute;
    let roomOneFloor = events[i].roomFloor;
    let roomOneId = events[i].roomId;

    for (let j = i + 1; j < events.length; j++) {
      let eventTwo = events[j].event;
      let startTwo = getDateValue(new Date(eventTwo.dateStart)).minute;
      let endTwo = getDateValue(new Date(eventTwo.dateEnd)).minute;
      let roomTwoFloor = events[j].roomFloor;
      let roomTwoId = events[j].roomId;

      if (startOne < startTwo && endOne <= endOne
        || startTwo < startOne && endTwo <= startOne) { // если события не пересекаются

        floorsValueOne = countFloors(eventOne.users, users, roomTwoFloor);
        floorsValueTwo = countFloors(eventTwo.users, users, roomOneFloor);

        if (floorsValueOne < floorsValueTwo) {
          isFeet = checkCapacity(dbRooms, eventTwo.room.id, eventTwo.users);
          if (isFeet && roomOneId !== eventTwo.room.id) {
            swap.push({
              event: eventOne.id,
              eventRoom: roomOneId,
              newRoom: eventTwo.room.id
            });
          }
        } else {
          isFeet = checkCapacity(dbRooms, eventOne.room.id, eventOne.users);
          if (isFeet && roomTwoId !== eventOne.room.id) {
            swap.push({
              event: eventTwo.id,
              eventRoom: roomTwoId,
              newRoom: eventOne.room.id
            });
          }
        }
      }
    }
    break;
  }

  return swap;
};

const countFloors = (eventUsers, users, roomFloor) => {
  let numberOfFloors = 0;
  let userFloor;
  for (let eventUser of eventUsers) {
    for (let user of users) {
      if (user.id === eventUser.id) {
        userFloor = user.homeFloor;
        numberOfFloors = Math.max(userFloor, roomFloor) - Math.min(userFloor, roomFloor);
      }
    }
  }
  return numberOfFloors;
};

const checkCapacity = (rooms, id, eventMembers) => {
  let isFeet;
  for (let room of rooms) {
    if (room.id === id) {
      if (room.capacity > eventMembers.length) {
        isFeet = true;
        break;
      }
      isFeet = false;
    }
  }
  return isFeet;
};

export default getRecommendation;
