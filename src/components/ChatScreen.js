import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
const uuidv4= require('uuid/v4');

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    console.log(this.props.messages);
    return (
      <div>
        <div className="chat-wrapper">
          {this.props.messages.map(message => {
            return (
              <div className="messages" key={uuidv4()}>{message}</div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps, null)(ChatScreen);
