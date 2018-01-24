export default (isEdit) => {
  return `<h3 class="event-form__title">${(isEdit) ? 'Редактирование встречи' : 'Новая встреча'}</h3>
        <a href="#" class="event-form__close circle-icon" data-cancel>
            <i>
                <svg width="10" height="10">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                </svg>
            </i>
        </a>`;
};
