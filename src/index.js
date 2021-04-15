import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Count from "./Count";

function App() {
  return (
    <div className="App">
      <h1>Countdown 2 deforestation</h1>
      <Count deadline="August 20, 2021" name="Molly"/>
      <Count deadline="August 10 2021" name="Mitchell"/>
      <Count deadline="July 27, 2021" name="Taylor"/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
