import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  background: black;
  border-radius: 8px;
  border: solid 2px white;
  width: 450px;
  height: calc(100vh - 70px);
  color: #265d00;
  font-family: 'Source Code Pro', monospace;
  text-align: left;
  padding:10px;
  p{
    padding: 0;
    margin:0;
  }

  position:relative;
`

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background:none;
  border:none;

  position: absolute;
`

const CommandList = styled.ul`
  list-style: none;
  font-size: 15px;
  padding:0;
  margin-left:10px;

  li{
    &:before{
      content: ">";
      margin-right: 10px;
    }
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Blinking = styled.span`
  animation: 1s ${fadeIn} ease-out;
`

class Console extends Component {

  constructor(){
    super()
    this.state = {
      inputCommand: ""
    }
    window.location.hash = "step1";
  }

  handleInputChange(event){
    this.setState({inputCommand: event.target.value});
  }

  handleSubmit(){
    this.props.handleInput(this.state.inputCommand);
    this.setState({inputCommand: ""});//clear input after submit

  }

  render() {
    let commands = this.props.commands.map(command => {
       return (<li>{command}</li>)
     });

    return (
      <Container>
        <CommandList>
        {commands}
        </CommandList>
         <span>{this.state.inputCommand}<span className="blink">_</span></span>

        <Input type="text" id="command" name="command" value={this.state.inputCommand}
          onChange={this.handleInputChange.bind(this)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.handleSubmit();
            }
          }}/>
      </Container>
    );
  }
}

export default Console;
