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
    let eventStartDate;
    // const eventStart = () ? '' : ''
    if (this.eventInputData.hasOwnProperty('startTime')) {
      eventStartDate = new Date(this.eventInputData.startTime);
      console.log(this.eventInputData);
    }
    console.log(Application.data);

    return `<div class="event-page" id="app">
              ${header} 
              <div class="event-form">
                <div class="event-form__header">${eventFormHeader(false)}</div>
                <div class="event-form__body">
                  <div class="event-form__col">
                    ${field('eventTitle', 'Тема', 'О чём будете говорить?', null, null)}
                  </div>
                  
                  <div class="event-form__col event-form__col--flex">
                    <div class="event-form__col-date">
                      ${field('eventDate', 'Дата', null, 'field--icon field--date', null, true)}
                    </div>
                    
                    <div class="event-form__col-time"></div>
                  </div>
                </div>
                <div class="event-form__footer">${eventFormFooter(false)}</div>
            </div>
            </div>`;
  }

  cancelBtnHandler(event) {
    event.preventDefault();
    this.clearHandlers();
    router.navigate();
  }

  bindHandlers() {
    this.cancelBtnArr = this.element.querySelectorAll('[data-cancel]');

    for (let cancelBtn of this.cancelBtnArr) {
      cancelBtn.addEventListener('click', this.cancelBtnHandler.bind(this))
    }
  }

  clearHandlers() {
    for (let cancelBtn of this.cancelBtnArr) {
      cancelBtn.removeEventListener('click', this.cancelBtnHandler.bind(this))
    }
  }

}

export default EventNewView;
