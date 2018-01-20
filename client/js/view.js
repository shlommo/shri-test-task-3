import {TYPES} from './data/data';
import createMeetingRoom from './views/meeting-rooms-view';
import {eventNewView, eventEditView} from './views/event-view';

const RENDERS = {
  [TYPES.MEETING_ROOMS]: createMeetingRoom,
  [TYPES.EVENT_CREATE]: eventNewView,
  [TYPES.EVENT_EDIT]: eventEditView,
};

export default (type, inputData) => {
  RENDERS[type](inputData).renderView();
};
