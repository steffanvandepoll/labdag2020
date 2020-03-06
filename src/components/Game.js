import React, { Component } from "react";
import Console from "./Console";
import Background from "./Background";
import styled from "styled-components";
import Inspect from "../actions/Inspect";
import Unlock from "../actions/unlock";

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: flex-start;
  padding: 20px;
`;

const items = {
  cats: 'One of the cats is carrying a pendant: "unlock(computerName, password)" ',
  calendar: '02/02/2020: Iris',
  radiator: 'It\'s quite warm in here',
  tv: 'Street fighter III',
  router: 'The router is disconnected...',
  note: 'something is scribbled on the note... "Kim - LetThereBeLight"',
  laptop: 'The laptops are locked and inaccessible... They seem to be labled. "Kim", "Iris", "Jasmine"',
  laptops: 'The laptops are locked and inaccessible... They seem to be labled. "Kim", "Iris", "Jasmine"',
}

class Game extends Component {
  constructor() {
    super();
    this.state = {
      commands: ["You're stuck in a room.. Unlock one of the laptops to contact people outside" ,"this is the console, try typing help()"],
      LaptopIris: false,
      laptopJasmine: false,
      laptopKim: false
    };
  }

  handleInput(value) {
    let commands = this.state.commands;

    if (!value) {
      return;
    }

    commands.push(value);

    const functionOptions = ["inspect", "unlock", "rotate", "toggle", "help"];
    const cleanInput = value.replace(/\s/g, "");

    let exists = { valueFound: null, functionTrigger: null };

    for (let i = 0; i < functionOptions.length; i++) {
      if (value.includes(functionOptions[i])) {
        exists = { valueFound: true, functionTrigger: functionOptions[i] };
      }
    }

    if (exists.valueFound) {
      const parameters = cleanInput
        .substring(cleanInput.lastIndexOf("(") + 1, cleanInput.lastIndexOf(")"));


      const fn = window[exists.functionTrigger];
      if (typeof fn === "function") {
        const output = fn(parameters);
        console.log(output);

        if (output) {
          commands.push(output.responseText);
        }
      }
    }
  }

  componentDidMount() {
    let _self = this;
    window.toggle = function(key) {
      console.log("toggling toggling", key);
    };

    window.inspect = key => {
      return Inspect(items, key);
    };

    window.help = function() {
      _self.handleInput("You have access to the following functions:unlock(<string>, <string>), inspect(<string>)")
    }

    window.unlock = (laptopName, Password) => {
      return Unlock(laptopName, Password);
    };
  }

  render() {
    return (
      <Container>
        <Console
          commands={this.state.commands}
          handleInput={this.handleInput.bind(this)}
        />
        <Background />
      </Container>
    );
  }
}

export default Game;
