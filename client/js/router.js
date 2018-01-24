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
      .on(/event\/(\w+)\/?/, (action) => {
        if (action === 'create') {
          Application.showEventCreate();
        }
      })
      .on('/', function () {
        Application.showMeetingRooms();
      })
      .resolve();
};

export {router, activateRouter};
