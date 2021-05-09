import React, {
  useState,
  useEffect
} from "react";
import PropTypes from "prop-types";

function Clock(props) {
  const [deadline, setDeadline] = useState({
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
  });

  function leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  function getTimeUntil(selectedDeadline) {
    const time = Date.parse(selectedDeadline) - Date.parse(new Date());
    if (time < 0) {
      setDeadline({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setDeadline({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    }
  }

  useEffect(() => {
        setInterval(() => getTimeUntil(props.deadline), 1000);
  })

  return (
    <div className="Clock">
      <div className="days-left">
        {leading0(deadline.days)}:
        {leading0(deadline.hours)}:
        {leading0(deadline.minutes)}:
        {leading0(deadline.seconds)}
      </div>
    </div>
  );
}

Clock.defaultProps = {
  deadline: "January 1, 2001"
}

Clock.propTypes = {
  deadline: PropTypes.string.isRequired
}

export default Clock;
