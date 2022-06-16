import * as React from 'react';
import Instructions from './Instructions';
import Timer from './Timer';
import {brewMethods, optionsSelect} from '../data/brewMethods';
import { useState } from 'react';
import { Form, FormControl, InputGroup, Row, Col } from 'react-bootstrap';

const Calculations = props => {
  const { theme, timeLeft, setTimeLeft, timerOn, setTimerOn, method, setMethod } = props;

  const brewWater = Math.floor(method.coffee / method.ratio * 1000);

  const handleMethodChange = (event) => {
    setMethod({...method, method: event.target.value, ratio: brewMethods[event.target.value].ratio });
    setTimeLeft(brewMethods[event.target.value].timer)
  };
  const handleRatioChange = (event) => {
    setMethod({...method, ratio: event.target.value });
  };
  const handleCoffeeChange = (event) => {
    setMethod({...method, coffee: event.target.value });
  };
  
  return <>
    <Form id="top">
      <Form.Group as={Row} className="mb-3">
        <Form.Label column xs="6" md="3">Brewing Method</Form.Label>
        <Col xs="6" md="9">
          <Form.Select md="9" onChange={handleMethodChange}>{optionsSelect}</Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
          <Form.Label column xs="6" md="3">Amount of Coffee:</Form.Label>
          <Col xs="6" md="9">
            <InputGroup>
              <Form.Control type="number" name="brew-coffee" onChange={handleCoffeeChange} value={method.coffee ? method.coffee : ''}/>
              <InputGroup.Text>g</InputGroup.Text>
            </InputGroup>
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column xs="6" md="3">Brew Ratio:</Form.Label>
        <Col xs="6" md="9">
          <InputGroup>
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="number"
              onChange={handleRatioChange} 
              value={method.ratio}
            />
            <InputGroup.Text>g/L</InputGroup.Text>
          </InputGroup>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column xs="6" md="3">Amount of Water:</Form.Label>
        <Col xs="6" md="9">
          <Form.Control plaintext readOnly value={brewWater + ' ml'} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column xs="6" md="3">Water Temperature:</Form.Label>
        <Col xs="6" md="9">
        <Form.Control plaintext readOnly value={brewMethods[method.method].temperature} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column xs="6" md="3">Brew Time:</Form.Label>
        <Col xs="6" md="9">
          <Form.Control plaintext readOnly value={brewMethods[method.method].time} />
        </Col>
      </Form.Group>
    </Form>
    <Timer method={method} brewWater={brewWater} theme={theme} timeLeft={timeLeft} setTimeLeft={setTimeLeft} timerOn={timerOn} setTimerOn={setTimerOn} brewTime={brewMethods[method.method].timer} />
    <Instructions method={method} brewWater={brewWater} theme={theme} />
  </>
}

export default Calculations;