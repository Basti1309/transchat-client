export default(state = [], action) => {
  switch (action.type) {
    case 'TEXT_TO_STORE':
      return state.concat([
        {
          message: action.message.text,
          serverId: action.message.socketId,
          clientId: action.message.clientId,
        },
      ]);
    default:
      return state;
  }
};
