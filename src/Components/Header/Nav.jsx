import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";
import darkLogo from "../../Assets/dark-logo.png";

const StyledHeader = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImgLogo = styled.img`
  width: 187.63px;
  height: 70px;
  left: 33px;
  top: 30px;
`;

// <== this is a styled component that will be used in the Nav component only and will be scoped to the Nav component only ==>
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${({ isFullLink }) =>
    isFullLink &&
    `color: #fff; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Nav() {
  return (
    <StyledHeader>
      <StyledImgLogo src={darkLogo} alt="logo" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" isFullLink={true}>
          Questionnaire
        </StyledLink>
      </nav>
    </StyledHeader>
  );
}

export default Nav;
