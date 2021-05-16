
import Actor from "./Actor";

import "./Sequoia37.css";

function Sequoia37(props) {
    return (
        <div >
            <h1 id="Sequoia37">Countdown 2 Deforestation</h1>
            <Actor deadline="August 10, 2021" name="Mitchell"
                enrollCollege={props.enrollCollege} college={props.college}
                stage="Sequoia37" />
            <Actor deadline="August 20, 2021" name="Molly"
                enrollCollege={props.enrollCollege} college={props.college}
                stage="Sequoia37" />
            <Actor deadline="July 27, 2021" name="Taylor"
                enrollCollege={props.enrollCollege} college={props.college}
                stage="Sequoia37" />
        </div>
    );
}

export default Sequoia37;