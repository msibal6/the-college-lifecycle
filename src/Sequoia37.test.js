import { render, screen } from '@testing-library/react';
import Sequoia37 from "./Sequoia37";



test('Mitchell', () => {
  render(<Sequoia37 />);
  const linkElement = screen.getByText(/Mitchell/i);
  expect(linkElement).toBeInTheDocument();
});
test('Taylor', () => {
  render(<Sequoia37 />);
  const linkElement = screen.getByText(/Taylor/i);
  expect(linkElement).toBeInTheDocument();
});

test('Molly', () => {
  render(<Sequoia37 />);
  const linkElement = screen.getByText(/Molly/i);
  expect(linkElement).toBeInTheDocument();
});