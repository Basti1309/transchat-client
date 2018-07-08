import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextArea } from 'semantic-ui-react';
import { textToStore } from '../actions';
// import SpeechButton from './SpeechButton';
import { Button, Icon } from 'semantic-ui-react';
import socketIOClient from 'socket.io-client';

class SpeechInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
    };
    this.socket = socketIOClient('localhost:5000');

    this.socket.on('SEND_MESSAGE_TOCLIENT', data => {  //get text from input but coming from server
      console.log('text from client', data);
      this.props.textToStore(data);
    });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleOnClick = () => {
    this.socket.emit('SEND_TEXT_MESSAGE', {  // send text to the server
        message: this.state.value,
      });
    // this.props.textToStore(this.state.value);
    this.setState({ value: '' });
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
            <Button icon style={{ backgroundColor: 'white' }}>
              <Icon name="microphone" size ="huge"/>
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
});

export default connect(null, mapDispatchToProps)(SpeechInput);
