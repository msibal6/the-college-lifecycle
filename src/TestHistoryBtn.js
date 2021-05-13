import {
  useHistory
} from "react-router-dom";
import "./TestHistoryBtn.css"


// testing useHistory React Hooks
function TestHistoryBtn() {
  let history = useHistory();

  function handleClick() {
    history.push("/testHistory");
  }

  return (
    <button className="active button" onClick={handleClick}>
      {/* <img src={require('./icons/_1937D/fallen_tree.svg').default} alt="tree" height="32" width="32"/> */}
    </button>

      // <img src={tree} height="200" width="200" alt="sequoia" onClick={handleClick}/>
  );
}

export default TestHistoryBtn;