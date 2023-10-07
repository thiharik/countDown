import React from "react";
export default function Display(prop) {
  return (
    <div className="countdown">
      <h1 className="clockhead">New Year Countdown</h1>
      <div className="box">
        <span className="num">{prop.days}&nbsp;&nbsp;</span>
        <span className="text">days&nbsp;&nbsp;</span>
      </div>
      <div className="box">
        <span className="num">{prop.hours}&nbsp;&nbsp;</span>
        <span className="text">hours&nbsp;&nbsp;</span>
      </div>
      <div className="box">
        <span className="num">{prop.minutes}&nbsp;&nbsp;</span>
        <span className="text"> minutes&nbsp;&nbsp;</span>
      </div>
      <div className="box">
        <span className="num">{prop.seconds}&nbsp;&nbsp;</span>
        <span className="text"> seconds&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
