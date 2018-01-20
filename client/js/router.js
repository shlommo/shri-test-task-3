import Navigo from 'navigo';
import Application from './application';
import {encodeObjFromHash} from './tools/helpers';

const root = null;
const useHash = true;
const hash = '#';
const router = new Navigo(root, useHash, hash);

const activateRouter = () => {
  return router
    .on(/event\/(\w+=\d+&\w+=\d+&\w+=\d+)\/(\w+)\/?/, (hash, action) => {
      const encodeData = encodeObjFromHash(hash);
      if (action === 'create') {
        Application.showEventCreate(encodeData);
      } else if (action === 'edit') {
        Application.showEventEdit(encodeData);
      }
    })
    .on(/event\/(\w+)\/?/, (action) => {
      if (action === 'create') {
        Application.showEventCreate();
      } else if (action === 'edit') {

      }
    })
    .on('*', function () {
      Application.showMeetingRooms();
    })
    .resolve();
};

export {router, activateRouter};
