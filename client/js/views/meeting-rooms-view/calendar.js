import hideOnClickOutside from '../../tools/hide-on-click-outside';
import {addListenerMulti} from './../../tools/helpers';

const calendarMarkup = () => {
  return `<div class="calendar" id="calendar">
              <div class="calendar__header">
                  <span class="calendar__header-trigger calendar__header-trigger--left circle-icon circle-icon--left" data-calendar-trigger data-direction="left">
                      <i>
                          <svg width="12" height="12">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>
                          </svg>
                      </i>
                  </span>
                  <span class="calendar__header-date-title" id="calendarTrigger">
                  </span>
                  <div class="calendar__header-trigger calendar__header-trigger--right circle-icon" data-calendar-trigger data-direction="right">
                      <i>
                          <svg width="12" height="12">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>
                          </svg>
                      </i>
                  </div>
              </div>
              <div class="calendar__body" id="calendarBody">
                  <div class="calendar-widget">
                      <div class="calendar-widget__body" id="calendarWidget" data-quarter="1"></div>
                  </div>
              </div>
              <div class="calendar__overlay"></div>
          </div>`;
};

const openCalendar = () => {
  const calendarTrigger = document.getElementById('calendarTrigger');
  const calendar = document.getElementById('calendar');
  const body = document.querySelector('body');
  const classToAdd = 'opened';
  const classToBody = 'calendar-opened';

  if (calendarTrigger === null) {
    return false;
  }

  const calendarOverlay = calendar.querySelector('.calendar__overlay');

  calendarTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    if (calendar.classList.contains(classToAdd)) {
      removeAction();
    } else {
      calendar.classList.add(classToAdd);
      body.classList.add(classToBody);
    }

    hideOnClickOutside('#calendar', removeAction);

    addListenerMulti(calendarOverlay, 'click touchstart', removeAction);
  });

  const removeAction = () => {
    calendar.classList.remove(classToAdd);
    body.classList.remove(classToBody);
  };

  return true;
};

export {calendarMarkup, openCalendar};
