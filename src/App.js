import Count from './Count';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Countdown 2 Deforestation</title>
      <h1>Countdown 2 Deforestation</h1>
      <Count deadline="August 20, 2021" name="Molly"/>
      <Count deadline="August 10 2021" name="Mitchell"/>
      <Count deadline="July 27, 2021" name="Taylor"/>
    </div>
  );
}

export default App;
