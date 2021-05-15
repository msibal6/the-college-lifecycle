import React, { useState } from "react";
import PropTypes from "prop-types";
import { growth } from './growth';
import * as actorStories from './actorStories';
import './Actor.css';
import CountDown from "./Countdown";
function Actor(props) {
  var stageAwareness = {};
  if (props.stage) {
    stageAwareness = props.stage;
    // stageAwareness[`0`] = growth.GONE;
  }

  console.log(stageAwareness);
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
    // if im small 
    // i gte to be grown 
    // if im grown 
    // i get GONE
    // if im grown and i was not the selected actor 
    // im gone 
    console.log(ownGrowth);
  }
  const [ownGrowth, setGrowth] = useState(growth.SMALL);
  console.log(props.id);
  var passedId = props.id ? props.id : props.name;

  if (ownGrowth === growth.SMALL) {
    return (
      <div className="Actor-Countdown" id={passedId} onClick={handleClick}>
        <CountDown deadline={props.deadline} name={props.name} />
      </div>
    );
  } else if (ownGrowth === growth.GROWN) {
    return (
      <div className="Actor-story" id={props.name} onClick={handleClick}>
        {actorStories[passedId]}
      </div>
    );
  } else {
    return (
      <div className="Actor-empty" id={props.name}>
      </div>
    );
  }
}

Actor.defaultProps = {
  name: "Stranger",
  deadline: "January 1, 2001",
}

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  deadline: PropTypes.string.isRequired,
  stage: PropTypes.array,
  handleClick: PropTypes.func,
}

export default Actor;
