import { render, screen } from '@testing-library/react';
import YayAreaAdulthood from "./YayAreaAdulthood";



test('Mitchell', () => {
  render(<YayAreaAdulthood />);
  const linkElement = screen.getByText(/Mitchell/i);
  expect(linkElement).toBeInTheDocument();
});

test('Hernan', () => {
  render(<YayAreaAdulthood />);
  const linkElement = screen.getByText(/Hernan/i);
  expect(linkElement).toBeInTheDocument();
});
