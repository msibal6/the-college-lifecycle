import Count from "./Count";
import "./YayAreaAdulthood.css";

function YayAreaAdulthood() {
    return (
        <div id="yay-area">
            <h1>Yay Area Adulthood</h1>
            <Count deadline="August 25, 2021" name="Hernan" />
            <Count deadline="August 10, 2021" name="Mitchell" />
        </div>
    );
}

export default YayAreaAdulthood;