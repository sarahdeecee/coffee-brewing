import './App.css';
import './styles/theme.scss';
import { useEffect, useState } from 'react';
import Calculations from './pages/Calculations';
import Tips from './data/Tips';
import NavMenu from './pages/NavMenu';
import Instructions from './pages/Instructions';
import Timer from './pages/Timer';
import { brewMethods } from './data/brewMethods';
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
  const [showAlert, setShowAlert] = useState(false);
  const [method, setMethod] = useState({
    method: 'Pour over',
    ratio: 60,
    coffee: 0
  });

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
        setShowAlert(true);
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
    if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      
    }
  });

  const brewWater = Math.floor(method.coffee / method.ratio * 1000);

  return (
    <div className={`App ${theme} size-${size}`}>
      <Container fluid className="App-container">
        <NavMenu theme={theme} setTheme={setTheme} size={size} setSize={setSize} />
        <Calculations theme={theme} timeLeft={timeLeft} setTimeLeft={setTimeLeft} timerOn={timerOn} setTimerOn={setTimerOn} method={method} setMethod={setMethod} />
        <Timer method={method} theme={theme} timeLeft={timeLeft} setTimeLeft={setTimeLeft} timerOn={timerOn} setTimerOn={setTimerOn} brewTime={brewMethods[method.method].timer} showAlert={showAlert} setShowAlert={setShowAlert} />
        <Instructions method={method} brewWater={brewWater} theme={theme} />
        <Tips />
      </Container>
    </div>
  );
}

export default App;
