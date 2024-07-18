import React from "react";

type timerProps = {
    title: string,
    targetTime: number,
}

const TimerChallenge = (props: timerProps) => {

  return (
    <>
    
      <section className="challenge">
        <h2>{props.title}</h2>
        <p className="challenge-time">
          {props.targetTime} Second{props.targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button >
            Start challenge
          </button>
        </p>
        <p className="">
         
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
