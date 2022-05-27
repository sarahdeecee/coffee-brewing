import * as React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownButton, Form, FormControl, FormGroup } from 'react-bootstrap';

const Calculations = props => {
  const [value, setValue] = useState('Method');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const options = ['Pour over','French press', 'Aeropress', 'Moka pot', 'Cold brew'];
  const optionsSelect = options.map(option => <option key={option}>{option}</option>);
  
  return <div className="">
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Brewing Method</Form.Label>
        <Form.Select title="Choose a brewing method">{optionsSelect}</Form.Select>
      </Form.Group>
    <Form.Label>Amount of Coffee:</Form.Label>
    <Form.Control type="number" name="coffee-g" />
    <Form.Label>Amount of Water:</Form.Label>
    <Form.Control type="number" name="water-ml" />
    </Form>
  </div>
}

export default Calculations;