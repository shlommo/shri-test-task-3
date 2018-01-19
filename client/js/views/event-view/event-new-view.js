import AbstractView from './../abstract-view';
import getEventFormMarkup from './getEventFormMarkup';

import Application from './../../application';

class EventNewView extends AbstractView {

  constructor(eventInputData) {
    super(eventInputData);
    this.eventInputData = eventInputData || {};
  }

  getMarkup() {
    const header = `<header class="header"><div class="logo"></div></header>`;

    const eventForm = getEventFormMarkup(false);

    console.log(this.eventInputData, Application.data);

    return `<div class="event-page" id="app">
              ${header} 
              ${eventForm}
            </div>`;
  }

  bindHandlers() {
  }

}

export default EventNewView;
