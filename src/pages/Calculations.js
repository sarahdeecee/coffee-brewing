import * as React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownButton, Form, FormControl, FormGroup, Row, Col } from 'react-bootstrap';

const Calculations = props => {
  const [method, setMethod] = useState('Pour over');
  
  const handleChange = (event) => {
    setMethod(event.target.value);
  };
  
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
        <Form.Label column sm="2">Amount of Water:</Form.Label>
        <Col sm="10">
          <Form.Control type="number" name="brew-water" />
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