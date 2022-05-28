import * as React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownButton, Form, FormControl, InputGroup, Row, Col } from 'react-bootstrap';

const Calculations = props => {
  const [method, setMethod] = useState('Pour over');
  
  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  const brewWater = 0;
  
  const options = ['Pour over','French press', 'Aeropress', 'Moka pot', 'Cold brew'];
  const optionsSelect = options.map(option => <option key={option}>{option}</option>);
  
  return <div className="">
    <Form>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Brewing Method</Form.Label>
        <Col sm="10">
          <Form.Select sm="10" onChange={handleChange}>{optionsSelect}</Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Amount of Coffee:</Form.Label>
        <Col sm="10">
          <Form.Control type="number" name="brew-coffee" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Brew Ratio:</Form.Label>
        <Col sm="10">
          <InputGroup>
            <InputGroup.Text id="basic-addon2">1:</InputGroup.Text>
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="number"
            />
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