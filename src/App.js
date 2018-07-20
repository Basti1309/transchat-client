import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import './index.css';
import Header from './components/Header';
import ChatScreen from './components/ChatScreen';
import SpeechInput from './components/SpeechInput';
import { socketConnect } from './actions';

class App extends Component {
  componentWillMount() {
    this.props.socketConnect();
  }

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

const mapDispatchToProps = dispatch => ({
  socketConnect: () => dispatch(socketConnect()),
});

export default connect(null, mapDispatchToProps)(App);
