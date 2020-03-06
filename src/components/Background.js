import React from "react";
import styled from "styled-components";
import './Background.css';

import bgVideo from "../img/background.mp4";

const ImageContainer = styled.div`
  max-width: 1280px;
  height: auto;
  flex: 1;
  margin-left:20px;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

function Background() {
  return (
    <ImageContainer id="background">
      <Video autoPlay loop playsinline muted src={bgVideo}>
      </Video>
    </ImageContainer>
  );
}

export default Background;
