import "./Icon.css";
import PropTypes from "prop-types";
import Icon from "./Icon";

function IconBar(props) {
  console.log(props.children);
  function handleClick(e) {
    console.log("click from IconBar");
  }
  return (
    <div>
      <Icon onClick={() => { console.log("testing") }} buttonClick={handleClick} />
      <Icon></Icon>
    </div>
  );
}

IconBar.propTypes = {
  state: PropTypes.string,
}

export default IconBar;