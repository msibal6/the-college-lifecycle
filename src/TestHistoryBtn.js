import {
    useHistory
} from "react-router-dom";


// testing useHistory React Hooks
function TestHistoryBtn() {
  let history = useHistory();

  function handleClick() {
    history.push("/testHistory");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default TestHistoryBtn;