import React, { Component } from "react";

class EventsAndState extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    console.log("Button Clicked");
  }

  handleChange(e) {
    console.dir(e.target);
    this.setState({ inputText: e.target.value });
    console.log(this.state.inputText);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submited");
  }

  render() {
    return (
      <div>
        <h1>{this.state.inputText}</h1>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.handleClick}>Click Me</button>
          <input
            type="text"
            placeholder="Enter some text"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default EventsAndState;
