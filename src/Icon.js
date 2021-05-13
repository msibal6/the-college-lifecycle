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
    if (active) {
      history.push(props.path);
    } else {
      history.push("/");
    }
  }

  function getStatusIcon() {
    if (active) {
      return Icons[props.stage].active;
    }
    return Icons[props.stage].inactive;
  }

  return (
    <button className="button what" onClick={props.buttonClick}>
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