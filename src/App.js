import './App.css';
import Calculations from './pages/Calculations';
import NavMenu from './pages/Navbar';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <NavMenu />
      <Calculations />
    </Container>
  );
}

export default App;
