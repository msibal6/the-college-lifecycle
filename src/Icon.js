import {
  useHistory
} from "react-router-dom";
import "./Icon.css";
import PropTypes from "prop-types";
import * as Icons from "./Icons";
import { useState, useEffect } from "react";

function Icon(props) {
  const history = useHistory();
  function handleClick(e) {
    if (props.selectedIcon !== props.stage) {
      props.handleClick(props.stage);
      history.push(props.path);
    } else {
      props.handleClick("");
      history.push("/");
    }
  }

  // TODO refactor these two changes using strategy pattern
  function changeButtonStyle() {
    const IconButton = document.getElementById(props.stage)
    if (props.selectedIcon === props.stage) {
      IconButton.classList.add("is-active");
    } else {
      IconButton.classList.remove("is-active");
    }
  }

  function changeIcon() {
    const iconImage = document.getElementById(props.stage + "-img");
    if (props.selectedIcon === props.stage) {
      iconImage.src = Icons[props.stage].active;
    } else {
      iconImage.src = Icons[props.stage].inactive;
    }
  }

  useEffect(() => {
    changeIcon();
    changeButtonStyle();
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
  stage: "Sequoia37",
  path: "/Sequoia37",
}

export default Icon;