import * as React from 'react';
import { Table } from 'react-bootstrap';

const Instructions = props => {
  const coldBrew = <div>

  </div>


  return <div>
    <h2>Instructions</h2>
    <Table bordered hover>
      <thead>
        <tr>
          <th>Taste</th>
          <th>Brew Time</th>
          <th>Water Temperature</th>
          <th>Grind Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Sour</th>
          <td>Increase</td>
          <td>Decrease</td>
          <td>Finer</td>
        </tr>
        <tr>
          <th>Bitter</th>
          <td>Decrease</td>
          <td>Hotter</td>
          <td>Coarser</td>
        </tr>
      </tbody>
    </Table>
  </div>
}

export default Instructions;