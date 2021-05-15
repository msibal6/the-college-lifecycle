import React from "react";
import PropTypes from "prop-types";
import Clock from "./Clock";

function CountDown(props) {
  function handleClick() {
    console.log(props.name + "div called onclick");
  }
  
  return (
    <div className="Count" id={props.name} onClick={handleClick}>
      <div className="name">{props.name}</div>
      <div className="date">{props.deadline}</div>
      <Clock deadline={props.deadline} />
    </div>
  );
}

CountDown.defaultProps = {
  name: "Stranger",
  deadline: "January 1, 2001"
}

CountDown.propTypes = {
  name: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired
}

export default CountDown;
