
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';


function testStringPresent(testString, Function) {
    // console.log(funcComp);
    test(testString, () => {
        render(<Function/>);
        
        const linkElement = screen.getByText(new RegExp(testString, 'i'));
        expect(linkElement).toBeInTheDocument();
    });
}

testStringPresent.PropTypes = {
    testString: PropTypes.string.isRequired,
    funcComp: PropTypes.func.isRequired,
}

export default testStringPresent;