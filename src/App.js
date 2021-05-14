import './App.css';
import IconBar from './IconBar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import Sequoia37 from './Sequoia37';
import YayAreaAdulthood from './YayAreaAdulthood';
import Stage from './Stage';
import Actor from './Actor';

function App() {
  return (
    <div className="App">
      <Router>
        <title>The College Life Cycle</title>
        <IconBar />
        <Switch>
          <Route exact path="/">
            <h1>Choose your next path</h1>
            <Stage>
              <Actor />
              <Actor />

            </Stage>
          </Route>
          <Route path="/Sequoia37">
            <Sequoia37 />
          </Route>
          <Route path="/YAAdulthood">
            <YayAreaAdulthood />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
