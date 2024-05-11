import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import Freelances from './Freelances';

const { rest } = require('msw');
const { setupServer } = require('msw/node');

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }));
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const freelancersMockedData = [
  {
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    picture: 'https://example.com/john-doe.jpg'
  },
  {
    name: 'Jane Doe',
    jobTitle: 'Data Analyst',
    picture: 'https://example.com/jane-doe.jpg'
  }
];

test('Should render without crash', async () => {
  render(
    <ThemeProvider>
      <Freelances />
    </ThemeProvider>
  );
  expect(screen.getByTestId('loder')).toBeTruthy();
});
