import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import Card from './Card.jsx';

describe('Card', () => {
  it('should render a card with the props passed to it', async () => {
    render(
      <ThemeProvider>
        <Card title="Ambro Cazimira" label="Freelance" picture="/myPicture" />
      </ThemeProvider>
    );
    const cardPicture = screen.getByRole('img');
    const cardTitle = screen.getByText(/Ambro/i);
    expect(cardPicture.src).toBe('http://localhost/myPicture');
    expect(cardTitle.textContent).toBe('Ambro Cazimira');
  });
});
