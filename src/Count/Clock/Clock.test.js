import { render, screen } from '@testing-library/react';
import Clock from "./index.js";
// import testStringPresent from "./testHelper";

test('00', () => {
  render(<Clock/>);
        const linkElement = screen.getByText(/00/i);
        expect(linkElement).toBeInTheDocument();
})

// testStringPresent(":", Clock);
