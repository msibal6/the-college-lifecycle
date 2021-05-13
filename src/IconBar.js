import "./Icon.css";
import PropTypes from "prop-types";
import Icon from "./Icon";
// import { useState } from "react";

function IconBar(props) {
  console.log(props.children);
  return (
    <div>
      <Icon />
    </div>
  );
}

IconBar.propTypes = {
  state: PropTypes.string,
}

export default IconBar;