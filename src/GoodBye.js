import React from 'react';
import PropTypes from 'prop-types';

import victorvideo from "./videos/Victor's Last Set.mp4";


function GoodBye(props) {

    return (
        <div>
            <video src={victorvideo} height="300" width="400" ßpreload="auto" controls=" "></video>
                 {/* <ReactPlayer  controls height="20" width="30" url={victorvideo} /> */}
        </div>
);
}


export default GoodBye;