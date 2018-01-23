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
  const dbPersons = db.persons;
  const numberOfMembers = members.length;
  let recommendation = {},
      recommendationArr = [];

  const now = new Date();
  const today = getDateValue(now).day;
  const currentMinute = getDateValue(now).minute;
  const eventStartDate = new Date(date.start);
  const eventStartDay = getDateValue(eventStartDate).day;

  let swapArr = [];

  if (today === eventStartDay) {
    if (currentMinute > eventStart || currentMinute > eventEnd) {//если время предпологаемого события меньше текущего времени
      return [];
    }
  } else if (today > eventStartDay) {
    return [];
  }

 roomLoop: for (let dbRoom of dbRooms) {
    let dbRoomId = dbRoom.id;
    if (dbRoom.capacity < numberOfMembers) { //если вместимость комнаты меньше участников события
      continue roomLoop;
    }

    //Цикл который пробегается по всему дню, начиная со времени начала предпологаемого события, с шагом в продолжительность события
    timeLoop: for (let t = eventStart; t <= dayEnd - eventDuration; t += eventDuration) {
      let tStart = t, //Время начала предпологаемого события
          tEnd = tStart + eventDuration; //Время окончания предпологаемого события

      let isTimeHasnotEvent = true;

      eventLoop: for (let dbEvent of dbEvents) {
        let dbEventStart = getDateValue(new Date(dbEvent.dateStart)).minute,
            dbEventEnd = getDateValue(new Date(dbEvent.dateEnd)).minute;

        if (currentMinute > dbEventEnd) {
          continue eventLoop;
        }

        if (dbEvent.room.id === dbRoomId) { //если в этой комнате есть события
          if (dbEventStart < tStart && dbEventEnd < tStart) {
            continue eventLoop;
          }

          if (tStart <= dbEventStart && tEnd > dbEventEnd
              || tStart <= dbEventStart && tEnd < dbEventEnd && tEnd > dbEventStart
              || tStart > dbEventStart && tEnd <= dbEventEnd
              || tStart === dbEventStart && tEnd === dbEventEnd) { //если на этот промежуток времени запланировано событие
            isTimeHasnotEvent = false;
          }

          if (tStart > dbEventStart && tEnd > dbEventEnd && tStart < dbEventEnd) {
            t = dbEventEnd - eventDuration;
            continue timeLoop;
          }
        }
      }
      if (isTimeHasnotEvent) {
        recommendation = {
          date: {
            start: tStart,
            end: tEnd
          },
          room: dbRoomId
        };
        recommendationArr.push(recommendation);
        continue roomLoop;
      }
    }
  }

  return recommendationArr;
}

export default getRecommendation;
