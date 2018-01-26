import Application from './../../application';
import AbstractView from './../abstract-view';
import {calendarMarkup, openCalendar} from './calendar';
import RenderCalendarWidget from './render-calendar-widget';
import {debounce, getDateValue, parseObjToHash} from '../../tools/helpers';
import activateRoomName from './activate-room-name';
import RenderEvents from './render-events';
import {router} from './../../router';
import showPopup from './../showPopup';

let globalTimeout;

class MeetingRoomsView extends AbstractView {

  constructor(inputData) {
    super(inputData);
    this.rooms = inputData.rooms;
    this.users = inputData.users;
    this.date = inputData.date || new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.dayMin = 8;
    this.dayMax = 22;
    this.MINUTE = 60 * 1000;
    this.HOUR = this.MINUTE * 60;
    this.dayTotal = this.dayMax - this.dayMin + 1;
    this.initialAppDate = new Date();
    this.initialAppDay = getDateValue(this.initialAppDate).day;
    this.dateValue = getDateValue(this.date).day;
    this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE = this.dateValue === this.initialAppDay;
    this.IS_PAST = this.dateValue < this.initialAppDay;
    this.events = inputData.events[this.dateValue] || [];
  }

  diagramCellMarkup(cellMarkup, time) {
    const cell = (typeof cellMarkup !== 'undefined' ) ? cellMarkup : '';
    const dataTime = `${typeof time !== 'undefined' ? 'data-time=' + time : ''}`;
    return `<div class="diagram__cell" ${dataTime}>${cell}</div>`;
  }

  getCellList(inputMarkup) {
    let cellList = '';
    for (let time = this.dayMin; time <= this.dayMax; time++) {
      cellList += this.diagramCellMarkup(inputMarkup, time);
    }
    return cellList;
  }

  diagramTimeMarkup(time, isNow, isCurrentTime) {
    const now = isNow ? ' diagram__time--now' : '';
    const minute = this.minute < 10 ? `0${this.minute}` : this.minute;
    const currentTime = `${this.hour}:${minute}`;
    return `<span class="diagram__time${now}">${typeof isCurrentTime !== 'undefined' ? currentTime : time}</span>`;
  }

  diagramTimelineTimeMarkup() {
    const diagramTimeMarkup = this.diagramTimeMarkup(false, true, true);
    let diagramDayMarkup = '';
    for (let time = this.dayMin; time <= this.dayMax; time++) {
      diagramDayMarkup += this.diagramCellMarkup(this.diagramTimeMarkup(time), time);
    }
    return `<div class="diagram__day">${diagramTimeMarkup}${diagramDayMarkup}</div>`;
  }

  updateTime(inputDate) {
    const date = inputDate || new Date();
    this.date = date;
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }

  changeFreeTime() {
    const freeTimeSlotArr = document.querySelectorAll('.time-slot--empty');
    let startTime;
    let endTime;
    let duration;
    let width;
    let left;
    let startDate;

    if (typeof freeTimeSlotArr !== 'undefined') {
      for (let freeTimeSlot of Array.from(freeTimeSlotArr)) {
        startTime = +freeTimeSlot.getAttribute('data-start-time');
        endTime = +freeTimeSlot.getAttribute('data-end-time');
        startDate = getDateValue(new Date(startTime)).minute;
        duration = Math.floor((endTime - startTime) / this.MINUTE);
        left = +getComputedStyle(freeTimeSlot).left.slice(0, -2);

        if (duration < 2) {
          freeTimeSlot.parentNode.removeChild(freeTimeSlot);
        }

        if (getDateValue(this.date).minute > startDate) {
          width = (duration - 1) * this.minuteStep;
          left += this.minuteStep;

          freeTimeSlot.setAttribute('data-start-time', startTime + this.MINUTE);
          freeTimeSlot.style.cssText = `left: ${left}px; width: ${width}px`;
        }
      }
    }
  }

  responsiveTimeSlot() {
    const timeSlotArr = document.querySelectorAll('.time-slot');
    let startTime;
    let endTime;
    let duration;
    let width;
    let left;
    let startDate;

    if (typeof timeSlotArr !== 'undefined') {
      for (let timeSlot of Array.from(timeSlotArr)) {
        startTime = +timeSlot.getAttribute('data-start-time');
        endTime = +timeSlot.getAttribute('data-end-time');
        startDate = getDateValue(new Date(startTime)).minute;
        duration = Math.floor((endTime - startTime) / this.MINUTE);

        left = ((startDate - this.dayStart) / this.MINUTE) * this.minuteStep;
        width = duration * this.minuteStep;

        timeSlot.style.cssText = `left: ${left}px; width: ${width}px`;
      }
    }
  }

  renderClockLine() {
    const timeNowEl = this.element.querySelector('.diagram__time--now');
    const dayEl = this.element.querySelector('.diagram__time-line .diagram__day');
    const timelineCellArr = this.element.querySelectorAll('.diagram__time-line .diagram__cell');
    const dayElWidth = getComputedStyle(dayEl).width.slice(0, -2);
    // const now = this.date.valueOf();
    const now = Date.now();
    const date = new Date(now);
    this.dayStart = new Date(now).setHours(8, 0, 0);
    const currentMinute = (now - this.dayStart) / this.MINUTE;
    this.minuteStep = dayElWidth / (this.dayTotal * 60);
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    if (this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE) {
      timeNowEl.classList.add('show');

      timeNowEl.style.left = `${currentMinute * this.minuteStep}px`;
      timeNowEl.innerHTML = `${date.getHours()}:${minute}`;

      if (currentMinute < 0 || currentMinute > this.dayTotal * 60) {
        timeNowEl.style.opacity = 0;
      }

      for (let timelineCell of Array.from(timelineCellArr)) {
        const timelineCellValue = timelineCell.getAttribute('data-time');
        if (timelineCellValue <= date.getHours()) {
          timelineCell.classList.add('past');
        }
      }
    } else if (this.IS_PAST) {
      for (let timelineCell of Array.from(timelineCellArr)) {
        timelineCell.classList.add('past');
      }
    }
  }

  clock(isNewDate) {
    if (isNewDate) {
      this.updateTime();
    } else {
      this.updateTime(this.date);
    }

    this.changeFreeTime();
    this.renderClockLine();

    // Clear all timeouts
    while (globalTimeout--) {
      window.clearTimeout(globalTimeout);
    }

    globalTimeout = setTimeout(() => {
      this.clock(true);
    }, 60000);
  }

  diagramRowMarkup(_diagramSidebarMarkup, _diagramRowBodyMarkup, _rowClass) {
    const rowClass = _rowClass || 'diagram__row';
    const diagramSidebarMarkup = _diagramSidebarMarkup || '';
    const diagramRowBodyMarkup = _diagramRowBodyMarkup || '';
    return `<div class="${rowClass}">
              <div class="diagram__sidebar">${diagramSidebarMarkup}</div>
              <div class="diagram__row-body">${diagramRowBodyMarkup}</div>
            </div>`;
  }

  getRoomMarkup(name, capacity) {
    return `<div class="diagram__room-name">${name}</div>
            <div class="diagram__room-capacity">${capacity} человек</div>`;
  }

  getRoomList(floor) {
    let roomList = '';
    const diagramDayTemp = '<div class="diagram__day"></div>';

    for (let room of this.rooms) {
      if (room.floor === floor) {
        const roomMarkup = this.getRoomMarkup(room.title, room.capacity);
        roomList += `<div class="diagram__room" data-room-id="${room.id}">
                        ${this.diagramRowMarkup(roomMarkup, diagramDayTemp)}
                      </div>`;
      }
    }

    return roomList;
  }

  getFloorListMarkup() {
    let floors = [];

    for (let room of this.rooms) {
      if (floors.indexOf(room.floor) === -1) {
        floors.push(room.floor);
      }
    }

    floors.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      return -1;
    });

    let floorList = '';

    for (let floor of floors) {
      floorList += `<div class="diagram__floor" data-floor="${floor}">
                      <div class="diagram__floor-title">
                            ${this.diagramRowMarkup(`${floor} этаж`)}
                      </div>
                      ${this.getRoomList(floor)}
                    </div>`;
    }

    return floorList;
  }

  getMarkup() {
    const header = `<header class="header">
                      <div class="logo"></div>
                      <a href="#" class="button header__button button--blue" id="newEventTrigger">Создать встречу</a>
                  </header>`;

    const diagram = `<div class="diagram">
                      <div class="diagram__body">
                        <div class="diagram__body-cnt">
                            <div class="diagram__time-line">${this.diagramRowMarkup(calendarMarkup(), this.diagramTimelineTimeMarkup())}</div>
                            <div class="diagram__content-wrapper">
                              <div class="diagram__content">
                                ${this.diagramRowMarkup(null, this.getCellList(), 'diagram__cell-grid')}
                                ${this.getFloorListMarkup()}
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>`;

    return `<div class="index-page" id="app">
              ${header} 
              ${diagram}
            </div>`;
  }

  bindHandlers() {
    const eventNewTrigger = this.element.querySelector('#newEventTrigger');

    eventNewTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      let startTime;
      if (this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE) {
        const now = new Date();
        startTime = getDateValue(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), now.getHours(), now.getMinutes())).minute;
      } else {
        startTime = getDateValue(this.date).day + this.HOUR * 8;
      }
      let endTime = startTime + 15 * this.MINUTE;
      const eventCreateInputData = {
        roomId: 0,
        startTime: startTime,
        endTime: endTime
      };
      router.navigate(`/event/${parseObjToHash(eventCreateInputData)}/create`);
    });

    const windowResizeHandler = () => {
      this.renderClockLine();
      this.responsiveTimeSlot();
    };

    window.addEventListener('resize', debounce(windowResizeHandler, 66));

    if (this.inputData.hasOwnProperty('newEvent')) {
      let eventData = this.inputData.newEvent;
      for (let room of this.rooms) {
        if (eventData.roomId === room.id) {
          Object.assign(eventData, {
            roomName: room.title,
            roomFloor: room.floor
          });
        }
      }

      showPopup('newEvent', eventData, () => {
        const newData = this.inputData;
        delete newData.newEvent;
        Application.data = newData;
      });
    }
  }

  viewRendered() {
    openCalendar();
    activateRoomName();
    const renderCalendarWidget = new RenderCalendarWidget(this.date);
    renderCalendarWidget.render();

    this.clock();

    const renderEvents = new RenderEvents(this.element, this.events, this.date, this.rooms, this.users, this.minuteStep);
    renderEvents.renderView();
  }

}

export default MeetingRoomsView;
