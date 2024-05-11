import PropTypes from 'prop-types';
import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

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

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { theme, title, label, picture } = this.props;
    return (
      <CardWrapper theme={theme}>
        <CardTitle theme={theme}>{title}</CardTitle>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardPicture src={picture} alt="freelance" />
      </CardWrapper>
    );
  }
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

Card.defaultProps = {
  label: 'Dev Freelance'
};

export default Card;
