import './App.css';
import './styles/theme.scss';
import { useState } from 'react';
import Calculations from './pages/Calculations';
import NavMenu from './pages/NavMenu';
import { Container } from 'react-bootstrap'

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <div className={`App ${theme}`}>
      <Container fluid>
        <NavMenu theme={theme} />
        <Calculations theme={theme} />
      </Container>
    </div>
  );
}

export default App;
