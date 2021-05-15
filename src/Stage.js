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
        initialStage.push(growth.SMALL);
        // TODO use clone element to pass custom props about stage state to 
        // the actors in this stage
    }

    // eslint-disable-next-line
    const [stage, setStage] = useState(initialStage);
    const [selectedActor, selectActor] = useState(-1);
    return (
        <div>
            {props.children}
            <Actor stage={stage}/>
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