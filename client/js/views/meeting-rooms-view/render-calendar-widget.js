import {getNodeFromMarkup, getDay, getDateValue} from './../../tools/helpers';
import {monthNames} from './../../data/data'

export default class RenderCalendarWidget {
  constructor(date) {
    this.date = date;
    this.calendarWidget = document.getElementById('calendarWidget');
    this.calendar = document.getElementById('calendar');
    this.monthNamesShortcuts = monthNames.map((month) => {return month.toLowerCase().slice(0, 3)});
  }

  getMonth(year, month) {
    const d = new Date(year, month);
    const today = this.date.getDate();
    const currentMonth = this.date.getMonth();
    const now = new Date();
    const nowDay = now.getDate();
    const nowMonth = now.getMonth();

    let daysView = '';

    for (let i = 0; i < getDay(d); i++) {
      daysView += '<div class="month__day empty"></div>';
    }

    while (d.getMonth() === month) {
      let todayClass = '';
      if (d.getDate() === today && currentMonth === month) {
        todayClass = 'today';
      } else if(d.getDate() === nowDay && nowMonth === month) {
        todayClass = 'still-today';
      }

      daysView += `<div class="month__day ${todayClass}" data-shortcut="${month}">${d.getDate()}</div>`;

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) !== 0) {
      for (let i = getDay(d); i < 7; i++) {
        daysView += '<div class="month__day empty"></div>';
      }
    }

    const monthView = `<div class="calendar-widget__month month">
                          <div class="month__name" data-motnh="${currentMonth}">${monthNames[month]}</div>
                          <div class="month__week">
                              <div class="month__day">Пн</div>
                              <div class="month__day">Вт</div>
                              <div class="month__day">Ср</div>
                              <div class="month__day">Чт</div>
                              <div class="month__day">Пт</div>
                              <div class="month__day">Сб</div>
                              <div class="month__day">Вс</div>
                          </div>
  
                          <div class="month__days">
                              ${daysView}
                          </div>
                      </div>`;

    return monthView;
  }

  moveCalendarWidget() {
    const yearQuarter = this.calendarWidget.getAttribute('data-quarter');

    this.calendarWidget.style.transform = `translateX(-${100 * (+yearQuarter - 1)}%)`;
  }

  activateCalendarSlide() {
    const calendarTriggerArr = this.calendar.querySelectorAll('[data-calendar-trigger]');
    const self = this;

    let yearQuarter = this.calendarWidget.getAttribute('data-quarter');

    for (let calendarTrigger of Array.from(calendarTriggerArr)) {
      calendarTrigger.addEventListener('click', () => {
        const calendarTriggerDirection = calendarTrigger.getAttribute('data-direction');
        const windowWidth = window.innerWidth;
        let quarterMaxValue;

        if (!this.calendar.classList.contains('opened')) {
          return false;
        }

        quarterMaxValue = (windowWidth < 1280) ? 12 : 4;

        if (calendarTriggerDirection === 'left' && yearQuarter > 1) {
          --yearQuarter;
          this.calendarWidget.setAttribute('data-quarter', yearQuarter);
          self.moveCalendarWidget();
        } else if (calendarTriggerDirection === 'right' && yearQuarter < quarterMaxValue) {
          yearQuarter++;
          this.calendarWidget.setAttribute('data-quarter', yearQuarter);
          self.moveCalendarWidget();
        }
        return true;
      });
    }
  }

  dayHandler() {
    const dayArr = this.calendarWidget.querySelectorAll('.month__days .month__day:not(.empty)');
    const calendarHeaderTitle = this.calendar.querySelector('.calendar__header-date-title');


    for (let day of Array.from(dayArr)) {
      const yearValue = this.date.getFullYear();
      const monthValue = day.getAttribute('data-shortcut');
      const dayValue = day.innerHTML;
      const now = new Date();
      const hourValue = now.getHours();
      const minutesValue = now.getMinutes();
      const secondsValue = now.getSeconds();

      const dateChangeEvent = new CustomEvent("dateChange", {
        detail: {
          date: new Date(yearValue, monthValue, dayValue, hourValue, minutesValue, secondsValue)
        }
      });


      day.addEventListener('click', () => {
        this.calendarWidget.querySelector('.month__day.today').classList.remove('today');
        day.classList.add('today');
        calendarHeaderTitle.innerHTML = day.innerHTML + ' ' + this.monthNamesShortcuts[monthValue];

        document.dispatchEvent(dateChangeEvent);
      });
    }
  }

  render() {
    const now = new Date();
    const today = getDateValue(now).day;
    const inputDate = this.date;
    const inputDateValue = getDateValue(inputDate).day;
    const day = this.date.getDate();
    const currentYear = this.date.getFullYear();
    const currentMonth = this.date.getMonth() + 1;

    if (this.calendar === null) {
      return false;
    }


    const dayTitle = (inputDateValue === today) ? '· Сегодня' : '';

    const calendarHeaderTitle = this.calendar.querySelector('.calendar__header-date-title');
    calendarHeaderTitle.innerHTML = `${day} ${this.monthNamesShortcuts[currentMonth - 1]} ${dayTitle}`;

    for (let i = 0; i <= 11; i++) {
      const monthView = this.getMonth(currentYear, i);
      const monthViewNode = getNodeFromMarkup(monthView);

      this.calendarWidget.appendChild(monthViewNode);
    }

    if (window.innerWidth < 1280) {
      this.calendarWidget.setAttribute('data-quarter', currentMonth);
    } else {
      this.calendarWidget.setAttribute('data-quarter', Math.floor((currentMonth + 2) / 3));
    }

    this.activateCalendarSlide();

    this.moveCalendarWidget();

    this.dayHandler();

    return true;
  }
}
