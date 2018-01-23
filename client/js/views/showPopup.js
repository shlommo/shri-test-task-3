import {getNodeFromMarkup, getDateValue} from './../tools/helpers';
import {monthNames} from './../data/data';

const deletePopupTemplate = () => {
  return `<div class="popup" id="deleteEventPopup">
            <div class="popup__content inform-popup">
                <i class="inform-popup__icon inform-popup__icon--can-not"></i>
                <span class="inform-popup__title">
                    Встреча будет
                    удалена&nbsp;безвозвратно
                </span>
        
                <div class="inform-popup__buttons">
                    <button class="button button--gray" data-close>Отмена</button>
                    <button class="button button--gray" id="actionBtn">Удалить</button>
                </div>
            </div>
        </div>`;
};

const newEventTemplate = (inputData) => {
  const dateStart = inputData.dateStart;
  const dateEnd = inputData.dateEnd;
  const inclineMonths = monthNames.map((month) => {
    const lastLetterCharCode = month.toLowerCase().charCodeAt(month.length - 1);
    let inclineMonth;

    if (lastLetterCharCode === 1100 || lastLetterCharCode === 1081) {
      inclineMonth = month.slice(0, -1) + 'я';
    } else if (lastLetterCharCode === 1090) {
      inclineMonth = month + 'а';
    }
    return inclineMonth.toLowerCase();
  });
  const month = inclineMonths[dateStart.getMonth()];
  const getMinutes = (date) => {
    return (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
  };
  const time = `${dateStart.getHours()}:${getMinutes(dateStart)}—${dateEnd.getHours()}:${getMinutes(dateEnd)}`;
  return `<div class="popup">
            <div class="popup__content inform-popup">
                <i class="inform-popup__icon inform-popup__icon--success"></i>
                <span class="inform-popup__title">
                    Встреча создана!
                </span>
        
                <div class="inform-popup__info">
                    <span class="inform-popup__info-row">
                        ${dateStart.getDate()} ${month}, ${time}
                    </span>
                    <span class="inform-popup__info-row">
                        ${inputData.roomName} · ${inputData.roomFloor} этаж
                    </span>
                </div>
        
                <div class="inform-popup__buttons">
                    <button class="button button--blue" id="actionBtn">Хорошо</button>
                </div>
            </div>
        </div>`;
};

export default (type, inputData, callback) => {
  let popupMarkup;
  if (type === 'deletePopup') {
    popupMarkup = deletePopupTemplate();
  } else if (type === 'newEvent') {
    popupMarkup = newEventTemplate(inputData);
  }
  const popup = getNodeFromMarkup(popupMarkup);
  const body = document.querySelector('body');
  const closeBtn = popup.querySelector('[data-close]');
  const actionBtn = popup.querySelector('#actionBtn');
  const cb = callback || function () {};

  body.classList.add('modal-is-opened');
  body.appendChild(popup);
  popup.classList.add('opened');

  actionBtn.addEventListener('click', () => {
    cb();
    closePopup(popup);
  });

  if (closeBtn === null) {
    return false;
  }
  closeBtn.addEventListener('click', () => {
    closePopup(popup);
  });
  return true;
};

const closePopup = (popup) => {
  const body = document.querySelector('body');

  body.classList.remove('modal-is-opened');
  body.removeChild(popup);
};
