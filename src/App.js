import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Game from "./components/Game";

import eventEmitter from "./actions/EventEmitter";
import rotate from "./actions/rotate";
eventEmitter();

window.rotate = rotate;

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
