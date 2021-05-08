import React, { Component } from "react";
import Clock from "./Clock";

class Count extends Component {
  
  constructor(props) {
    super(props);
    this.state = { deadline: props.deadline};
  }

  render() {
    return (
      <div className="countdown" id={this.props.name}>
        <div className="name">{this.props.name}</div>
        <div className="date">{this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}
export default Count;
