import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import Footer from './Footer';

describe('Footer', () => {
  it('Should render without crash', () => {
    // Suppression de l'async
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    const NightModeButton = screen.getByRole('button');
    expect(NightModeButton.textContent).toBe('Changer de mode : ☀️');
    fireEvent.click(NightModeButton);
    expect(NightModeButton.textContent).toBe('Changer de mode : 🌙');
    // screen.debug(); // <= Debug the DOM in the console =>
  });
});
