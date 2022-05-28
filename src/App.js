import './App.css';
import HotCold from './pages/HotCold';
import BrewMethods from './pages/BrewMethods';
import Calculations from './pages/Calculations';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <h1>Coffee Brewing</h1>
        {/* <HotCold />
        <BrewMethods /> */}
        <Calculations />
      </Container>
    </div>
  );
}

export default App;
