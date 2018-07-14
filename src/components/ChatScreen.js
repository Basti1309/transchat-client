import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import Message from './Message';
const uuidv4 = require('uuid/v4');

class ChatScreen extends Component {
  render() {
    console.log('hata gelen yer', this.props.messages);
    const messages = this.props.messages.messages.map(message => {
          return (
            <Message
              key={uuidv4()}
              messageInfo={message}
            />
          );
        });
    return (
        <div className="chat-wrapper">
         {messages}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps, null)(ChatScreen);
