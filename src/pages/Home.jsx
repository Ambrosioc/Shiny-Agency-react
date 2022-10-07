import React from "react";
import styled from "styled-components";
import homeIllustration from "../Assets/home-illustration.svg";

// <== this is a styled component that will be used in the Home component only and will be scoped to the Home component only ==>
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
`;

const StyletdDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f9f9fc;
  width: 90%;
  height: 100vh;
`;

const StyledTitle = styled.div`
  width: 552px;
  height: 249px;
  left: 163px;
  top: 376px;
`;
const StyledButton = styled.button`
  width: 261px;
  height: 40px;
  left: 156px;
  top: 756px;
  color: #ffffff;
  background: #5843e4;
  border-radius: 29px;
`;
function Home() {
  return (
    <HomeContainer>
      <StyletdDiv>
        <StyledTitle>
          <h1>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </h1>
          <StyledButton>Faire le test </StyledButton>
        </StyledTitle>
        <img src={homeIllustration} alt="home illustration" />
      </StyletdDiv>
    </HomeContainer>
  );
}

export default Home;
