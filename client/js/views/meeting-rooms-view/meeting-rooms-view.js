import AbstractView from './../abstract-view';
import Application from './../../application';
import {calendarMarkup, openCalendar} from './calendar';
import RenderCalendarWidget from './renderCalendarWidget';
import {debounce} from '../../tools/helpers';
import activateRoomName from './activateRoomName';
import renderEvents from './renderEvents';


class MeetingRoomsView extends AbstractView {

  constructor(inputData) {
    super(inputData);
    this.rooms = inputData.rooms;
    this.events = inputData.events;
    this.date = inputData.date || new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.dayMin = 8;
    this.dayMax = 22;
    this.dayTotal = this.dayMax - this.dayMin + 1;
    this.initialAppDate = new Date();
    this.initialAppDay = new Date(this.initialAppDate.getFullYear(), this.initialAppDate.getMonth(), this.initialAppDate.getDate()).valueOf();
    this.dateValue = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()).valueOf();
    this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE = this.dateValue === this.initialAppDay;
  }

  diagramCellMarkup(cellMarkup, time) {
    const cell = (cellMarkup !== undefined ) ? cellMarkup : '';
    const dataTime = `${time !== undefined ? 'data-time=' + time : ''}`;
    return `<div class="diagram__cell" ${dataTime}>${cell}</div>`;
  }

  getCellList(inputMarkup) {
    let cellList = '';
    for (let time = this.dayMin; time <= this.dayMax; time++) {
      cellList += this.diagramCellMarkup(inputMarkup, time)
    }
    return cellList;
  }

  diagramTimeMarkup(time, isNow, isCurrentTime) {
    const now = isNow ? ' diagram__time--now' : '';
    const minute = this.minute < 10 ? `0${this.minute}` : this.minute;
    const currentTime = `${this.hour}:${minute}`;
    return `<span class="diagram__time${now}">${isCurrentTime !== undefined ? currentTime : time}</span>`;
  }

  diagramTimelineTimeMarkup() {
    const diagramTimeMarkup = this.diagramTimeMarkup(false, true, true);
    let diagramDayMarkup = '';
    for (let time = this.dayMin; time <= this.dayMax; time++) {
      diagramDayMarkup += this.diagramCellMarkup(this.diagramTimeMarkup(time))
    }
    return `<div class="diagram__day">${diagramTimeMarkup}${diagramDayMarkup}</div>`;
  }

  updateTime(inputDate) {
    const date = inputDate || new Date();
    this.date = date;
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }

  clock() {
    this.updateTime();
    const timeNowEl = this.element.querySelector('.diagram__time--now');
    const dayEl = this.element.querySelector('.diagram__day');
    const diagramTimeArr = this.element.querySelectorAll('.diagram__time');
    const dayElWidth = getComputedStyle(dayEl).width.slice(0, -2);
    const minuteInSec = 60 * 1000;
    const date = new Date();
    const dayStart = date.setHours(8, 0, 0);
    const now = Date.now();
    const currentMinute = (now - dayStart) / minuteInSec;
    const minuteStep = dayElWidth / (this.dayTotal * 60);
    const minute = this.minute < 10 ? `0${this.minute}` : this.minute;

    timeNowEl.classList.add('show');
    timeNowEl.style.left = `${currentMinute * minuteStep}px`;
    timeNowEl.innerHTML = `${this.hour}:${minute}`;
    if (currentMinute < 0 || currentMinute > this.dayTotal * 60) {
      timeNowEl.style.opacity = 0;
    }

    for (let diagramTime of Array.from(diagramTimeArr)) {
      const timeCellValue = +diagramTime.innerHTML;
      if (timeCellValue <= this.date.getHours()) {
        diagramTime.classList.add('diagram__time--passed');
      }
    }

    setInterval(() => {
      this.clock();
    }, minuteInSec);
  }

  diagramRowMarkup(_diagramSidebarMarkup, _diagramRowBodyMarkup, _rowClass) {
    const rowClass = _rowClass || 'diagram__row';
    const diagramSidebarMarkup = _diagramSidebarMarkup || '';
    const diagramRowBodyMarkup = _diagramRowBodyMarkup || '';
    return `<div class="${rowClass}">
              <div class="diagram__sidebar">${diagramSidebarMarkup}</div>
              <div class="diagram__row-body">${diagramRowBodyMarkup}</div>
            </div>`
  }

  getRoomMarkup(name, capacity) {
    return `<div class="diagram__room-name">${name}</div>
            <div class="diagram__room-capacity">${capacity} человек</div>`;
  }

  getRoomCellList(roomId) {
    let cellList = '';
    outer: for (let time = this.dayMin; time <= this.dayMax; time++) {
      const cellHourValue = new Date(this.year, this.month, this.day, time).valueOf();
      for (let event of this.events) {
        const eventDateStart = new Date(event.dateStart);
        const eventDateEnd = new Date(event.dateEnd);
        const eventDateStartValue = new Date(eventDateStart.getFullYear(), eventDateStart.getMonth(), eventDateStart.getDate(), eventDateStart.getHours(), eventDateStart.getMinutes()).valueOf();
        const eventDateEndValue = new Date(eventDateEnd.getFullYear(), eventDateEnd.getMonth(), eventDateEnd.getDate(), eventDateEnd.getHours(), eventDateEnd.getMinutes()).valueOf();

        if (roomId === event.id) {
          const eventStartDiff = (eventDateStartValue - cellHourValue) / 60000;
          const eventEndDiff = (eventDateEndValue - cellHourValue) / 60000;
          if (eventStartDiff >= 0 && eventStartDiff <= 60) { //Если дата и время события собвпадают с датай и временем ячейки
            cellList += `<div class="diagram__cell" data-time="${time}" data-event-started="${eventStartDiff}"></div>`;
            continue outer;
          } else if (eventStartDiff <= 0 && eventEndDiff <= 60 && eventEndDiff > 0) { //Если событие началось до ячейки и продолжается в ней
            cellList += `<div class="diagram__cell" data-time="${time}" data-event-ended="${eventEndDiff}"></div>`;
            continue outer;
          }
        }
      }
      cellList += `<div class="diagram__cell" data-time="${time}"></div>`;
    }
    return cellList;
  }

  getRoomList(floor) {
    let roomList = '';

    for (let room of this.rooms) {
      if (room.floor === floor) {
        const roomMarkup = this.getRoomMarkup(room.title, room.capacity);
        roomList += `<div class="diagram__room" data-room-id="${room.id}">
                        ${this.diagramRowMarkup(roomMarkup, this.getRoomCellList(room.id))}
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
      if (a > b) return 1;
      if (a < b) return -1;
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
                      <a href="event-new.html" class="button header__button button--blue" data-event-new-trigger>Создать встречу</a>
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

    return `<div class="inpex-page" id="app">
              ${header} 
              ${diagram}
            </div>`;
  }

  bindHandlers() {
    const eventNewTrigger = this.element.querySelector('[data-event-new-trigger]');

    eventNewTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      alert('times on');
      // Application.showEventCreate();
    });

    const windowResizeHandler = () => {
      this.clock();
    };

    window.addEventListener('resize', debounce(windowResizeHandler, 66));
  }

  viewRendered() {
    if (this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE) {
      this.clock();
    }

    renderEvents(this.events, this.date);
    openCalendar();
    activateRoomName();
    console.log(this.events);
    const renderCalendarWidget = new RenderCalendarWidget(this.date);
    renderCalendarWidget.render();
  }

}

export default MeetingRoomsView;
