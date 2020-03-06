import React, { Component } from 'react'
import styled from "styled-components"

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
`

class Console extends Component {

  render() {
    return (
      <Container>
        <p>Hello %3e Console </p>
      </Container>
    );
  }
}

export default Console;
