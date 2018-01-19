import Application from './application';
import ApiService from './api-service';
import createSvgSprite from './tools/createSvgSprite';
import {encodeObjFromHash} from './tools/helpers';
import router from './router';

// import createMeetingRoom from './views/meeting-rooms-view';

// const createEvent = mutation.createEvent(
//   `{
//     title: "Тестовый запрос",
//     dateStart: "${new Date().toISOString()}",
//     dateEnd: "${new Date().toISOString()}"}
//   `, `"${[1]}"`, 6);

createSvgSprite();

const appInit = () => {
  return ApiService.getAll()
    .then((data) => {
      Application.data = data;
      Application.showMeetingRooms();

      document.addEventListener('dateChange', (e) => {
        const newData = Object.assign(data, {
          date: e.detail.date
        });

        Application.data = newData;
        Application.showMeetingRooms();
      });
    });
};

router
  .on(/event\/(\w+=\d+&\w+=\d+&\w+=\d+)\/(\w+)\/?/, (hash, action) => {
    const encodeData = encodeObjFromHash(hash);
    if (action === 'create') {
      Application.showEventCreate(encodeData);
    } else if (action === 'edit') {

    }
  })
  .on(/event\/(\w+)\/?/, (action) => {
    if (action === 'create') {
      Application.showEventCreate();
    } else if (action === 'edit') {

    }
  })
  .on('*', function () {
    appInit();
  })
  .resolve();
