import React from 'react';
import PropTypes from 'prop-types';
import { growth } from './growth';
import GoodBye from './GoodBye';

function Home(props) {

    function isCollegeOver() {
        for (var stage in props.college) {
            for (var actor in props.college[stage]) {
                if (props.college[stage][actor] !== growth.GONE) 
                    return false;
            }
        }
        return true;
    }
    
    return (
        <div>
            {isCollegeOver() ? <GoodBye /> : <h1>Choose your next path</h1>}
        </div>
    );
}

Home.propTypes = {
    college: PropTypes.object,
}

export default Home;