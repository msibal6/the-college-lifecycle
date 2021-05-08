import { render, screen } from '@testing-library/react';
import App from './App';

test('UI', () => {
  render(<App />);
  testLink("Sequoia 37 Deforestation");
  testLink("Yay Area Adulthood");
});

function testLink(linkText) {
  const linkElement = screen.getByText(linkText);
  expect(linkElement).toBeInTheDocument();
}