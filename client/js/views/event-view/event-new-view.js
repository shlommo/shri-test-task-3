import AbstractView from './../abstract-view';
import getEventFormMarkup from './getEventFormMarkup';
import Application from './../../application';

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

    console.log(this.eventInputData, Application.data);

    return `<div class="event-page" id="app">
              ${header} 
              <div class="event-form">
                <div class="event-form__header">${eventFormHeader(false)}</div>
                <div class="event-form__body">
                  <div class="event-form__col">
                    ${field('fieldInputOne', 'Тема', 'О чём будете говорить?')}
                  </div>
                </div>
                <div class="event-form__footer">${eventFormFooter(false)}</div>
            </div>
            </div>`;
  }

  bindHandlers() {
  }

}

export default EventNewView;
