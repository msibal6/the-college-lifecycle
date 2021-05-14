import PropTypes from "prop-types";
import React from "react";



function Stage(props) {

    return (
        <div>
            Stage + {props.children}

        </div>
    );
}

Stage.propTypes = {
    test: PropTypes.string,

}


export default Stage;