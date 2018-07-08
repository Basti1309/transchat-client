import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import '../index.css';
import { textToStore } from '../actions';
import socketIOClient from 'socket.io-client';

class SpeechButton extends Component {
  constructor (props) {
    super(props);

  }

  // handleOnClick = () => {
  //   this.socket.emit('SEND_TEXT_MESSAGE', {  // send text to the server
  //       message: this.props.text,
  //     });
  //   this.props.textToStore(this.props.text);
  //   this.props.clear();
  // };

  render() {

    return (
      <div className="speech-button">
        <Button icon style={{ backgroundColor: 'white' }}>
          <Icon name="microphone" size ="huge"/>
        </Button>
        <Button
          animated
          size="huge"
          // onClick={() => this.handleOnClick()}
          >
          <Button.Content visible>Send</Button.Content>
          <Button.Content hidden>
            <Icon name='send' />
          </Button.Content>
        </Button>
      </div>
);
  }
}

// const mapDispatchToProps = dispatch => ({
//   textToStore: (text) => dispatch(textToStore(text)),
// });

// const mapDispatchToProps = dispatch => ({
//   textToScreen: () => dispatch(textToScreen()),
// });

export default connect(null, mapDispatchToProps)(SpeechButton);
