import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/styles/colors";

// <== this is a styled component that will be used in the Card component only and will be scoped to the Card component only ==>
const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardPicture = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  height: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;

// <== props is an object and i can destructure it Card({jobTitle, picture, name}) ==>
function Card(props) {
  // <= this is a component that will render a card with the props passed to it
  return (
    <CardWrapper>
      <span>{props.title}</span>
      <CardLabel>{props.label}</CardLabel>
      <CardPicture src={props.picture} alt="freelance" />
    </CardWrapper>
  );
}

// <== this is a prop type validation ==>
Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired, // <= this is a prop type required
  picture: PropTypes.string,
};

// <== this is the default value for the props ==>
Card.defaultProps = {
  label: "Dev Freelance",
};

export default Card;
