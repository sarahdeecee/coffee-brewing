import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const hotMethods = ['Pour Over', 'Press', 'Percolate'];
const coldMethods = ['Iced', 'Cold Brew'];

const BrewMethods = props => {
  const methodButtons = hotMethods.map(method => <Dropdown.Item href="#" key={method}>{method}</Dropdown.Item>);

  return <Dropdown.Menu>
    {methodButtons}
    </Dropdown.Menu>
}

export default BrewMethods;