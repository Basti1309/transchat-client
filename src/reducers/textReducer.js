export default(state = [], action) => {
  switch (action.type) {
    case 'TEXT_TO_STORE':
      return [...state, action.message];
    default:
      return state;
  }
};
