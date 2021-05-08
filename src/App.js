import './App.css';
import Sequoia37 from "./Sequoia37";
import YayAreaAdulthood from "./YayAreaAdulthood";
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
            <Link to="/1937D">Sequoia 37 Deforestation</Link>
          </li>
          <li>
            <Link to="/YAAdult">Yay Area Adulthood</Link>
          </li>
        </ul>

        <Switch>
           <Route exact path="/">
            <p id="start-lifecycle">Choose your lifecycle</p>
          </Route>
          <Route  path="/1937D">
            <Sequoia37/>
          </Route>
          <Route path="/YAAdult">
           <YayAreaAdulthood/>
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
