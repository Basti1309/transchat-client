import React, { Component } from 'react';
import '../index.css';
import SpeechInput from './SpeechInput';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <div className="chat-wrapper">
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default ChatScreen;
