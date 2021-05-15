import './College.css';
import IconBar from './IconBar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Redirect,
} from 'react-router-dom';
import Sequoia37 from './Sequoia37';
import YayAreaAdulthood from './YayAreaAdulthood';
import Stage from './Stage';
import Actor from './Actor';

function College() {

  // initial state
  // State with all the stages and their actors 
  // All actors to small at first 
  // Sequoia37 with Mitchell Molly Taylor
  // YayAreaAdhulthood with Hernan and Mitchell

  // pass this state to the different stages
  // they modify it with their own on click functions and 
  var testRedirect = false;

  return (
    <div className="College">
      <title>The College Life Cycle</title>
      <Switch>
        <Route exact path="/">
          <h1>Choose your next path</h1>
          {testRedirect ? <Redirect push to="/Sequioa37" /> : ""}
        </Route>
        <Route path="/Sequoia37">
          <Sequoia37 />
        </Route>
        <Route path="/YAAdulthood">
          <YayAreaAdulthood />
        </Route>
      </Switch>
    </div>
  );


  // once all the stages are done 
  // we can render the final video 
  // return final video 
}

export default College;
