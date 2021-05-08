import './App.css';
import Sequoia37 from "./Sequoia37";
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
            <Sequoia37/>
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
