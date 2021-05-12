import React from "react";
import PropTypes from "prop-types";
import Clock from "./Clock";

function Count(props) {
  return (
      <div className="Count" id={props.name}>
        <div className="name">{props.name}</div>
        <div className="date">{props.deadline}</div>
        <Clock deadline={props.deadline} />
      </div>
    );
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
