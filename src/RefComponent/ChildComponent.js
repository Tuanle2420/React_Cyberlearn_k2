import React, { Component } from "react";

export default class ChildComponent extends Component {
  state = {
    name: "Tuấn",
  };

  changeName = () => {
    this.setState({ name: "World!!!" });
  };
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  }
}
