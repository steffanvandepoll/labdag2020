import React, { Component } from 'react'
import Console from './Console'
import Background from './Background'
import styled from "styled-components"
import Inspect from '../actions/Inspect'

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: flex-start;
  padding: 20px;
`


const items = {
  cats: 'One of the cats is carrying a pendant: "unlock(computerName, password)" ',
  calendar: '02/02/2020: Iris',
  radiator: 'It\'s quite warm in here',
  tv: 'Street fighter III',
  router: 'The router is disconnected...',
  'laptop 1': 'Laptop 1 is locked - codename Iris',
  'laptop 2': 'Laptop 2 is locked',
  'laptop 3': 'Laptop 3 is locked',
}

class Game extends Component {

  componentDidMount(){
    window.toggle = function(){
      console.log("toggling toggling")
    }

    window.inspect = (key) => {
      let output = Inspect(items, key)
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
