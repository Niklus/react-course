import React, { Component } from "react";

class SimpleEvents extends Component {
  handleClick() {
    console.log("Button Clicked");
  }

  handleChange() {
    console.log("Input changed");
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submited");
  }

  render() {
    return (
      <div>
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

export default SimpleEvents;
