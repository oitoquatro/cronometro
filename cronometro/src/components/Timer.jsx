/* eslint-disable no-unused-vars */
import React from "react";
import TimerDisplay from "./TimerDisplay";
import LapList from "./LapList";
import TimerControls from "./TimerControls";

import "./Timer.css";

import { useState, useEffect } from "react";

const Timer = () => {
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  // função responsável por pegar os muiliseconds e separar por min. e segundos
  const formatTime = () => {
    const minutes = ("0" + (Math.floor(miliSeconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(miliSeconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + (Math.floor(miliSeconds / 10) % 60)).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`;
  };

  const startTimer = (interval) => {
    return setInterval(() => {
      setMiliSeconds((prevMiliSeconds) => prevMiliSeconds + 10);
    }, 10);
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  const resetTimer = () => {
    setMiliSeconds(0);
    setTimerOn(false);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = startTimer(interval);
    } else {
      interval = stopTimer(interval);
    }

    return () => stopTimer(interval);
  }, [timerOn]);

  console.log(laps)

  return (
    <div className="timer-container">
      <TimerDisplay time={formatTime()} />
      <TimerControls
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onReset={resetTimer}
        onLap={addLap}
      />
      <LapList laps={laps}/>
    </div>
  );
};

export default Timer;
