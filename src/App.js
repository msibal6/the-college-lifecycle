import './App.css';
import IconBar from './IconBar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Sequoia37 from './Sequoia37';
import YayAreaAdulthood from './YayAreaAdulthood';
import Goodbye from './GoodBye';
import { useState } from 'react';
import { growth } from './growth';
import { useEffect } from 'react';
import Home from './Home';


function App() {


  const [college, enrollCollege] = useState({
    Sequoia37: {
      Mitchell: growth.SMALL,
      Molly: growth.SMALL,
      Taylor: growth.SMALL,
    },
    YayAreaAdulthood: {
      Hernan: growth.SMALL,
      Mitchell2: growth.SMALL,
    }
  });

  // const [collegeDone, finishCollege] = useState(false);

  // function isCollegeOver() {
  //   // var collegeOver = true;
  //   for (var stage in college) {
  //     for (var actor in stage) {
  //       console.log(actor);
  //       if (actor !== growth.GONE) {
  //         console.log("quick fail");
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  // }

  // var collegeDone = false;
  // useEffect(() => {
  //   finishCollege(isCollegeOver());
  // }, [college, collegeDone]);

  return (
    <div className="App">
      <Router>
        <title>The College Life Cycle</title>
        <IconBar />
        <Switch>
          <Route exact path="/">
            <Home college={college} />
          </Route>
          <Route path="/Sequoia37">
            <Sequoia37 enrollCollege={enrollCollege} college={college} />
          </Route>
          <Route path="/YAAdulthood">
            <YayAreaAdulthood enrollCollege={enrollCollege} college={college} />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
