import "./Icon.css";
import PropTypes from "prop-types";
import Icon from "./Icon";
import { useState } from "react";
// import { useState } from "react";

function IconBar(props) {
  const [selectedIcon, setSelectedIcon] = useState("");
  function handleClick(newSelectedIcon) {
    console.log("new is " + newSelectedIcon);
    setSelectedIcon(newSelectedIcon);
    console.log("current is " + selectedIcon);
  }

  return (
    <div>
      <Icon handleClick={handleClick} selectedIcon={selectedIcon} />
      <Icon stage="YAAdulthood" path="/YAAdult" handleClick={handleClick} selectedIcon={selectedIcon} />
    </div>
  );
}

IconBar.propTypes = {
  state: PropTypes.string,
}

export default IconBar;