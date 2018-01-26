import Navigo from 'navigo';
import Application from './application';
import {encodeObjFromHash} from './tools/helpers';

const root = null;
const useHash = true;
const hash = '#';
const router = new Navigo(root, useHash, hash);

const activateRouter = () => {
  return router
      .on(/event\/(\w+=\d+&\w+=\d+&\w+=\d+)\/(\w+)\/?/, (urlHash, action) => {
        const encodeData = encodeObjFromHash(urlHash);
        if (action === 'create') {
          Application.showEventCreate(encodeData);
        } else if (action === 'edit') {
          Application.showEventEdit(encodeData);
        }
      })
      // .on(/event\/(\w+)\/(\w+=\d+&\w+=\d+)\/?/, (action) => {
      //   const encodeData = encodeObjFromHash(urlHash);
      //   if (action === 'create') {
      //     Application.showEventCreate();
      //   }
      // })
      .on(/date\/(\w+=\d+)\/?/, (urlHash) => {
        const encodeData = encodeObjFromHash(urlHash);
        const newData = Object.assign({}, Application.data, {
          date: new Date(+encodeData.date)
        });

        Application.data = newData;
        Application.showMeetingRooms();
      })
      .on('/', function () {
        const newData = Object.assign({}, Application.data, {
          date: new Date()
        });

        Application.data = newData;
        Application.showMeetingRooms();
      })
      .resolve();
};

export {router, activateRouter};
