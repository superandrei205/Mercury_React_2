import React from "react";

import MessageList from "../MessageList/MessageList.js";
import "./Main.css";

const Main=({messages})=>{
  return (
    <main className="main">
      <MessageList messages={messages} className='main__list-message' />
    </main>
  );
}

export default Main;
