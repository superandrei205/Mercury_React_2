import React from "react";

import ItemMessage from "../ItemMessage/ItemMessage.js";
import cn from 'classnames';
import "./MessageList.css";

const MessageList = ({ messages, className }) => {
  return (
    <ul className= {cn( className)}>
      {messages.map((message, i) => (
        <ItemMessage
          className="list-message__item"
          key={i}
          body={message.body}
          title={message.title}
        />
      ))}
    </ul>
  );
};

export default MessageList;
