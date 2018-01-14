import Model from './data/model';

class RoomsPresenter {

  constructor(model = Model) {
    this.model = model;
  }

  setData(data) {
    this.events = data.events;
    this.rooms = data.rooms;
    console.log(this.rooms, this.events);
  }

  renderRooms() {
  }

}

export default new RoomsPresenter();