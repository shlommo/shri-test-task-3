export default {
  users: `
  {
    users {
      id,
      login,
      homeFloor,
      avatarUrl
    }
  }`,
  rooms: `
  {
    rooms {
      id,
      title,
      capacity,
      floor
    }
  }`,
  events: `
  {
    events {
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
  }`
};
