import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../utils/context';
import colors from '../../utils/styles/colors';

const FooterConainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  colors: ${colors.secondary};
`;

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <FooterConainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterConainer>
  );
}

export default Footer;
