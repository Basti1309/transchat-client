import React, { Component } from 'react';
import '../index.css';
const uuidv4 = require('uuid/v4');

export default (props) => {
  // Was the message sent by the current user. If yes, add a css class
    const fromMe = props.messageInfo.serverId === props.messageInfo.clientId ?
     'messages' : 'messages-other';

    return (
      <div className={`fromMe-${fromMe}`}>
      <div
        className={`${fromMe}`}
        key={uuidv4()}
        >{props.messageInfo.message}</div>
          </div>
    );
  };
