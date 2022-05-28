import * as React from 'react';
import Instructions from './Instructions';
import { useState } from 'react';
import { Form, FormControl, InputGroup, Row, Col } from 'react-bootstrap';

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
      grind: 'Medium to medium-fine',
      temperature: '98°C (just off the boil)',
      time: '2 minutes'
    },
    'French press': {
      ratio: 60,
      grind: 'Coarse',
      temperature: '94°C (let sit for 1 min after boiling)',
      time: '4 minutes'
    },
    'Aeropress': {
      ratio: 62.5,
      grind: 'Medium to fine',
      temperature: '80°C',
      time: '10 seconds'
    },
    'Moka pot': {
      ratio: 130,
      grind: 'Fine',
      temperature: '95°C',
      time: '4-5 minutes'
    },
    'Cold brew': {
      ratio: 125,
      grind: 'Extra coarse',
      temperature: 'Room temperature or cold',
      time: '12-24 hours'
    }
  };

  const options = ['Pour over','French press', 'Aeropress', 'Moka pot', 'Cold brew'];
  const optionsSelect = options.map(option => <option key={option}>{option}</option>);
  
  return <>
    <Form id="top">
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
          </InputGroup>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Amount of Water:</Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly value={brewWater + ' ml'} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Water Temperature:</Form.Label>
        <Col sm="10">
        <Form.Control plaintext readOnly value={brewMethods[method.method].temperature} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Brew Time:</Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly value={brewMethods[method.method].time} />
        </Col>
      </Form.Group>
    </Form>
    <Instructions method={method} brewWater={brewWater} theme={props.theme} />
  </>
}

export default Calculations;