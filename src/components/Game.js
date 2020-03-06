import React, { Component } from "react";
import Console from "./Console";
import Background from "./Background";
import styled from "styled-components";
import Inspect from "../actions/Inspect";
import unlock from "../actions/unlock";

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: flex-start;
  padding: 20px;
`;

const items = {
  cats:
    'One of the cats is carrying a pendant: "unlock(computerName, password)" ',
  calendar: "02/02/2020: Iris",
  radiator: "It's quite warm in here",
  tv: "Street fighter III",
  router: "The router is disconnected...",
  "laptop 1": "Laptop 1 is locked - codename Iris",
  "laptop 2": "Laptop 2 is locked",
  "laptop 3": "Laptop 3 is locked"
};

class Game extends Component {
  constructor() {
    super();
    this.state = {
      commands: ["welcome this is the console"],
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

    const functionOptions = ["inspect", "unlock", "rotate", "toggle"];
    const cleanInput = value.replace(/\s/g, "");

    let exists = { valueFound: null, functionTrigger: null };

    for (let i = 0; i < functionOptions.length; i++) {
      if (value.includes(functionOptions[i])) {
        exists = { valueFound: true, functionTrigger: functionOptions[i] };
      }
    }

    if (exists.valueFound) {
      const parameters = cleanInput
        .substring(cleanInput.lastIndexOf("(") + 1, cleanInput.lastIndexOf(")"))
        .split(",");


      const fn = window[exists.functionTrigger];
      if (typeof fn === "function") {
        fn(parameters);
      }
    }
  }

  componentDidMount() {
    window.toggle = function(key) {
      console.log("toggling toggling", key);
    };

    window.inspect = key => {
      let output = Inspect(items, key);
      console.log(output);
    };

    // window.unlock = (laptopName, Password) => {
    //   let output = Unlock(laptopName, Password);
    //   console.log(output);
    // };
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
