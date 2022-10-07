import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

// <== this is a styled component that will be used in the Nav component only and will be scoped to the Nav component only ==>
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.isFullLink &&
    `color: #fff; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Nav() {
  return (
    <>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/1" isFullLink>
          Questionnaire
        </StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
      </nav>
    </>
  );
}

export default Nav;
