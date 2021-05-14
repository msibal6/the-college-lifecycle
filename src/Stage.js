import PropTypes from "prop-types";
import React, { useState } from "react";
import Actor from "./Actor";
import { growth } from "./growth";

function Stage(props) {
    console.log(props.children[0]);
    console.log(props.children[0].props);
    var initialStage = [];
    // eslint-disable-next-line
    var children = [];

    for (let i = 0; i < props.children.length; i++) {
        let child = {}
        child["index"] = i;
        child["state"] = growth.SMALL;
        initialStage.push(child);
        // TODO use clone element to pass custom props about stage state to 
        // the actors in this stage
    }

    // eslint-disable-next-line
    const [stage, setStage] = useState(initialStage);
    return (
        <div>
            {props.children}

        </div>
    );
}

Stage.propTypes = {
    test: PropTypes.string,
    children: PropTypes
        .oneOfType([PropTypes.instanceOf(Actor), PropTypes.arrayOf(Actor)])
        .isRequired,
}


export default Stage;