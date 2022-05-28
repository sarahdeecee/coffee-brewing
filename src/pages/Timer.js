import React, { Component } from 'react';
import { Button, ButtonGroup, Row } from 'react-bootstrap';

const Timer = props => {
  const { theme, timeLeft, setTimeLeft, setTimerOn } = props;
  const formattedHours = (timeLeft.hours > 0) ? `${timeLeft.hours}:` : ''; 
  const formattedMinutes = (timeLeft.minutes < 10) ? `0${timeLeft.minutes}:`: `${timeLeft.minutes}:`;
  const formattedSeconds = (timeLeft.seconds < 10) ? `0${timeLeft.seconds}`: timeLeft.seconds;
  const formattedTimer = `${formattedHours}${formattedMinutes}${formattedSeconds}`;

  const handleStartTimer = () => {
    setTimerOn(true);
  }
  const handlePauseTimer = () => {
    setTimerOn(false);
  }
  const handleCancelTimer = () => {
    setTimerOn(false);
    // setTimeLeft(); 
  }
  return <div>
    <Button size="lg"> {formattedTimer}</Button>
    <ButtonGroup>
      <Button onClick={handleStartTimer}>Start</Button>
      <Button onClick={handlePauseTimer}>Pause</Button>
      <Button onClick={handleCancelTimer}>Cancel</Button>
    </ButtonGroup>
  </div>  
}

export default Timer;