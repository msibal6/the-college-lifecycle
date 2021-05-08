import React, { Component } from "react";
import PropTypes from "prop-types";
import Clock from "./Clock";

class Count extends Component {

  constructor(props) {
    super(props);
    // this.state = { deadline: props.deadline};
  }

  render() {
    return (
      <div className="Count" id={this.props.name}>
        <div className="name">{this.props.name}</div>
        <div className="date">{this.props.deadline}</div>
        <Clock deadline={this.props.deadline} />
      </div>
    );
  }
}

Count.defaultProps = {
  name: "Stranger",
  deadline: "January 1, 2001"
}

Count.propTypes = {
  name: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired
}

export default Count;
