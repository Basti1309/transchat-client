import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextArea } from 'semantic-ui-react';
import { textToStore, startMicRecord } from '../actions';
import { Button, Icon } from 'semantic-ui-react';
import socketIOClient from 'socket.io-client';
import { PropagateLoader } from 'react-spinners';
import '../index.css';

class SpeechInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      socketId: '',
      loading: false,
    };
    this.socket = socketIOClient('localhost:5000');
    this.socket.on('connect', () => {
      console.log('SOCKET ID FROM CLIENT', this.setState({ socketId: this.socket.id }));
    });

    this.socket.on('SEND_MESSAGE_TOCLIENT', data => {  //get text from input but coming from server
      console.log('text from client', data);

      data.clientId = this.state.socketId;
      this.props.textToStore(data);
    });

    this.socket.on('GET_SPEECH_TEXT', data => { //speak from server
      this.setState({ value: data });
      console.log('text from speech', data);
    });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value }, () => console.log('test'));
  };

  handleOnClick = () => {
    this.socket.emit('SEND_TEXT_MESSAGE', {  // send text to the server
        text: this.state.value,
      });
    this.setState({ value: '' });
  };

  handleMicClick = () => {
    this.props.startMicRecord();
    this.setState({ loading: true }, () => console.log('test'));
  };

  handleGetSpeech = () => {
    this.state.value ? this.socket.emit('GET_SPEECH_TEXT', { text: this.state.value }) :
    this.socket.emit('GET_SPEECH_TEXT', {});
  };

  render () {

    return (
      <Form>
        <TextArea
          value={this.state.value}
          placeholder='Tell us more'
          style={{ minHeight: 100, marginTop: 50 }}
          onChange={(e) => this.handleChange(e)} />
          <div className="speech-button">

            <Button icon
              style={{ backgroundColor: 'white' }}
              onClick={() => this.handleMicClick()}>
              <Icon name="microphone" size ="huge"/>
            </Button>
            <div className="spinner">
            <PropagateLoader

              color={'#FF4136'}
              loading={this.state.loading}
            />
            </div>
            <Button icon
              style={{ backgroundColor: 'white' }}
              onClick={() => this.handleGetSpeech()}>
              <Icon name="translate" size ="huge"/>
            </Button>
            <Button
              animated
              size="huge"
              onClick={() => this.handleOnClick()}
              >
              <Button.Content visible>Send</Button.Content>
              <Button.Content hidden>
                <Icon name='send' />
              </Button.Content>
            </Button>
          </div>
        </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  textToStore: (text) => dispatch(textToStore(text)),
  startMicRecord: () => dispatch(startMicRecord()),
});

export default connect(null, mapDispatchToProps)(SpeechInput);
