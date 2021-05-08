import { render, screen } from '@testing-library/react';
import App from './App';


test('Mitchell', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mitchell/i);
  expect(linkElement).toBeInTheDocument();
});

test('Taylor', () => {
  render(<App />);
  const linkElement = screen.getByText(/Taylor/i);
  expect(linkElement).toBeInTheDocument();
});


test('Molly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Molly/i);
  expect(linkElement).toBeInTheDocument();
});


