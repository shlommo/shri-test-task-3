import AbstractView from './../abstract-view';
import Application from './../../application';
import {router} from './../../router';
import ApiService from './../../api-service';
import Flatpickr from 'flatpickr';
import {Russian} from 'flatpickr/dist/l10n/ru.js';
import {getDateValue, getNodeFromMarkup, checkEventTarget, UserException, parseObjToHash, encodeObjFromHash} from '../../tools/helpers';
import eventFormHeader from './event-form-header';
import eventFormFooter from './event-form-footer';
import field from './field';
import getUserTag from './get-user-tag';
import getRecommendation from './get-recomendation';
import getRecommendationTagMarkup from './get-recomendation-tag';
import {getAutocompleteMarkup, autocompleteHandler} from './field-autocomplete';
import showPopup from './../showPopup';

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
        inputId: 'eventStartTimeInput',
        label: 'Начало',
        placeholder: null,
        extraClass: null,
        inputValue: null,
        isDate: false
      },
      'eventEndTime': {
        inputId: 'eventEndTimeInput',
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
    this.rooms = this.appData.rooms || {};

    this.eventStartDate = new Date(+this.eventInputData.startTime);
    this.eventDateDay = getDateValue(this.eventStartDate).day; // день в который происходят все события

    this.initialAppDate = new Date();
    this.initialAppDay = getDateValue(this.initialAppDate).day; // день инициализации приложения

    this.cancelBtnHandler = this.cancelBtnHandler.bind(this);
    this.getAutocompleteHandler = this.getAutocompleteHandler.bind(this);
    this.addUserHandler = this.addUserHandler.bind(this);
    this.removeUserHandler = this.removeUserHandler.bind(this);
    this.recommendationTagDeleteBtnHandler = this.recommendationTagDeleteBtnHandler.bind(this);
    this.deleteEventBtnHandle = this.deleteEventBtnHandle.bind(this);
    this.editEventBtnHandle = this.editEventBtnHandle.bind(this);
  }

  getMarkup() {
    const header = '<header class="header"><div class="logo"></div></header>';
    const events = this.appData.events[this.eventDateDay]; // события происходящие в этот день
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
        this.currentId = event.id;
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
      date: this.eventDate,
      room: this.eventRoomId
    };

    return `<div class="event-page" id="app">
              ${header} 
              <div class="event-form event-form--edit">
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
                    <div class="recommendations" id="recomParent" data-type="room-selected">
                      <div class="recommendations__title">Ваша переговорка</div>
                      <div class="recomendations__cnt">
                        ${getRecommendationTagMarkup(this.recommendation, true)}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="event-form__footer">
                  <div class="event-form__validation">
                    <div class="event-form__validation-content"></div>
                  </div>
                  ${eventFormFooter(true)}
                </div>
            </div>
          </div>`;
  }

  cancelBtnHandler(event) {
    const day = {
      date: this.eventInputData.startTime
    };
    event.preventDefault();
    this.clearHandlers();
    router.navigate(`/date/${parseObjToHash(day)}`);
  }

  getAutocompleteHandler(event) {
    autocompleteHandler(event, this.users);
  }

  fieldResetHandler(event) {
    event.preventDefault();
    const fieldInput = this.parentNode;
    const input = fieldInput.querySelector('input');
    fieldInput.classList.remove('filled');
    input.value = '';
    input.focus();
  }

  recommendationTagClickHandler(recommendationTag) {
    const recommendationTagTime = recommendationTag.querySelector('.recommendation-tag__time');
    const startDate = recommendationTagTime.getAttribute('data-start-date');
    const endDate = recommendationTagTime.getAttribute('data-end-date');

    this.recomParentTitle.innerHTML = 'Ваша переговорка';
    recommendationTag.classList.add('recommendation-tag--selected');

    const recomTagArr = this.recomContainer.querySelectorAll('.recommendation-tag');

    for (let item of Array.from(recomTagArr)) {
      this.recomContainer.removeChild(item);
    }

    const deleteBtn = recommendationTag.querySelector('.recommendation-tag__delete');
    deleteBtn.addEventListener('click', this.recommendationTagDeleteBtnHandler);
    this.recomContainer.appendChild(recommendationTag);

    this.eventTimeStartDatepickr.setDate(new Date(+startDate));
    this.eventTimeEndDatepickr.setDate(new Date(+endDate));
  }

  recommendationTagDeleteBtnHandler(event) {
    const recommendationTag = event.target.parents('.recommendation-tag')[0];
    this.recomParent.classList.add('hidden');
    recommendationTag.parentNode.removeChild(recommendationTag);
    this.handleRecommendation();
  }

  addUserHandler(event) { // Срабатывает при добавление участника события
    let usersId = [];
    for (let eventUser of this.eventUsers) {
      usersId.push(eventUser.id);
    }
    if (usersId.indexOf(event.detail.userId) === -1) {
      this.eventUsers.push({id: event.detail.userId});
    }
    this.handleRecommendation();
  }

  removeUserHandler(event) { // Срабатывает при удалении участника события
    let newArr = [];
    for (let eventUser of this.eventUsers) {
      if (eventUser.id !== event.detail.userId) {
        newArr.push(eventUser);
      }
    }
    this.eventUsers = newArr;
    this.handleRecommendation();
  }

  clearRecommendations() {
    this.recomContainer.innerHTML = 'Нет рекомендаций';
  }

  renderRecommendations(recommendations) {
    this.recomParentTitle.innerHTML = 'Рекомендованные переговорки';
    this.recomParent.classList.remove('hidden');

    if (recommendations.length === 0) {
      this.clearRecommendations();
    } else {
      this.recomContainer.innerHTML = '';
    }

    for (let recom of recommendations) {
      let recomMarkup = getRecommendationTagMarkup(recom, false);
      let recomNode = getNodeFromMarkup(recomMarkup);

      recomNode.addEventListener('click', (event) => {
        let recomContent = recomNode.querySelector('.recommendation-tag__content');
        let recomContentChildsIsTarget = checkEventTarget(event, recomContent);
        if (event.target === recomContent || recomContentChildsIsTarget) {
          this.recommendationTagClickHandler(recomNode);
        }
      });
      this.recomContainer.appendChild(recomNode);
    }
  }

  deleteEventBtnHandle() {
    const self = this;
    showPopup('deletePopup', null, () => {
      ApiService.removeEvent(this.eventInputData.eventId)
          .then(() => {
            return ApiService.getAll();
          })
          .then((data) => {
            const newData = Object.assign(data, {
              date: self.eventStartDate
            });

            self.clearHandlers();
            Application.data = newData;
            router.navigate();
          });
    });
  }

  editEventBtnHandle() {
    try {
      this.tryEditEventBtnHandle();
    } catch (msg) {
      this.showErrorMessage(msg);
    }
  }

  tryEditEventBtnHandle() {
    const eventId = this.eventInputData.eventId;
    const eventTitle = this.element.querySelector('#eventTitle').value;
    const userTagArr = this.element.querySelectorAll('.user-tag');

    const recommendationTagSelected = this.element.querySelector('.recommendation-tag--selected');
    if (recommendationTagSelected === null) {
      throw new UserException('Вы не выбрали переговорку.');
    } else {
      this.clearErrorContainer();
    }

    const recomSwap = recommendationTagSelected.getAttribute('data-swap');
    const roomId = recommendationTagSelected.getAttribute('data-room-id');
    const dateStart = new Date(this.eventTimeStartDatepickr.selectedDates);
    const dateEnd = new Date(this.eventTimeEndDatepickr.selectedDates);
    const now = new Date();
    const currentMinute = getDateValue(now).minute;

    let users = [];
    for (let userTag of Array.from(userTagArr)) {
      if (userTag !== null) {
        let userId = userTag.getAttribute('data-user-id');
        users.push(userId);
      }
    }

    if (eventTitle.length === 0) {
      throw new UserException('Введите название мероприятия');
    } else {
      this.clearErrorContainer();
    }

    if (users.length === 0) {
      throw new UserException('Выберите участников события');
    } else {
      this.clearErrorContainer();
    }

    if (roomId === null) {
      throw new UserException('Выберите комнату из рекомменадций');
    } else {
      this.clearErrorContainer();
    }

    if (currentMinute > getDateValue(dateStart).minute) {
      throw new UserException('Время вышло. Пожалуйста, обновите время');
    } else {
      this.clearErrorContainer();
    }

    const eventInput = `{
      title: "${eventTitle}",
      dateStart: "${dateStart.toISOString()}",
      dateEnd: "${dateEnd.toISOString()}"
    }`;
    const usersInput = `[${users}]`;
    const self = this;

    const editEvent = () => {
      return ApiService.editEvent(eventId, eventInput, usersInput, roomId)
          .then(() => {
            return ApiService.getAll();
          })
          .then((data) => {
            const newData = Object.assign(data, {
              date: self.eventStartDate
            });

            self.clearHandlers();
            Application.data = newData;
            router.navigate();
          });
    };

    if (recomSwap !== null) {
      let swapArr = recomSwap.split('|');
      let swapObj;

      for (let swap of swapArr) {
        if (swap.length > 0) {
          swapObj = encodeObjFromHash(swap);

          ApiService.changeEventRoom(swapObj.event, swapObj.room)
              .then(() => {
                return editEvent();
              });
        }
      }
    } else {
      editEvent();
    }

    return true;
  }

  bindHandlers() {
    this.fieldResetBtn = this.element.querySelector('.field__reset');
    this.cancelBtnArr = this.element.querySelectorAll('[data-cancel]');
    this.autocomplete = this.element.querySelector('[data-autocomplete]');
    this.fieldResetBtn.addEventListener('click', this.fieldResetHandler);

    for (let cancelBtn of Array.from(this.cancelBtnArr)) {
      cancelBtn.addEventListener('click', this.cancelBtnHandler);
    }
    this.autocomplete.addEventListener('keyup', this.getAutocompleteHandler);

    this.recomParent = this.element.querySelector('#recomParent');
    this.recomParentTitle = this.recomParent.querySelector('.recommendations__title');
    this.recomContainer = this.recomParent.querySelector('.recomendations__cnt');
    this.recommendationTagDeleteBtn = this.recomParent.querySelector('.recommendation-tag .recommendation-tag__delete');
    this.recommendationTagDeleteBtn.addEventListener('click', this.recommendationTagDeleteBtnHandler);

    document.addEventListener('addUserToEvent', this.addUserHandler);
    document.addEventListener('removeUserFromEvent', this.removeUserHandler);

    this.deleteEventBtn = this.element.querySelector('#deleteEventBtn');
    this.deleteEventBtn.addEventListener('click', this.deleteEventBtnHandle);

    this.editEventBtn = this.element.querySelector('#editEventBtn');
    this.editEventBtn.addEventListener('click', this.editEventBtnHandle);

    this.eventFormValidation = this.element.querySelector('.event-form__validation');
    this.eventFormValidationContent = this.eventFormValidation.querySelector('.event-form__validation-content');
  }

  clearHandlers() {
    this.fieldResetBtn.removeEventListener('click', this.fieldResetHandler);

    for (let cancelBtn of Array.from(this.cancelBtnArr)) {
      cancelBtn.removeEventListener('click', this.cancelBtnHandler);
    }
    this.eventDateDatepickr.destroy();
    this.eventTimeStartDatepickr.destroy();
    this.eventTimeEndDatepickr.destroy();
    this.autocomplete.removeEventListener('keyup', this.getAutocompleteHandler);

    document.removeEventListener('addUserToEvent', this.addUserHandler);
    document.removeEventListener('removeUserFromEvent', this.removeUserHandler);
    this.recommendationTagDeleteBtn.removeEventListener('click', this.recommendationTagDeleteBtnHandler);

    this.deleteEventBtn.removeEventListener('click', this.deleteEventBtnHandle);
    this.editEventBtn.removeEventListener('click', this.editEventBtnHandle);
  }

  handleRecommendation() {
    try {
      this.tryHandleRecommendation();
    } catch (msg) {
      this.showErrorMessage(msg);
    }
  }

  tryHandleRecommendation() {
    this.members = [];
    let person = {};

    if ((this.eventDate.end - this.eventDate.start) / 60000 < 15) {
      this.clearRecommendations();
      throw new UserException('Минимальная продолжительность события - 15 минут');
    } else {
      this.clearErrorContainer();
    }

    if (this.eventDateDay < this.initialAppDay) {
      this.clearRecommendations();
      throw new UserException('Нельзя редактировать события ушедших дней');
    } else {
      this.clearErrorContainer();
    }

    for (let eventUser of this.eventUsers) {
      for (let user of this.users) {
        if (eventUser.id === user.id) {
          person = {
            login: user.login,
            floor: user.homeFloor,
            avatarUrl: user.avatarUrl
          };
          this.members.push(person);
        }
      }
    }

    if (this.members.length === 0) {
      this.clearRecommendations();
      throw new UserException('Выберите участников события');
    } else {
      this.clearErrorContainer();
    }

    // Удалить редактируемое событие из списка событий
    let newEventsArr = [];
    for (let event of this.appData.events[this.eventDateDay]) {
      if (event.id !== this.currentId) {
        newEventsArr.push(event);
      }
    }
    const db = {
      events: newEventsArr,
      rooms: this.appData.rooms,
      persons: this.appData.users
    };

    this.recommendationArr = getRecommendation(this.eventDate, this.members, db);

    return this.renderRecommendations(this.recommendationArr);
  }

  showErrorMessage(msg) {
    this.eventFormValidationContent.innerHTML = msg;
    this.eventFormValidation.classList.add('show');
  }

  clearErrorContainer() {
    if (this.eventFormValidation.classList.contains('show')) {
      this.eventFormValidation.classList.remove('show');
    }
  }

  viewRendered() {
    this.eventDateDatepickr = new Flatpickr('#date', {
      locale: Russian,
      altInput: true,
      altFormat: 'j F, Y',
      defaultDate: this.eventStartDate,
      wrap: true,
      disableMobile: 'true',
      onChange: (selectedDates) => {
        const newDay = getDateValue(new Date(selectedDates)).day;
        const eventDayMinute = getDateValue(this.eventStartDate).minute - getDateValue(this.eventStartDate).day;
        const eventEndDayMinute = getDateValue(this.eventEndDate).minute - getDateValue(this.eventStartDate).day;
        this.eventStartDate = new Date(newDay + eventDayMinute);
        this.eventEndDate = new Date(newDay + eventEndDayMinute);
        this.eventTimeStartDatepickr.setDate(this.eventStartDate);
        this.eventTimeEndDatepickr.setDate(this.eventEndDate);
      }
    });
    this.eventTimeStartDatepickr = new Flatpickr('#eventStartTimeInput', {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      defaultDate: this.eventStartDate,
      onChange: (selectedDates) => {
        const start = new Date(selectedDates);
        this.eventDate.start = start.getTime();
        this.handleRecommendation();
      }
    });
    this.eventTimeEndDatepickr = new Flatpickr('#eventEndTimeInput', {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      defaultDate: this.eventEndDate,
      onChange: (selectedDates) => {
        const end = new Date(selectedDates);
        this.eventDate.end = end.getTime();
        this.handleRecommendation();
      }

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
