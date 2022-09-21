import React from "react";
import styled from "styled-components";
import "../../stylesheets/Loading.css";
import { Logo } from "./Logo";

const LogoContainer = styled.div`
    margin-bottom: 30px;
    transform: scale(1.5);
    width: auto;
`

const SprashContainer = styled.div`
  position: absolute;
  text-align: center;
  width: 200px;
  height: 200px;
  left: calc(50% - 200px / 2);
  top: calc(50% - 30px / 2 - 36px);
`;



const Loading = () => {
  return (
    <div>
      <SprashContainer>
        <LogoContainer>
          <Logo></Logo>
        </LogoContainer>
        <div className="loader"></div>
      </SprashContainer>
    </div>
  );
};

export default Loading;
