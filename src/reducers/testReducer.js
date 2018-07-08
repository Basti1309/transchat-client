const defaultState = {
  events: [],
  arr: []
}



export default(state = defaultState, action) => {
  switch (action.type) {
    case 'TEXT_TO_STORE':
      return { ...state,
        events: [...state.events, ...action.text] };
    default:
      return state;
  }
};
