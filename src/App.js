import './App.css';
import './styles/theme.scss';
import { useState } from 'react';
import Calculations from './pages/Calculations';
import NavMenu from './pages/NavMenu';
import { Container } from 'react-bootstrap'

function App() {
  const [theme, setTheme] = useState('dark');
  const [size, setSize] = useState(3);
  return (
    <div className={`App ${theme}`}>
      <Container fluid>
        <NavMenu theme={theme} setTheme={setTheme} />
        <Calculations theme={theme} />
      </Container>
    </div>
  );
}

export default App;
