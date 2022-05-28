import './App.css';
import Calculations from './pages/Calculations';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <h1>Coffee Brewing</h1>
        <Calculations />
      </Container>
    </div>
  );
}

export default App;
