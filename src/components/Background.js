import React from "react";
import styled from "styled-components";
import './Background.css';

import bgImage from "../img/background.png";

const ImageContainer = styled.div`
  max-width: 1280px;
  height: auto;
  flex: 1;
  margin-left:20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function Background() {
  return (
    <ImageContainer id="background">
      <Image src={bgImage} />
    </ImageContainer>
  );
}

export default Background;
