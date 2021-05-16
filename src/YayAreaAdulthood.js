import Actor from "./Actor";
import "./YayAreaAdulthood.css";

function YayAreaAdulthood(props) {
    return (
        <div>
            <h1 id="yay-area">Yay Area Adulthood</h1>
            <Actor deadline="August 25, 2021" name="Hernan"
                enrollCollege={props.enrollCollege} college={props.college}
                stage="YayAreaAdulthood" />
            <Actor deadline="August 10, 2021" name="Mitchell" id="Mitchell2"
                enrollCollege={props.enrollCollege} college={props.college}
                stage="YayAreaAdulthood" />
        </div>
    );
}

export default YayAreaAdulthood;