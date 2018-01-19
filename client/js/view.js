import {TYPES} from './data/data';
import createMeetingRoom from './views/meeting-rooms-view';
import {eventNewView} from './views/event-view';

const RENDERS = {
  [TYPES.MEETING_ROOMS]: createMeetingRoom,
  [TYPES.EVENT_CREATE]: eventNewView,
};

export default (type, inputData) => {
  RENDERS[type](inputData).renderView();
};
