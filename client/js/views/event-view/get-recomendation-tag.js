import Application from './../../application';

export default (inputData, isSelected) => {
  const appData = Application.data;
  const dbRooms = appData.rooms || {};
  const eventDate = inputData.eventDate;
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
            <span class="recommendation-tag__time">
              ${time}
            </span>
            <span class="recommendation-tag__room">
              ${roomTitle} · ${roomFloor} этаж
            </span>
            <button class="recommendation-tag__delete">
              <i>
                  <svg width="10" height="10">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                  </svg>
              </i>
            </button>
          </div>`;
};
