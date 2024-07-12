/* eslint-disable no-unused-vars */
import React from "react";
import TimerDisplay from "./TimerDisplay";
import LapList from "./LapList";
import TimerControls from "./TimerControls";

const Timer = () => {
  return (
    <div className="timer-container">
      <TimerDisplay />
      <TimerControls />    
      <LapList />
    </div>
  );
};

export default Timer;
