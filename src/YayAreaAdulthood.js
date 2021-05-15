import Actor from "./Actor";
import "./YayAreaAdulthood.css";

function YayAreaAdulthood() {
    return (
        <div>
            <h1 id="yay-area">Yay Area Adulthood</h1>
            <Actor deadline="August 25, 2021" name="Hernan" />
            <Actor deadline="August 10, 2021" name="Mitchell" />
        </div>
    );
}

export default YayAreaAdulthood;