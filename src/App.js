import React, { Component } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import ChatScreen from './components/ChatScreen';
import SpeechInput from './components/SpeechInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChatScreen />
        <SpeechInput />
      </div>
    );
  }
}

export default App;
