import AbstractView from './../abstract-view';
import Application from './../../application';
import {router} from './../../router';
import Flatpickr from 'flatpickr';
import {Russian} from 'flatpickr/dist/l10n/ru.js';

import eventFormHeader from './event-form-header';
import eventFormFooter from './event-form-footer';
import field from './field';
import fieldAutocomplete from './field-autocomplete';

class EventNewView extends AbstractView {

  constructor(eventInputData) {
    super(eventInputData);
    this.eventInputData = eventInputData || {};
    this.fieldsProps = {
      'eventDate': {
        inputId: 'eventDate',
        label: 'Дата',
        placeholder: null,
        extraClass: 'field--icon field--date',
        inputValue: null,
        isDate: true
      },
      'eventStartTime': {
        inputId: 'eventStartTime',
        label: 'Начало',
        placeholder: null,
        extraClass: null,
        inputValue: null,
        isDate: false
      },
      'eventEndTime': {
        inputId: 'eventEndTime',
        label: 'Конец',
        placeholder: null,
        extraClass: null,
        inputValue: null,
        isDate: false
      },
      'eventMembers': {
        inputId: 'eventMembers',
        label: 'Участники',
        placeholder: 'Например, Тор Одинович',
        extraClass: null,
        inputValue: null,
        isDate: false
      }
    };
  }

  getMarkup() {
    const header = `<header class="header"><div class="logo"></div></header>`;
    const appData = Application.data;
    const eventDate = new Date(+this.eventInputData.startTime);
    const eventDateDay = eventDate.setHours(0, 0, 0);
    const events = appData.events[eventDateDay];
    const eventInputId = this.eventInputData.eventId; // id события переданное по url
    this.eventStartDate = new Date(+this.eventInputData.startTime);
    this.eventEndDate = new Date(+this.eventInputData.endTime);

    let eventName;
    let usersId;
    for (let event of events) {
      if (eventInputId === event.id) {
        eventName = event.title;
        usersId = event.users;
      }
    }
    this.fieldsProps.eventTitle = {
      inputId: 'eventTitle',
      label: 'Тема',
      placeholder: 'О чём будете говорить?',
      extraClass: null,
      inputValue: eventName,
      isDate: false
    };

    console.log(usersId);

    // console.log(new Date(+this.eventInputData.startTime), new Date(+this.eventInputData.endTime), Application.data);

    return `<div class="event-page" id="app">
              ${header} 
              <div class="event-form">
                <div class="event-form__header">${eventFormHeader(true)}</div>
                <div class="event-form__body">
                  <div class="event-form__col">
                    ${field(this.fieldsProps.eventTitle)}
                  </div>
                  
                  <div class="event-form__col event-form__col--flex">
                    <div class="event-form__col-date">
                      ${field(this.fieldsProps.eventDate)}
                    </div>
                    
                    <div class="event-form__col-time">
                      ${field(this.fieldsProps.eventStartTime)}
                      <i class="event-form__col-time-separator"></i>
                      ${field(this.fieldsProps.eventEndTime)}
                    </div>
                  </div>
                  
                  <div class="event-form__col">
                    ${fieldAutocomplete(this.fieldsProps.eventMembers)}                  
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
    this.eventDateDatepickr.destroy();
    this.eventTimeStartDatepickr.destroy();
    this.eventTimeEndDatepickr.destroy();
  }

  viewRendered() {
    this.eventDateDatepickr = new Flatpickr('#date', {
      locale: Russian,
      altInput: true,
      altFormat: 'j F, Y',
      defaultDate: this.eventStartDate,
      wrap: true,
      disableMobile: 'true'
    });
    this.eventTimeStartDatepickr = new Flatpickr('#eventStartTime', {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      defaultDate: this.eventStartDate,
    });
    this.eventTimeEndDatepickr = new Flatpickr('#eventEndTime', {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      defaultDate: this.eventEndDate,
    });
  }
}

export default EventNewView;
