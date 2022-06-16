import * as React from 'react';
import { Table } from 'react-bootstrap';

const Tips = props => {
  const tips = <Table hover variant={props.theme}>
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

  return <div id="tips">
    <h3>Tips</h3>
    {tips}
  </div>
}

export default Tips;