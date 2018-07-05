import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

class SpeechInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange (e) {
    this.setState({ value: e.target.value });
  }

  render () {
    console.log(this.state.value);
    return (
      <Form>
        <TextArea
          value={this.state.value}
          placeholder='Tell us more'
          style={{ minHeight: 100, marginTop: 50 }}
          onChange={(e) => this.handleChange(e)} />
        </Form>
    );
  }
}

export default SpeechInput;
