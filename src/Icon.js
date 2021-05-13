import {
  useHistory
} from "react-router-dom";
import "./Icon.css";
import PropTypes from "prop-types";
import * as icons from "./icons";
import { useState } from "react";

function Icon(props) {
  const history = useHistory();
  const [active, setActive] = useState(true);
  function handleClick() {
    setActive(!active);
    if (active) {
      history.push(props.path);
    } else {
      history.push("/");
    }
  }

  function getStatusIcon() {
    if (active) {
      return icons[props.stage].active;
    }
    return icons[props.stage].inactive;
  }

  return (
    <button className="button" onClick={handleClick}>
      <img src={getStatusIcon()} alt="tree" height="32" width="32" />
    </button>
  );
}

Icon.propTypes = {
  stage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  stage: "_1937D",
  path: "/1937D",
}

export default Icon;