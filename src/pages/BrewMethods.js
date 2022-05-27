import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const hotMethods = ['Pour Over', 'Press', 'Percolate'];
const coldMethods = ['Iced', 'Cold Brew'];

const BrewMethods = props => {
  const methodButtons = hotMethods.map(method => <Button key={method}>{method}</Button>);

  return <div>
    {methodButtons}
  </div>  
}

export default BrewMethods;