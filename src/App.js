import './App.css';
import IconBar from './IconBar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Sequoia37 from "./Sequoia37";
import YayAreaAdulthood from "./YayAreaAdulthood";

function App() {
  return (
    <Router>
      <div className="App">
        <title>The College Life Cycle</title>
        <IconBar />

        <Switch>
          <Route exact path="/">
            <p id="chose-stage">Choose your stage of life</p>
          </Route>
          <Route path="/Sequoia37">
            <Sequoia37 />
          </Route>
          <Route path="/YAAdult">
            <YayAreaAdulthood />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
