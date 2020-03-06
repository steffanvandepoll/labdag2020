import React, { Component } from 'react'
import Console from './Console'
import Background from './Background'

class Game extends Component {

  render() {
    return (
      <div>
        <Console />
        <Background />
      </div>
    );
  }
}

export default Console;
