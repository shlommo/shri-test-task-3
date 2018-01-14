import 'whatwg-fetch';
import {query, mutation} from './queries';
import { grapnhQlRequest } from './helpers'


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
        responseData.events = res.data.events;
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