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
  }
};
