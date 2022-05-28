import React, { Component } from 'react';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';

const Timer = props => {
  const { theme, timeLeft, setTimeLeft, timerOn, setTimerOn, brewTime } = props;
  const formattedHours = (timeLeft.hours > 0) ? `${timeLeft.hours}:` : ''; 
  const formattedMinutes = (timeLeft.hours && timeLeft.minutes < 10) ? `0${timeLeft.minutes}:`: `${timeLeft.minutes}:`;
  const formattedSeconds = (timeLeft.seconds < 10) ? `0${timeLeft.seconds}`: timeLeft.seconds;
  const formattedTimer = `${formattedHours}${formattedMinutes}${formattedSeconds}`;

  const handleTimer = () => {
    timerOn ? setTimerOn(false) : setTimerOn(true);
  }
  const handleCancelTimer = () => {
    setTimerOn(false);
    setTimeLeft(brewTime); 
  }
  return <div className="text-center">
    <Button className="col-10 mb-3" size="lg" id="timer" variant={`${theme === 'dark' ? 'light' : 'dark'}`}> {formattedTimer}</Button>
      <ButtonGroup className="col-lg-6 col-10">
          <Button size="lg" onClick={handleTimer} variant={`outline-success`}>{timerOn ? 'Pause' : 'Start'}</Button>
          <Button size="lg" onClick={handleCancelTimer} variant='outline-danger'>Cancel</Button>
      </ButtonGroup>
  </div>  
}

export default Timer;