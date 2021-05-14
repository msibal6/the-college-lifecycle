import React, { useState } from "react";
import PropTypes from "prop-types";
import Clock from "./Clock";
import { growth } from './growth';

function Actor(props) {

  function grow() {
    if (ownGrowth === growth.SMALL) {
      setGrowth(growth.GROWN);
    } else if (ownGrowth === growth.GROWN) {
      setGrowth(growth.GONE);
    }
  }

  function handleClick() {
    console.log(props.name + "div called onclick");
    grow();
    console.log(ownGrowth);
  }

  const [ownGrowth, setGrowth] = useState(growth.SMALL);

  if (ownGrowth === growth.SMALL) {
    return (
      <div className="Count" id={props.name} onClick={handleClick}>
        <div className="name">{props.name}</div>
        <div className="date">{props.deadline}</div>
        <Clock deadline={props.deadline} />
      </div>
    );
  } else if (ownGrowth === growth.GROWN) {
    return (
      <div className="Count" id={props.name} onClick={handleClick}>
        my meaningful story about college
      </div>
    );
  } else {
    return (
      <div className="Count" id={props.name} >
      </div>
    );
  }

}

Actor.defaultProps = {
  name: "Stranger",
  deadline: "January 1, 2001"
}

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,


}

export default Actor;
