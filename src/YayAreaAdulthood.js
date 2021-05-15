import CountDown from "./Count";
import "./YayAreaAdulthood.css";

function YayAreaAdulthood() {
    return (
        <div>
            <h1 id="yay-area">Yay Area Adulthood</h1>
            <CountDown deadline="August 25, 2021" name="Hernan" />
            <CountDown deadline="August 10, 2021" name="Mitchell" />
        </div>
    );
}

export default YayAreaAdulthood;