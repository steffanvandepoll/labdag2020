import React from "react";
import styled from "styled-components";

import bgImage from "../img/background.png";

const ImageContainer = styled.div`
  max-width: 1280px;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

function Background() {
  return (
    <ImageContainer>
      <Image src={bgImage} />
    </ImageContainer>
  );
}

export default Background;
