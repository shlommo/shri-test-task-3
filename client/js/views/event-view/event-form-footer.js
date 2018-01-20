export default (isEdit) => {
  let eventFormContent = (isEdit) ?
    `<a href="#" class="button button--gray" data-cancel>Отмена</a>
      <button class="button button--gray">Удалить</button>`
    : `<a href="#" class="button button--gray" data-cancel>Отмена</a>
    <button class="button button--blue button--disabled">Создать встречу</button>`;

  return  eventFormContent;
}
