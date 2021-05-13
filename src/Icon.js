import {
  useHistory
} from "react-router-dom";
import "./Icon.css";
import PropTypes from "prop-types";
import * as Icons from "./Icons";
import { useState, useEffect } from "react";

function Icon(props) {
  const history = useHistory();
  const [active, setActive] = useState(true);

  function handleClick(e) {
    if (props.selectedIcon !== props.stage) {
      props.handleClick(props.stage);
      history.push(props.path);
    } else {
      props.handleClick("");
      history.push("/");
    }
  }

  function getStatusIcon() {
    const element = document.getElementById(props.stage);

    console.log(props.selectedIcon);
    if (props.selectedIcon === props.stage) {
      element.classList.add("is-active");
      return Icons[props.stage].active;
    } else {
      element.classList.remove("is-active");
      return Icons[props.stage].inactive;
    }
  }

  useEffect(() => {
    document.getElementById(props.stage + "-img").src = getStatusIcon();
  });

  return (
    <button className="icon-button" id={props.stage} onClick={handleClick}>
      <img alt={props.stage} id={props.stage + "-img"} height="32" width="32" />
    </button>
  );
}

Icon.propTypes = {
  stage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  stage: "_1937D",
  path: "/_1937D",
}

export default Icon;