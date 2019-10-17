import React from "react";

import MessageList from "../MessageList/MessageList.js";
import "./Main.css";

const Main=({ messages })=>{
  return (
    <main className="main">
      <MessageList className='main__list-message' messages={messages}/>
    </main>
  );
}

export default Main;
