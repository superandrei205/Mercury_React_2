import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";

const DEFAULT_STATE = {
  messages: [],
  showMessages:[],
  value: ""
};
class App extends Component {
  state = DEFAULT_STATE;

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
     event.preventDefault();
     event.stopPropagation();
     
     const messages = this.state.messages;

      if(this.state.value != ''){const result = messages.filter(item=>{
            if ( 
              item.title.toLowerCase().includes(this.state.value.toLowerCase()) ||
              item.body.toLowerCase().includes(this.state.value.toLowerCase())
              ) {
              return item;
            }
          });
        this.setState({ showMessages: result }) ;
     } else this.setState({ showMessages: messages })
   
  }

  getUsersMessages = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        if (res.status === 200) {
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .then(res => res.json())
      .then(result => this.setState({ messages: result,  showMessages: result }))
      .catch(e => {
        console.error("Error: " + e.message);
        console.error(e.response);
      });
  };

  componentDidMount() {
    this.getUsersMessages();
  }

  render() {
    return (
      <div className="App">
        <Header
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.value}
        />
        <Main messages={this.state.showMessages} />
      </div>
    );
  }
}

export default App;
