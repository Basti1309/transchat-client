import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

const SpeechInput = () => (
  <Form>
    <TextArea placeholder='Tell us more' style={{ minHeight: 100, marginTop: 50 }} />
  </Form>
);

export default SpeechInput;
