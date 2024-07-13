// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const TimerControls = ({timerOn, onStart, onStop, onReset, onLap}) => {
  return (
    <div className="timer-controls">
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={onLap}>Volta</button>}
      <button onClick={onReset}>Zerar</button>
    </div>
  );
};

export default TimerControls;
