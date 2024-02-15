import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState("");
  let [timeoutId, setTimeoutId] = useState();
  const [valid, setValid] = useState(false);
  const [drop, setDrop] = useState(false);

  function handleChange(e) {
    const inputValue = e.target.value.replace(/[^\d]/g, "");
    setSeconds(inputValue);
  }

  function handleClick() {
    let timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    setTimeoutId(timer);
  }

  useEffect(() => {
    if (seconds <= 0) {
      setValid(true);
      setTimeoutId(seconds);
      clearInterval(timeoutId);
    }
    if (timeoutId) {
      setDrop(true);
    }

    if (undefined && seconds > 0) {
      setDrop(false);
    }
    if (seconds > 0 && !timeoutId) {
      setValid(false);
      setDrop(false);
    }
  }, [seconds, valid, timeoutId, drop]);

  return (
    <div>
      <div className="form">
        <input value={drop ? "" : seconds} onChange={handleChange} />
        <button disabled={valid} onClick={handleClick}>
          Запустить таймер
        </button>
      </div>
      <div className="drop">
        {drop && (
          <div className="drop_counter">
            {seconds === 0 ? "Готово!!" : seconds}
          </div>
        )}
        {valid && Boolean(seconds) && <div></div>}
      </div>
    </div>
  );
};
export default Timer;
