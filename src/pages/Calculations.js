import * as React from 'react';
import { useState } from 'react';

const Calculations = props => {
  const [value, setValue] = useState('fruit');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const options = ['Pour over','French press', 'Aeropress', 'Moka pot', 'Cold brew'];
  const optionsSelect = options.map(option => <option value={option}>{option}</option>)
  
  return <div>
    <select value={value} onChange={handleChange}>
      {optionsSelect}
    </select>
    <label>Amount of Coffee:</label>
    <input type="number" name="coffee-g" />
    <label>Amount of Water:</label>
    <input type="number" name="water-ml" />
  </div>
}

export default Calculations;