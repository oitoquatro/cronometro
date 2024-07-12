// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const TimerControls = ({onStart, onStop}) => {
  return (
    <div className="timer-controls">
      <button onClick={onStart}>Iniciar</button>
      <button onClick={onStop}>Zerar</button>
    </div>
  );
};

export default TimerControls;
