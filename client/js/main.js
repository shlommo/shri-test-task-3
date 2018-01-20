import Application from './application';
import ApiService from './api-service';
import createSvgSprite from './tools/createSvgSprite';
import {activateRouter} from './router';

// import createMeetingRoom from './views/meeting-rooms-view';

// const createEvent = mutation.createEvent(
//   `{
//     title: "Тестовый запрос",
//     dateStart: "${new Date().toISOString()}",
//     dateEnd: "${new Date().toISOString()}"}
//   `, `"${[1]}"`, 6);

createSvgSprite();

ApiService.getAll()
  .then((data) => {
    Application.data = data;

    activateRouter();

    document.addEventListener('dateChange', (e) => {
      const newData = Object.assign(data, {
        date: e.detail.date
      });

      Application.data = newData;
      Application.showMeetingRooms();
    });
  });


