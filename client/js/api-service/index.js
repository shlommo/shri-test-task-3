import 'whatwg-fetch';
import {query, mutation} from './queries';
import grapnhQlRequest from './grapnhql-request';
import {getDateValue} from './../tools/helpers';


class ApiService {

  getRooms() {
    return grapnhQlRequest(query.rooms);
  }

  getEvents() {
    return grapnhQlRequest(query.events);
  }

  getUsers() {
    return grapnhQlRequest(query.users);
  }

  getAll() {
    const responseData = {};
    let getAllRequest = new Promise((resolve, reject) => {
        resolve(this.getRooms());
      }
    );
    return getAllRequest
      .then((res) => {
        responseData.rooms = res.data.rooms;
        return this.getEvents();
      })
      .then((res) => {
        /**
         * @typedef {Object} EventsSortedByDate
         * @property {Event[]} timestamp Встречи отсортированные по дате.
         */
        let eventsSortedByDate = {};
        for (let event of res.data.events) {
          const dateStart = new Date(event.dateStart);
          const dateStartDay = getDateValue(dateStart).day;

          if (!eventsSortedByDate.hasOwnProperty(dateStartDay)) {
            eventsSortedByDate[dateStartDay] = [event];
          } else {
            eventsSortedByDate[dateStartDay].push(event)
          }
        }
        responseData.events = eventsSortedByDate;

        // console.log(eventsSortedByDate);
        return this.getUsers();
      })
      .then((res) => {
        responseData.users = res.data.users;
        return responseData;
      })
      .catch((error) => {
        throw new Error(`Rejected: ${error}`)
      });
  }

}

export default new ApiService();