import RoomsPresenter from './rooms-presenter';
import {TYPES} from './data/data';
import view from './view';

let meetingRoomsData;

export default class Application {

  static showMeetingRooms() {
    view(TYPES.MEETING_ROOMS, meetingRoomsData);
  }

  static showEventCreate() {
    view(TYPES.EVENT_CREATE, meetingRoomsData)
  }

  static set data(data) {
    meetingRoomsData = data;
  }

}
