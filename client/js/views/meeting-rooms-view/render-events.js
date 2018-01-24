import {getNodeFromMarkup, getDateValue, parseObjToHash} from './../../tools/helpers';
import renderTimeSlotInfo from './render-time-slot-info';
import {router} from './../../router';

export default class RenderEvents {

  constructor(parent, inputEvents, inputDate, inputRooms, inputUsers, minuteStep) {
    this.parent = parent;
    this.roomArr = this.parent.querySelectorAll('.diagram__room');
    this.MINUTE = 60 * 1000;
    this.HOUR = 60 * this.MINUTE;
    this.inputEvents = inputEvents;
    this.inputDate = inputDate;
    this.inputRooms = inputRooms;
    this.inputUsers = inputUsers;
    this.minuteStep = minuteStep;
    this.now = new Date();
    this.today = getDateValue(this.now).day;
    this.inputDay = getDateValue(this.inputDate).day;
    this.inputDayStart = this.inputDay + 8 * this.HOUR;
    this.inputDayEnd = this.inputDay + 23 * this.HOUR;
    this.roomsWithBusyTime = {};
  }

  getEventMarkup(isFilled, inputEventId, start, end) {
    const extraClass = (isFilled) ? 'time-slot--filled' : 'time-slot--empty';
    const timeSlotType = (isFilled) ? 'data-event-edit-trigger' : 'data-event-new-trigger';
    const eventId = (inputEventId !== null) ? `data-event-id="${inputEventId}"` : '';
    const startTime = (typeof start !== 'undefined') ? `data-start-time = "${start}"` : '';
    const endTime = (typeof end !== 'undefined') ? `data-end-time = "${end}"` : '';

    return `<span class="time-slot ${extraClass}" 
              ${eventId}
              ${timeSlotType} 
              ${startTime} 
              ${endTime}></span>`;
  }

  getTimeNode(isFilled, inputEventId, start, end, left, width) {
    const timeNode = getNodeFromMarkup(this.getEventMarkup(isFilled, inputEventId, start, end));
    timeNode.style.cssText = `left: ${left}px; width: ${width}px`;
    return timeNode;
  }

  renderPlannedEvent() {
    for (let event of this.inputEvents) {
      const eventDateStart = new Date(event.dateStart);
      const eventDateEnd = new Date(event.dateEnd);
      const eventDateStartValue = eventDateStart.valueOf();
      const eventDateEndValue = eventDateEnd.valueOf();
      const eventStartMinuteFromDateStart = Math.round((eventDateStartValue - this.inputDayStart) / this.MINUTE);
      const eventEndMinuteFromDateStart = Math.round((eventDateEndValue - this.inputDayStart) / this.MINUTE);
      const eventDuration = Math.round((eventDateEndValue - eventDateStartValue) / this.MINUTE);

      for (let room of Array.from(this.roomArr)) {
        const roomId = room.getAttribute('data-room-id');
        const timeContainer = room.querySelector('.diagram__day');

        if (event.room.id === roomId) { // Событие происходит в нужной комнате
          this.eventLeft = ((eventDateStartValue - this.inputDayStart) * this.minuteStep) / this.MINUTE;
          this.eventWidth = eventDuration * this.minuteStep;

          let busyTimeNode = this.getTimeNode(true, event.id, eventDateStartValue, eventDateEndValue, this.eventLeft, this.eventWidth);

          timeContainer.appendChild(busyTimeNode);

          for (let minute = eventStartMinuteFromDateStart; minute <= eventEndMinuteFromDateStart; minute++) {
            let timeStampMinute = this.inputDayStart + minute * this.MINUTE;
            if (this.roomsWithBusyTime.hasOwnProperty(roomId)) {
              this.roomsWithBusyTime[roomId][timeStampMinute] = event.id;
            } else {
              this.roomsWithBusyTime[roomId] = {
                [timeStampMinute]: event.id
              };
            }
          }
        }
      }
    }
  }

  renderUnplannedEvents() {
    const IS_TODAY_EQUAL_TO_THE_INPUT_DAY = this.today === this.inputDay;
    let minutesFromHourStarted = 0;

    let startMinute = (this.inputDayStart - this.inputDay) / this.MINUTE;
    let endMinute = (this.inputDayEnd - this.inputDay) / this.MINUTE;

    if (IS_TODAY_EQUAL_TO_THE_INPUT_DAY && this.now.getHours() >= 8) {
      startMinute += (getDateValue(this.now).minute - this.inputDayStart) / this.MINUTE;
      minutesFromHourStarted = this.now.getMinutes();
    }

    if (this.today <= this.inputDay) {
      for (let room of Array.from(this.roomArr)) {
        const roomId = room.getAttribute('data-room-id');
        const timeContainer = room.querySelector('.diagram__day');

        let roomArrWithFreeTime = [];
        let roomWithFreeTime = {};
        let hour = 60 - minutesFromHourStarted;
        let eventDuration = 0;

        for (let minute = startMinute; minute <= endMinute; minute++) {
          let timeStampMinute = this.inputDay + minute * this.MINUTE;

          if (hour === 1) {
            hour = 60;
            roomWithFreeTime.end = timeStampMinute + this.MINUTE;

            roomArrWithFreeTime.push(roomWithFreeTime);
            roomWithFreeTime = {};
            continue;
          }

          if (this.roomsWithBusyTime.hasOwnProperty(roomId)) {
            if (this.roomsWithBusyTime[roomId].hasOwnProperty(timeStampMinute)) {
              if (roomWithFreeTime.hasOwnProperty('start')) { // Если свободное время уже было
                roomWithFreeTime.end = timeStampMinute;

                roomArrWithFreeTime.push(roomWithFreeTime);
                roomWithFreeTime = {};
                continue;
              }

              eventDuration++;
              roomWithFreeTime = {};
              continue;
            } else if (eventDuration > 0) {
              roomWithFreeTime.start = timeStampMinute - this.MINUTE;

              if (hour - eventDuration > 0) {
                hour = hour - eventDuration - 1;
              } else if (hour - eventDuration === 0) {
                hour = 60;
              } else if (hour - eventDuration < 0) {
                hour = 60 - ((eventDuration - hour) - Math.floor((eventDuration - hour) / 60) * 60);
              }

              eventDuration = 0;
            }
          }

          if (!roomWithFreeTime.hasOwnProperty('start')) {
            roomWithFreeTime.start = timeStampMinute;
          }

          if (minute === endMinute - 1) {
            roomWithFreeTime.end = timeStampMinute;
            roomArrWithFreeTime.push(roomWithFreeTime);
          }

          hour--;
        }

        for (let freeTime of roomArrWithFreeTime) {
          let freeTimeStart = freeTime.start;
          let freeTimeDuration = (freeTime.end - freeTime.start) / this.MINUTE;

          this.eventLeft = ((freeTimeStart - this.inputDayStart) * this.minuteStep) / this.MINUTE;
          this.eventWidth = freeTimeDuration * this.minuteStep;

          let freeTimeNode = this.getTimeNode(false, null, freeTimeStart, freeTime.end, this.eventLeft, this.eventWidth);

          timeContainer.appendChild(freeTimeNode);
        }
      }
    }
  }

  freeTimeSlotHandler() {
    const eventNewTriggerArr = document.querySelectorAll('[data-event-new-trigger]');
    let roomId;
    let startTime;
    let endTime;
    let eventCreateInputData = {};

    for (let eventNewTrigger of eventNewTriggerArr) {
      const eventNewClickHandler = () => {
        startTime = eventNewTrigger.getAttribute('data-start-time');
        endTime = eventNewTrigger.getAttribute('data-end-time');
        roomId = eventNewTrigger.parents('.diagram__room')[0].getAttribute('data-room-id');
        eventCreateInputData = {
          roomId: roomId,
          startTime: startTime,
          endTime: endTime
        };

        router.navigate(`/event/${parseObjToHash(eventCreateInputData)}/create`);
        eventNewTrigger.removeEventListener('click', eventNewClickHandler);
      };
      eventNewTrigger.addEventListener('click', eventNewClickHandler);
    }
  }

  renderView() {
    this.renderPlannedEvent();
    this.renderUnplannedEvents();

    renderTimeSlotInfo(this.parent, this.inputEvents, this.inputRooms, this.inputUsers);
    this.freeTimeSlotHandler();
  }
}
