import * as React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownButton, Form, FormControl, InputGroup, Row, Col } from 'react-bootstrap';

const Calculations = props => {
  const [method, setMethod] = useState({
    method: 'Pour over',
    ratio: 60,
    coffee: 0
  });
  
  const handleMethodChange = (event) => {
    setMethod({...method, method: event.target.value, ratio: brewMethods[event.target.value].ratio });
  };
  const handleRatioChange = (event) => {
    setMethod({...method, ratio: event.target.value });
  };
  const handleCoffeeChange = (event) => {
    setMethod({...method, coffee: event.target.value });
  };

  const brewWater = Math.floor(method.coffee / method.ratio * 1000);

  const brewMethods = {
    'Pour over': {
      ratio: 60,
      grind: 'Medium',
      temperature: 'Hot'
    },
    'French press': {
      ratio: 60,
      grind: '',
      temperature: ''
    },
    'Aeropress': {
      ratio: 62.5,
      grind: '',
      temperature: ''
    },
    'Moka pot': {
      ratio: 130,
      grind: '',
      temperature: ''
    },
    'Cold brew': {
      ratio: 125,
      grind: '',
      temperature: ''
    }
  };

  const options = ['Pour over','French press', 'Aeropress', 'Moka pot', 'Cold brew'];
  const optionsSelect = options.map(option => <option key={option}>{option}</option>);
  
  return <div className="">
    <Form>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Brewing Method</Form.Label>
        <Col sm="10">
          <Form.Select sm="10" onChange={handleMethodChange}>{optionsSelect}</Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Amount of Coffee:</Form.Label>
          <Col sm="10">
            <InputGroup>
              <Form.Control type="number" name="brew-coffee" onChange={handleCoffeeChange} value={method.coffee ? method.coffee : ''}/>
              <InputGroup.Text id="basic-addon2">g</InputGroup.Text>
            </InputGroup>
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Brew Ratio:</Form.Label>
        <Col sm="10">
          <InputGroup>
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="number"
              onChange={handleRatioChange} 
              value={method.ratio}
            />
            <InputGroup.Text id="basic-addon2">g/L</InputGroup.Text>
          </InputGroup>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Amount of Water:</Form.Label>
        <Col sm="10">
          {brewWater} ml
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Brew Time:</Form.Label>
        <Col sm="10">
          0:00
        </Col>
      </Form.Group>
    </Form>
  </div>
}

export default Calculations;