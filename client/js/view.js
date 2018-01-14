import {TYPES} from './data/data';
import createMeetingRoom from './views/meeting-rooms-view';

const RENDERS = {
  [TYPES.MEETING_ROOMS]: createMeetingRoom,
};

export default (type, inputData) => {
  RENDERS[type](inputData).renderView();
};
