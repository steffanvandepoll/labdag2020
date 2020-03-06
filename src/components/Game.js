import React, { Component } from 'react'
import Console from './Console'
import Background from './Background'
import styled from "styled-components"
import Inspect from './Inspect'

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: flex-start;
  padding: 20px;
`

const items = {
  cats: 'One of the cats is carrying a pendant: "rotate(table)" ',
  calendar: '00',
  radiator: 'some text',
  tv: 'Street fighter III',
  laptop: '',
  router: 'The router is disconnected...',
}

class Game extends Component {

  componentDidMount(){
    window.toggle = function(){
      console.log("toggling toggling")
    }

    window.inspect = (key) => {
      let output = Inspect(items, String(key))
      console.log(output);
    }
  }

  render() {
    return (
      <Container>
        <Console />
        <Background />
      </Container>
    );
  }
}

export default Game;
