import React, { Component } from "react";
import "./App.css";
// import StateInAction from "./StateInAction";
// import SimpleEvents from "./SimpleEvents";
import EventAndState from "./EventAndState";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>State Check</h1>
        <EventAndState />
      </div>
    );
  }
}

export default App;
