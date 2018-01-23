import {getNodeFromMarkup} from './../tools/helpers';

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

export default (type, inputData, callback) => {
  let popupMarkup;
  if (type === 'deletePopup') {
    popupMarkup = deletePopupTemplate();
  }
  const popup = getNodeFromMarkup(popupMarkup);
  const body = document.querySelector('body');
  const closeBtn = popup.querySelector('[data-close]');
  const actionBtn = popup.querySelector('#actionBtn');
  const cb = callback || function () {};

  body.classList.add('modal-is-opened');
  body.appendChild(popup);
  popup.classList.add('opened');

  closeBtn.addEventListener('click', () => {
    closePopup(popup);
  });
  actionBtn.addEventListener('click', () => {
    cb();
    closePopup(popup);
  });
  return true;
};

const closePopup = (popup) => {
  const body = document.querySelector('body');

  body.classList.remove('modal-is-opened');
  body.removeChild(popup);
};
