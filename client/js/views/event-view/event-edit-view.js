import AbstractView from './../abstract-view';
import Application from './../../application';
import {router} from './../../router';
import Flatpickr from 'flatpickr';
import {Russian} from 'flatpickr/dist/l10n/ru.js';

import eventFormHeader from './event-form-header';
import eventFormFooter from './event-form-footer';
import field from './field';
import getUserTag from './get-user-tag';
import getRecommendationTagMarkup from './get-recomendation-tag';
import {getAutocompleteMarkup, autocompleteHandler} from './field-autocomplete';

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
    this.appData = Application.data;
    this.users = this.appData.users || {};
    this.rooms = this.appData.rooms || {}
  }

  getMarkup() {
    const header = `<header class="header"><div class="logo"></div></header>`;
    const eventDate = new Date(+this.eventInputData.startTime);
    const eventDateDay = eventDate.setHours(0, 0, 0, 0);
    const events = this.appData.events[eventDateDay];
    const eventInputId = this.eventInputData.eventId; // id события переданное по url
    this.eventStartDate = new Date(+this.eventInputData.startTime);
    this.eventEndDate = new Date(+this.eventInputData.endTime);
    this.eventDate = {
      start: +this.eventInputData.startTime,
      end: +this.eventInputData.endTime
    };

    let eventName;
    for (let event of events) {
      if (eventInputId === event.id) {
        eventName = event.title;
        this.eventUsers = event.users;
        this.eventRoomId = event.room.id;
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

    this.recommendation = {
      eventDate: this.eventDate,
      room: this.eventRoomId
    };

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
                    ${getAutocompleteMarkup(this.fieldsProps.eventMembers)}                  
                  </div>
                  
                  <div class="event-form__col">
                    <div class="recommendations">
                      <div class="recommendations__title">Ваша переговорка</div>
                      <div class="recomendations__cnt">
                        ${getRecommendationTagMarkup(this.recommendation, true)}
                      </div>
                    </div>
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

  getAutocompleteHandler(event) {
    autocompleteHandler(event, this.users);
  }

  fieldResetHandler(event) {
    event.preventDefault();
    const field = this.parentNode;
    const input = field.querySelector('input');
    field.classList.remove('filled');
    input.value = '';
    input.focus();
  }

  recommendationTagClickHandler(recommendationTag) {
    const click = () => {
      recommendationTag.classList.add('recommendation-tag--selected');
      removeClickHandler();
    };
    const removeClickHandler = () => {
      recommendationTag.removeEventListener('click', click);
    };
    recommendationTag.addEventListener('click', click);
  }

  recommendationTagHandlers() {
    this.recommendationTagArr = this.element.querySelectorAll('.recommendation-tag');

    for (let recommendationTag of Array.from(this.recommendationTagArr)) {
      const recommendationTagDeleteBtn = recommendationTag.querySelector('.recommendation-tag__delete');

      if (!recommendationTag.classList.contains('recommendation-tag--selected')) {
        this.recommendationTagClickHandler(recommendationTag);
      }

      recommendationTagDeleteBtn.addEventListener('click', () => {
        recommendationTag.classList.remove('recommendation-tag--selected');
        setTimeout(() => {
          this.recommendationTagClickHandler(recommendationTag);
        }, 10);
      });
    }
  }

  bindHandlers() {
    this.fieldResetBtn = this.element.querySelector('.field__reset');
    this.cancelBtnArr = this.element.querySelectorAll('[data-cancel]');
    this.autocomplete = this.element.querySelector('[data-autocomplete]');
    this.fieldResetBtn.addEventListener('click', this.fieldResetHandler);

    for (let cancelBtn of Array.from(this.cancelBtnArr)) {
      cancelBtn.addEventListener('click', this.cancelBtnHandler.bind(this))
    }
    this.autocomplete.addEventListener('keyup', this.getAutocompleteHandler.bind(this));

    this.recommendationTagHandlers();
  }

  clearHandlers() {
    this.fieldResetBtn.removeEventListener('click', this.fieldResetHandler);

    for (let cancelBtn of Array.from(this.cancelBtnArr)) {
      cancelBtn.removeEventListener('click', this.cancelBtnHandler.bind(this))
    }
    this.eventDateDatepickr.destroy();
    this.eventTimeStartDatepickr.destroy();
    this.eventTimeEndDatepickr.destroy();
    this.autocomplete.removeEventListener('keyup', this.getAutocompleteHandler.bind(this));
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

    this.autocompleteTagsContainer = this.element.querySelector('.field-autocomplete__tags');

    let userTag;
    for (let eventUser of this.eventUsers) {
      for (let user of this.users) {
        if (eventUser.id === user.id) {
          userTag = getUserTag(user.id, user.login, user.avatarUrl);
          this.autocompleteTagsContainer.appendChild(userTag);
        }
      }
    }
  }
}

export default EventNewView;
