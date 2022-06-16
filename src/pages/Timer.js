import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Timer = props => {
  const { theme, timeLeft, setTimeLeft, timerOn, setTimerOn, brewTime } = props;
  const formattedHours = (timeLeft.hours > 0) ? `${timeLeft.hours}:` : ''; 
  const formattedMinutes = (timeLeft.hours && timeLeft.minutes < 10) ? `0${timeLeft.minutes}:`: `${timeLeft.minutes}:`;
  const formattedSeconds = (timeLeft.seconds < 10) ? `0${timeLeft.seconds}`: timeLeft.seconds;
  const formattedTimer = `${formattedHours}${formattedMinutes}${formattedSeconds}`;
  const timerAtZero = (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0);

  const handleTimer = () => {
    if (timeLeft === {hours: 0, minutes: 0, seconds: 0}) {
      setTimeLeft(brewTime).then(
        timerOn ? setTimerOn(false) : setTimerOn(true)
      );
    } else {
      timerOn ? setTimerOn(false) : setTimerOn(true);
    }
  }
  const handleCancelTimer = () => {
    setTimerOn(false);
    setTimeLeft(brewTime); 
  }

  return <div className="text-center" id="display">
    <Button className="col-10 mb-3" size="lg" id="timer-display" variant={`${theme === 'dark' ? 'light' : 'dark'}`}> {formattedTimer}</Button>
      <ButtonGroup className="col-lg-6 col-10">
          <Button size="lg" onClick={handleTimer} variant={(timerOn && !timerAtZero) ? 'outline-success' : 'success'} disabled={timerAtZero} >{(timerOn && !timerAtZero) ? 'Pause' : 'Start'}</Button>
          <Button size="lg" onClick={handleCancelTimer} variant='danger'>{(timerOn && !timerAtZero) ? 'Cancel' : 'Reset'}</Button>
      </ButtonGroup>
  </div>  
}

export default Timer;