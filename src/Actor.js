import React, { useState } from "react";
import PropTypes from "prop-types";
import { growth } from './growth';
import * as actorStories from './actorStories';
import './Actor.css';
import CountDown from "./Countdown";
import * as sounds from './Sounds';
import useSound from "use-sound";

function Actor(props) {
  const [playWhoosh] = useSound(sounds.whoosh, { volume: 0.05 });
  const usedId = props.id ? props.id : props.name;
  if (props.college) {
    var collegeExperience = props.college;
  }

  const [ownGrowth, setGrowth] = useState((collegeExperience[props.stage])[usedId]);

  function grow() {
    if ((collegeExperience[props.stage])[usedId] === growth.SMALL) {
      (collegeExperience[props.stage])[usedId] = growth.GROWN;
    } else if ((collegeExperience[props.stage])[usedId] === growth.GROWN) {
      (collegeExperience[props.stage])[usedId] = growth.GONE;
      playWhoosh();
    }
    setGrowth((collegeExperience[props.stage])[usedId]);
  }

  function handleClick() {
    grow();
    props.enrollCollege(collegeExperience);
  }

  if (ownGrowth === growth.SMALL) {
    return (
      <div className="Actor" id={usedId} onClick={handleClick}>
        <CountDown deadline={props.deadline} name={props.name} />
      </div>
    );
  } else if (ownGrowth === growth.GROWN) {
    return (
      <div className="Actor" id={props.name} onClick={handleClick}>
        {actorStories[usedId]}
      </div>
    );
  } else {
    return (
      <div className="Actor" id={props.name}>
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