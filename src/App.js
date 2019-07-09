import React from "react";
import Lottery from './Lottery';
import './Lottery.css';
import './Ball.css';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} maxBalls={4} />
      </div>
    );
  }
}

export default App;
