import React from "react";
import styled from "styled-components";
import errorSvg from "../../assets/404.svg";

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
`;
const StyletdDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9fc;
  width: 90%;
  height: 100vh;
`;
const StyledImg = styled.img`
  padding: 25px;
`;
function NotFound() {
  // <= this is a 404 page that will be displayed if the user try to access a page that doesn't exist
  return (
    <StyledNotFound>
      <StyletdDiv>
        <p>Oups...</p>
        <StyledImg src={errorSvg} alt="404" />
        <p>Il semblerait qu’il y ait un problème</p>
        <p>La page que vous recherchez n’existe pas</p>
      </StyletdDiv>
    </StyledNotFound>
  );
}

export default NotFound;
