import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  refParent = React.createRef();

  handleChangeName = () => {
    this.refParent.current.changeName();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleChangeName}>Change Name</button>
        <ChildComponent ref={this.refParent}/>
      </div>
    );
  }
}
