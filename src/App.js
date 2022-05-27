import './App.css';
import HotCold from './pages/HotCold';
import BrewMethods from './pages/BrewMethods';
import Calculations from './pages/Calculations';


function App() {
  return (
    <div className="App">
      <h1>Coffee Brewing</h1>
      <HotCold />
      <BrewMethods />
      <Calculations />
    </div>
  );
}

export default App;
