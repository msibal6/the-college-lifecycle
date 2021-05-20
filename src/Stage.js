import PropTypes from "prop-types";
import React, { cloneElement, useState } from "react";
import { growth } from "./growth";

function Stage(props) {
    function handleClick(e) {
        console.log("clicked at the stage level");
    }

    console.log(props.children[0]);
    var initialStage = [];
    // eslint-disable-next-line
    var children = [];
    for (let i = 0; i < props.children.length; i++) {
        let actor = {};
        actor.name = props.children[i].props.name;
        actor.growth = growth.SMALL;
        initialStage.push(actor);
        // TODO use clone element to pass custom props about stage state to 
        // the actors in this stage
    }

    // eslint-disable-next-line
    const [stage, setStage] = useState(initialStage);
    var newProps = {}
    newProps.handleClick = handleClick;
    newProps.stage = stage;
    console.log(newProps);
    var clonedElement = cloneElement(props.children, newProps);
    console.log(clonedElement);
    return (
        <div>{clonedElement}</div>
    );
}

Stage.propTypes = {
    test: PropTypes.string,
    children: PropTypes
        .oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
        .isRequired,
}

export default Stage;