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
      'eventTitle': {
        inputId: 'eventTitle',
        label: 'Тема',
        placeholder: 'О чём будете говорить?',
        extraClass: null,
        inputValue: null,
        isDate: false
      },
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

    if (this.eventInputData.hasOwnProperty('startTime')) {
      this.eventStartDate = new Date(+this.eventInputData.startTime);
      this.eventEndDate = new Date(+this.eventInputData.endTime)
    } else {
      this.eventStartDate = new Date();
      this.eventEndDate = new Date(this.eventStartDate.getTime() + 30 * 60 * 1000); //+30 минут
    }

    console.log(Application.data);

    return `<div class="event-page" id="app">
              ${header} 
              <div class="event-form">
                <div class="event-form__header">${eventFormHeader(false)}</div>
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
