import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <div className="chat-wrapper">
          <span>{this.props.text.events}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text,
});

export default connect(mapStateToProps, null)(ChatScreen);
