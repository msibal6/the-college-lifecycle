import {
  useHistory
} from "react-router-dom";
import "./Icon.css";
import PropTypes from "prop-types";
import * as Icons from "./Icons";
import { useState } from "react";

function Icon(props) {
  const history = useHistory();
  const [active, setActive] = useState(true);

  function handleClick(e) {
    console.log(e.currentTarget.classList.contains("what"));
    setActive(!active);
    if (!e.currentTarget.classList.contains("is-active")) {
      history.push(props.path);
    } else {
      history.push("/");
    }
    e.currentTarget.classList.toggle("is-active");
  }

  function getStatusIcon() {
    const element = document.getElementById(props.stage);
    console.log(props.stage);
    // console.log(element.classList);
    if (!element || !element.classList.contains("is-active")) {
      console.log(element);
      return Icons[props.stage].inactive;
    } else if (element.classList.contains("is-active")) {
      return Icons[props.stage].active;
    }
  }

  return (
    <button className="icon-button" id={props.stage} onClick={handleClick}>
      <img src={getStatusIcon()} alt="tree" height="32" width="32" />
    </button>
  );
}

Icon.propTypes = {
  selectedStage: PropTypes.string,
  stage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  stage: "_1937D",
  path: "/1937D",
}

export default Icon;