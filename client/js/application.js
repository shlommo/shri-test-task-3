import {TYPES} from './data/data';
import view from './view';

let meetingRoomsData;

export default class Application {

  static showMeetingRooms() {
    view(TYPES.MEETING_ROOMS, meetingRoomsData);
  }

  static showEventCreate(eventInputData) {
    view(TYPES.EVENT_CREATE, eventInputData);
  }

  static showEventEdit(eventInputData) {
    view(TYPES.EVENT_EDIT, eventInputData);
  }

  static set data(data) {
    meetingRoomsData = data;
  }

  static get data() {
    return meetingRoomsData;
  }

}
