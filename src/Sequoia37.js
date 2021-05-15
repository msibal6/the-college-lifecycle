
import CountDown from "./Count";
import "./Sequoia37.css";

function Sequoia37() {
    return (
        <div >
            <h1 id="Sequoia37">Countdown 2 Deforestation</h1>
            <CountDown deadline="August 20, 2021" name="Molly" />
            <CountDown deadline="August 10, 2021" name="Mitchell" />
            <CountDown deadline="July 27, 2021" name="Taylor" />
        </div>
    );
}

export default Sequoia37;