import './App.css';
import './styles/theme.scss';
import { useState } from 'react';
import Calculations from './pages/Calculations';
import NavMenu from './pages/NavMenu';
import { Container } from 'react-bootstrap'

function App() {
  const [theme, setTheme] = useState('light');
  const [size, setSize] = useState(4);
  return (
    <div className={`App ${theme} size-${size}`}>
      <Container fluid>
        <NavMenu theme={theme} setTheme={setTheme} size={size} setSize={setSize} />
        <Calculations theme={theme} />
      </Container>
    </div>
  );
}

export default App;
