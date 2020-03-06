import React, { Component } from 'react'
import Console from './Console'
import Background from './Background'
import styled from "styled-components"
import Inspect from './Inspect'
import Unlock from '../actions/unlock'

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
  radiator: 'It\'s quite warm in here',
  tv: 'Street fighter III',
  router: 'The router is disconnected...',
  'laptop 1': 'Laptop 1 is locked',
  'laptop 2': 'Laptop 2 is locked',
  'laptop 3': 'Laptop 3 is locked',
}

class Game extends Component {

  constructor(){
    super();
    this.state = {
      commands: ["welcome this is the console"],
      LaptopIris:  false,
      laptopJasmine: false,
      laptopKim: false
    }
  }

  handleInput(value){
    let commands = this.state.commands;

    if(!value){
      return;
    }

    // switch(value){
    //   case "test()":
    //     value = "This is a test function.. well done it works!"
    //     break;
    //
    //   case "help()":
    //     value = "Having a hard time? Try using inspecting the room with inspect('[objectname]')";
    //     break;
    //
    //   default:
    //     value = value + " - is not an accepted command"
    // }


    console.log('was here', value)
    commands.push(value);

    const functionOptions = ['inspect(', 'unlock(', 'rotate('];
    const cleanInput = value.replace(/\s/g, '');

    let exists = {valueFound: null, functionTrigger: null};

    for(let i = 0; i < functionOptions.length; i++){
      console.log('Yea', functionOptions[i])
      console.log('Yea2', value.includes(functionOptions[i]))
          if(value.includes(functionOptions[i])){
              exists = {valueFound: true, functionTrigger: functionOptions[i]}
          }
    }

    console.log('exists', exists.valueFound);

    if(commands.length > 40){
      commands.shift()
    }

    this.setState({
      commands: commands
    })
  }

  componentDidMount(){
    window.toggle = function(){
      console.log("toggling toggling")
    }

    window.inspect = (key) => {
      let output = Inspect(items, key)
      console.log(output);
    }

    window.unlock = (laptopName, Password) => {
      let output = Unlock(laptopName, Password)
      console.log(output);
    }
  }

  render() {
    return (
      <Container>
        <Console commands={this.state.commands} handleInput={this.handleInput.bind(this)}/>
        <Background />
      </Container>
    );
  }
}

export default Game;
