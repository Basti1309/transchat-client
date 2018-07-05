import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import '../index.css';

class SpeechButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="speech-button">
        <Button icon style={{ backgroundColor: 'white' }}>
          <Icon name="microphone" size ="huge"/>
        </Button>
        <Button
          animated
          size="huge"
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

export default SpeechButton;
