import "./Icon.css";
import PropTypes from "prop-types";
import Icon from "./Icon";
import { useState } from "react";
// import { useState } from "react";

function IconBar(props) {
  const [selectedIcon, setSelectedIcon] = useState("");
  function handleClick(newSelectedIcon) {
    console.log("previous is " + selectedIcon);
    console.log("new is " + newSelectedIcon);
    setSelectedIcon(newSelectedIcon);
  }

  return (
    <div>
      <Icon stage="Sequoia37" path="/Sequoia37" handleClick={handleClick} selectedIcon={selectedIcon} />
      <Icon stage="YAAdulthood" path="/YAAdulthood" handleClick={handleClick} selectedIcon={selectedIcon} />
    </div>
  );
}

IconBar.propTypes = {
  state: PropTypes.string,
}

export default IconBar;