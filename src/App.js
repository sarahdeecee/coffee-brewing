import './App.css';
import './styles/theme.scss';
import { useEffect, useState } from 'react';
import Calculations from './pages/Calculations';
import NavMenu from './pages/NavMenu';
import { Container } from 'react-bootstrap'

function App() {
  const [theme, setTheme] = useState('light');
  const [size, setSize] = useState(4);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 2,
    seconds: 0
  });
  const [timerOn, setTimerOn] = useState(false);

  const calculateTimeLeft = () => {
    if (timerOn) {
      if (timeLeft.seconds === 0) {
        if (timeLeft.minutes === 0) {
          if (timeLeft.hours !== 0) {
            return {...timeLeft, hours: timeLeft.hours - 1, minutes: 59};
          }
        } else {
          return {...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59};
        }
        setTimerOn(false);
        return {hours: 0, minutes: 0, seconds: 0};
      } else {
        return {...timeLeft, seconds: timeLeft.seconds - 1};
      }
    }
  };

  useEffect(() => {
    if (timerOn) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  return (
    <div className={`App ${theme} size-${size}`}>
      <Container fluid>
        <NavMenu theme={theme} setTheme={setTheme} size={size} setSize={setSize} />
        <Calculations theme={theme} timeLeft={timeLeft} setTimeLeft={setTimeLeft} timerOn={timerOn} setTimerOn={setTimerOn} />
      </Container>
    </div>
  );
}

export default App;
