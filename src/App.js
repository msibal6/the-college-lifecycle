import './App.css';
import Count from "./Count";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <title>The College Life Cycles</title>
        <ul>
          <li>
            <Link to="/">Sequoia 37 Deforestation</Link>
          </li>
          <li>
            <Link to="/about">Yay Area Adulthood</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <div id="sequoia-37">
              <h1>Countdown 2 Deforestation</h1>
              <Count deadline="August 20, 2021" name="Molly" />
              <Count deadline="August 10 2021" name="Mitchell" />
              <Count deadline="July 27, 2021" name="Taylor" />
            </div>
          </Route>
          <Route path="/about">
           <div id="yay-area">
              <h2>Yay Area Adulthood</h2>
              <Count deadline="August 20, 2021" name="hernan" />
              <Count deadline="August 10 2021" name="Mitchell" />
            </div>
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
