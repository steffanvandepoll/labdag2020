import React, { Component } from 'react'
import Console from './Console'
import Background from './Background'
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: flex-start;
  padding: 20px;
`

class Game extends Component {

  componentDidMount(){
    window.toggle = function(){
      console.log("toggling toggling")
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
