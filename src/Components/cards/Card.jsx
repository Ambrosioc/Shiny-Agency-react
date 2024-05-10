import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/hooks';
import colors from '../../utils/styles/colors';

// <== this is a styled component that will be used in the Card component only and will be scoped to the Card component only ==>
const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
  font-size: 22px;
  font-weight: bold;
`;

const CardPicture = styled.img`
  height: 50%;
  width: 50%;
  border-radius: 50%;
`;

const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  background-color: ${({ theme }) => (theme === 'light' ? colors.backgroundLight : colors.backgroundDark)};
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
  const { theme } = useTheme();
  // <= this is a component that will render a card with the props passed to it
  return (
    <CardWrapper theme={theme}>
      <CardTitle theme={theme}>{props.title}</CardTitle>
      <CardLabel theme={theme}>{props.label}</CardLabel>
      <CardPicture src={props.picture} alt="freelance" />
    </CardWrapper>
  );
}

// <== this is a prop type validation ==>
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // <= this is a prop type required
  picture: PropTypes.string.isRequired
};

// <== this is the default value for the props ==>
Card.defaultProps = {
  label: 'Dev Freelance'
};

export default Card;
