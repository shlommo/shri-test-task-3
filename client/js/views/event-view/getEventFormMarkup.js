export default (isEdit) => {
  const editClass = (isEdit) ? ' event-form--edit' : '';
  const eventHeader = `<h3 class="event-form__title">${(isEdit) ? 'Редактирование встречи' : 'Новая встреча'}</h3>
        <a href="#" class="event-form__close circle-icon">
            <i>
                <svg width="10" height="10">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                </svg>
            </i>
        </a>`;
  const eventFooter = (isEdit) ?
    `button class="button button--gray">Отмена</button>
    <button class="button button--blue button--disabled">Создать встречу</button>`
    : `<button class="button button--gray" data-close>Отмена</button>
      <button class="button button--gray">Удалить</button>`;

  return `<div class="event-form${editClass}">
              <div class="event-form__header">${eventHeader}</div>
              <div class="event-form__body"></div>
              <div class="event-form__footer">${eventFooter}</div>
          </div>`;
};