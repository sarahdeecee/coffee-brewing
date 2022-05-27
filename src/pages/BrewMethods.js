import React, { Component } from 'react';

const hotMethods = ['Pour Over', 'Press', 'Percolate'];
const coldMethods = ['Iced', 'Cold Brew'];

const BrewMethods = props => {
  const methodButtons = hotMethods.map(method => <button key={method}>{method}</button>);

  return <div>{methodButtons}
  </div>
}

export default BrewMethods;