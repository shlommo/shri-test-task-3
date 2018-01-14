import Application from './application';
import ApiService from './api-service';
import createSvgSprite from './tools/createSvgSprite';
import createMeetingRoom from './views/meeting-rooms-view';

// const createEvent = mutation.createEvent(
//   `{
//     title: "Тестовой запрос",
//     dateStart: "${new Date().toISOString()}",
//     dateEnd: "${new Date().toISOString()}"}
//   `, `"${[1]}"`, 6);
ApiService.getAll()
  .then((data) => {
    Application.data = data;
    Application.showMeetingRooms();
    createSvgSprite();

    document.addEventListener('dateChange', (e) => {
      const newData = Object.assign(data, {
        date: e.detail.date
      });

      Application.data = newData;
      Application.showMeetingRooms();
    });
  });



