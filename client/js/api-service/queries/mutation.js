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
  }
};
