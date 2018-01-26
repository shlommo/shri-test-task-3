export default {
  createEvent: (eventInput, usersIds, roomId) => {
    return `
    mutation {
      createEvent(input: ${eventInput}, usersIds: ${usersIds}, roomId: ${roomId}) {
        id,
        title,
        dateStart,
        dateEnd,
        users {
          id
        },
        room {
          id
        }
      }
    }`;
  },
  removeEvent: (eventId) => {
    return `
    mutation {
      removeEvent(id: ${eventId}) {
        id,
      }
    }`;
  },
  updateEvent: (id, eventInput) => {
    return `
    mutation {
      updateEvent(id: ${id}, input: ${eventInput}) {
        id,
        title,
        dateStart,
        dateEnd,
        users {
          id
        },
        room {
          id
        }
      }
    }`;
  },
  changeEventRoom: (id, roomId) => {
    return `
    mutation {
      changeEventRoom(id: ${id}, roomId: ${roomId}) {
        id,
        title,
        dateStart,
        dateEnd,
        users {
          id
        },
        room {
          id
        }
      }
    }`;
  }
};
