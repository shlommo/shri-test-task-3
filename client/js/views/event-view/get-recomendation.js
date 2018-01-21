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
  const dbEvents = db.events;
  const dbRooms = db.rooms;
  const dbPersons = db.persons;
  const numberOfMembers = members.length;
  let recommendation = {},
      recommendationArr = [];


  roomLoop: for (let dbRoom of dbRooms) {
    let dbRoomId = dbRoom.id;
    if (dbRoom.capacity < numberOfMembers) { //если вместимость комнаты меньше участников события
      continue roomLoop;
    }

    eventLoop: for (let dbEvent of dbEvents) {
      let dbEventDateStart = new Date(dbEvent.dateStart),
          dbEventDateEnd = new Date(dbEvent.dateEnd);

      if (dbRoomId === dbEvent.room.id) { //если в этой комнате есть события
        if (eventStart - dbEventDateStart.getTime() < 0
            || eventStart - dbEventDateEnd.getTime() < 0
            || eventEnd - dbEventDateStart.getTime() < 0
            || eventEnd - dbEventDateEnd.getTime() < 0) { //Если веремя начала и конца события совпадают с уже имеющимся событием
          continue eventLoop;
        }
        console.log(dbEventDateStart, dbEventDateEnd);
      }
    }
  }

  return recommendationArr;
}

export default getRecommendation;
