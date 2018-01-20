import AbstractView from './../abstract-view';
import getEventFormMarkup from './getEventFormMarkup';
import Application from './../../application';
import {router} from './../../router';

import eventFormHeader from './event-form-header';
import eventFormFooter from './event-form-footer';
import field from './field';

class EventNewView extends AbstractView {

  constructor(eventInputData) {
    super(eventInputData);
    this.eventInputData = eventInputData || {};
  }

  getMarkup() {
    const header = `<header class="header"><div class="logo"></div></header>`;
    const appData = Application.data;
    const eventDate = new Date(+this.eventInputData.startTime);
    const eventDateDay = eventDate.setHours(0, 0, 0);
    const events = appData.events[eventDateDay];
    const eventInputId = this.eventInputData.eventId; // id события переданное по url

    let eventName;
    for (let event of events) {
      if (eventInputId === event.id) {
        eventName = event.title;
      }
    }

    // console.log(new Date(+this.eventInputData.startTime), new Date(+this.eventInputData.endTime), Application.data);

    return `<div class="event-page" id="app">
              ${header} 
              <div class="event-form">
                <div class="event-form__header">${eventFormHeader(true)}</div>
                <div class="event-form__body">
                  <div class="event-form__col">
                    ${field('fieldInputOne', 'Тема', 'О чём будете говорить?', null, eventName)}
                  </div>
                </div>
                <div class="event-form__footer">${eventFormFooter(true)}</div>
            </div>
            </div>`;
  }

  cancelBtnHandler(event) {
    event.preventDefault();
    this.clearHandlers();
    router.navigate();
  }

  fieldResetHandler(event) {
    event.preventDefault();
    const field = this.parentNode;
    const input = field.querySelector('input');
    field.classList.remove('filled');
    input.value = '';
    input.focus();
  }

  bindHandlers() {
    this.fieldResetBtn = this.element.querySelector('.field__reset');
    this.cancelBtnArr = this.element.querySelectorAll('[data-cancel]');

    this.fieldResetBtn.addEventListener('click', this.fieldResetHandler);

    for (let cancelBtn of this.cancelBtnArr) {
      cancelBtn.addEventListener('click', this.cancelBtnHandler.bind(this))
    }
  }

  clearHandlers() {
    this.fieldResetBtn.removeEventListener('click', this.fieldResetHandler);

    for (let cancelBtn of this.cancelBtnArr) {
      cancelBtn.removeEventListener('click', this.cancelBtnHandler.bind(this))
    }
  }
}

export default EventNewView;
