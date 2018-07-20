const defaultState = {
  messages: [],
  languageOptions: '',
};

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
      return { ...state, startMicRecord: true,
      };
    case 'START_MIC_RECORD_FAILURE':
      return { ...state, micRecordingFailure: action.error };
    case 'LANGUAGE_CODE_REQUEST':
      return { ...state, changesSpeakerLang: false, };
    case 'LANGUAGE_CODE_SUCCESS':
      return { ...state,
                languageOptions: action.data,
                changesSpeakerLang: true,
              };
    case 'LANGUAGE_CODE_FAILURE':
      return { ...state, changesSpeakerFailure: action.error };
    case 'SOCKET_CONNECTION_RECORD_REQUEST':
      return { ...state, socketConnection: false };
    case 'SOCKET_CONNECTION_RECORD_SUCCESS':
      return { ...state, socketConnection: true,
      };
    case 'SOCKET_CONNECTION_RECORD_FAILURE':
      return { ...state, socketConnectionFailure: action.error };
    default:
      return state;
  }
};
