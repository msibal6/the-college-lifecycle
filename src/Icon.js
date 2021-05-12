import {
  useHistory
} from "react-router-dom";
import "./Icon.css";
import PropTypes from "prop-types";
import activeTree from "./images/sequoia_sketch.svg";
import inactiveTree from "./images/fallen tree.svg";
import { useState } from "react";
import { act } from "react-dom/test-utils";

// testing useHistory React Hooks
function Icon(props) {
  let history = useHistory();

  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(!active);
    if (active) {
      history.push(props.path);
    } else {
      history.push("/");
    }
  }

  function getActiveTree() {
    if (active) {
      return activeTree;
    }
    return inactiveTree;
  }

  // const activeImage = require("./images/sequioa_sketch.svg");
  return (
    <button className="active button" onClick={handleClick}>
      {/* <img src={require('./images/sequoia_sketch.svg').default} alt="tree" height="32" width="32"/> */}
      <img src={getActiveTree()} alt="tree" height="32" width="32" />
    </button>

    // <img src={tree} height="200" width="200" alt="sequoia" onClick={handleClick}/>
  );
}
Icon.propTypes = {
  stage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
Icon.defaultProps = {
  stage: "1937D",
  path: "/1937D",
}

export default Icon;