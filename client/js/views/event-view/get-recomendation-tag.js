import Application from './../../application';
import {getDateValue} from '../../tools/helpers';

export default (inputData, isSelected) => {
  const appData = Application.data;
  const dbRooms = appData.rooms || {};
  const eventDate = inputData.date;
  const eventStartDate = new Date(eventDate.start);
  const eventEndDate = new Date(eventDate.end);
  const roomId = inputData.room;
  const getMinutes = (date) => {
    return (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
  };
  const time = `${eventStartDate.getHours()}:${getMinutes(eventStartDate)}—${eventEndDate.getHours()}:${getMinutes(eventEndDate)}`;
  let roomTitle,
      roomFloor;

  for (let dbRoom of dbRooms) {
    if (roomId === dbRoom.id) {
      roomTitle = dbRoom.title;
      roomFloor = dbRoom.floor;
    }
  }

  return `<div class="recommendation-tag${(isSelected) ? ' recommendation-tag--selected' : ''}" data-room-id="${roomId}">
            <div class="recommendation-tag__content">
              <span class="recommendation-tag__time" 
                data-start-date="${getDateValue(eventStartDate).minute}"
                data-end-date="${getDateValue(eventEndDate).minute}">
                ${time}
              </span>
              <span class="recommendation-tag__room">
                ${roomTitle} · ${roomFloor} этаж
              </span>
            </div>
            <button class="recommendation-tag__delete">
              <i>
                  <svg width="10" height="10">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                  </svg>
              </i>
            </button>
          </div>`;
};
