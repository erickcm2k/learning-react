import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // creates virtual DOM
  const linkElement = screen.getByText(/learning react/i); // get access to the previously created virtual DOM
  expect(linkElement).toBeInTheDocument(); 
});
