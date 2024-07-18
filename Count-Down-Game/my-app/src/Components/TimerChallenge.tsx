import React, { useState, useRef } from "react";
import ResultModal from "./Result";

type timerProps = {
  title: string;
  targetTime: number;
};

const TimerChallenge = (props: timerProps) => {
  const timer: any = useRef();
  const dialog: any = useRef();

  const [timeRemaining, setIsTimeRemaining] = useState(props.targetTime * 1000);
  const timeIsActive = timeRemaining > 0 && timeRemaining < props.targetTime * 1000;


  if(timeRemaining <= 0 ) {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setIsTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.showModal();
  };

  const handleReset = ()=> {
    setIsTimeRemaining(props.targetTime*1000)
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={props.targetTime} remainingTime = {timeRemaining} resetModal = {handleReset}/>

      <section className="challenge">
        <h2>{props.title}</h2>
        <p className="challenge-time">
          {props.targetTime} Second{props.targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timeIsActive ? "active" : ""}>
          {timeIsActive ? "Timer has started" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
