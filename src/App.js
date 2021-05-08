import './App.css';
import Sequoia37 from "./Sequoia37";
import YayAreaAdulthood from "./YayAreaAdulthood";
import TestHistoryBtn from "./TestHistoryBtn";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <title>The College Life Cycle</title>
        <ul>
          <li>
            <Link to="/1937D">Sequoia 37 Deforestation</Link>
          </li>
          <li>
            <Link to="/YAAdult">Yay Area Adulthood</Link>
          </li>
          <li>
            <TestHistoryBtn />
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <p id="chose-stage">Choose your stage of life</p>
          </Route>
          <Route path="/1937D">
            <Sequoia37 />
          </Route>
          <Route path="/YAAdult">
            <YayAreaAdulthood />
          </Route>
          <Route path="/testHistory">
            <p> it is working
            </p>
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
