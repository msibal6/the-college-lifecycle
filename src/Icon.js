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
    history.push(props.path);
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
      <img src={getActiveTree()} alt="tree" height="32" width="32"/>
    </button>

      // <img src={tree} height="200" width="200" alt="sequoia" onClick={handleClick}/>
  );
}
Icon.propTypes = {
  activeImage: PropTypes.string.isRequired,
  inactiveImage: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
Icon.defaultProps = {
  stage: "1937D",
  activeImage: "./images/sequioa_sketch.svg",
  inactiveImage: "./images/sequioa_sketch",
  path: "/sketch",
}

export default Icon;