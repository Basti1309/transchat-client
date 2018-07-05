import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import '../index.css';

class SpeechButton extends Component {
  render() {
    return (
      <div className="speech-button">
        <Button icon style={{ backgroundColor: 'white' }}>
          <Icon name="microphone" size ="huge"/>
        </Button>
      </div>
);
  }
}

export default SpeechButton;
