const defaultState = {
  messages: [],
};

// TODO: state i array yerine object kaydetmeye dene diger turlu calismayacak

export default(state = defaultState, action) => {
  switch (action.type) {
    case 'TEXT_TO_STORE':

      return { ...state, messages: [...state.messages,
        {
          message: action.message.text,
          serverId: action.message.socketId,
          clientId: action.message.clientId,
        },
      ], };
    case 'START_MIC_RECORD_REQUEST':
      return { ...state, startMicRecord: false };
    case 'START_MIC_RECORD_SUCCESS':
      return { ...state,
        startMicRecord: true,
      };
    case 'START_MIC_RECORD_FAILURE':
      return { ...state,
        micRecordingFailure: action.error,
      };
    default:
      return state;
  }
};
