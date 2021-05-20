import React, { useState } from "react";
import PropTypes from "prop-types";
import { growth } from './growth';
import * as actorStories from './actorStories';
import './Actor.css';
import CountDown from "./Countdown";

function Actor(props) {
  var usedId = props.id ? props.id : props.name;

  if (props.college) {
    var collegeExperience = props.college;
  }
  const [ownGrowth, setGrowth] = useState((collegeExperience[props.stage])[usedId]);

  // changes what we show because i change the state with setGrowth
  // and change the collegeExperience 
  function grow() {
    if ((collegeExperience[props.stage])[usedId] === growth.SMALL) {
      (collegeExperience[props.stage])[usedId] = growth.GROWN;
    } else if ((collegeExperience[props.stage])[usedId] === growth.GROWN) {
      (collegeExperience[props.stage])[usedId] = growth.GONE;
    }
    setGrowth((collegeExperience[props.stage])[usedId]);
  }

  function handleClick() {
    grow();
    props.enrollCollege(collegeExperience);
  }

  if (ownGrowth === growth.SMALL) {
    console.log("we are small now");
    return (
      <div className="Actor-Countdown" id={usedId} onClick={handleClick}>
        <CountDown deadline={props.deadline} name={props.name} />
      </div>
    );
  } else if (ownGrowth === growth.GROWN) {
    return (
      <div className="Actor-story" id={props.name} onClick={handleClick}>
        {actorStories[usedId]}
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
  deadline: PropTypes.string.isRequired,
  id: PropTypes.string,
  stage: PropTypes.string,
  handleClick: PropTypes.func,
  college: PropTypes.object
}

export default Actor;
