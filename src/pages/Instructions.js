import * as React from 'react';
import { Table } from 'react-bootstrap';

const Instructions = props => {
  const pourOver = <div>
    <ol>
      <li>
        Rinse paper filter with hot water.
      </li>
      <li>
        Bloom with {Math.ceil(props.brewWater * 0.12)}ml, wait 30-45s.
      </li>
      <li>
        Pour {Math.ceil(props.brewWater * 0.48)}ml in 30s. — Total: {Math.ceil(props.brewWater * 0.6)}ml
      </li>
      <li>
        Pour {Math.ceil(props.brewWater * 0.4)}ml in 30s. — Total: {props.brewWater}ml
      </li>
      <li>
        Stir 1x clockwise and 1x counterclockwise, swirl, and let it draw down. It will take a lot longer if you’re using the Chemex as opposed to the V60.
      </li>
    </ol>
  </div>
  
  const frenchPress = <div>
    <ol>
      <li>Add hot water to your container and let it sit for 4 min.</li>
      <li>After 4 min, stir the crust. scoop away everything that’s left floating on top. Do nothing for 5-8 minutes.</li>
      <li>Put the plunger right on the surface of the coffee, pour coffee in the cup.</li>
    </ol>
  </div>

  const aeropress = <div>
    <ol>
      <li>Push plunger out of chamber.</li>
      <li>Put filter in filter cap.</li>
      <li>Twist filter cap onto chamber</li>
      <li>Stand chamber on sturdy mug and put one rounded scoop of fine drip grind coffee in chamber.</li>
      <li>Shake to level coffee.</li>
      <li>Add water up to (1) on the chamber, 175°F (80°C) for hot brewing, or room temperature water for cold brew.</li>
      <li>Stir about 10 seconds for hot brewing or 1 min briskly for cold brew.</li>
      <li>Insert plunger and press gently, pausing when you feel resistance, until plunger reaches grounds.</li>
      <li>Remove filter cap, push plunder to eject used coffee and rinse seal.</li>
    </ol>
    <Table variant={props.theme}>
      <thead>
        <tr>
          <th>Espresso</th>
          <th>American</th>
          <th>Latte</th>
          <th>Cold brew</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Drink as is.</td>
          <td>Add water to make an 8oz (237ml) coffee.</td>
          <td>Add milk to make an 8oz (237ml) coffee.</td>
          <td>Add room temperature or ice water to make an 8oz (237ml) cold brew.</td>
        </tr>
      </tbody>
    </Table>
  </div>

  const mokaPot = <div>
    <ol>
      <li>Use a coffee grinder. Grind enough coffee to fill the filter basket evenly and don’t pack the grounds down. The grind required for a Moka Pot is coarser than espresso.</li>
      <li>
        Fill the bottom water chamber up with hot water to, but not exceeding the pressure valve.
      </li>
      <li>
        Assemble the entire pot and make sure it is screwed together properly.
      </li>
      <li>
        Place on a heat source at medium heat (~204° F / ~95° C) and let sit. Leave the lid up so you can see what’s happening,
      </li>
      <li>
        Once you see the coffee initially make its way to the upper chamber, turn the heat down to about 50% of the original temperature.
      </li>
      <li>
        Remove the pot from your heat source when the coffee reaches the bottom of the spout or all the water is spent. This should take between 4 and 5 minutes.
      </li>
      <li>
        Pour, enjoy.
      </li>
    </ol>
  </div>

  const coldBrew = <div>
    <ol>
      <li>Gind your beans coarsely.</li>  
      <li>Add {props.brewWater}ml room temperature or cold water. Filtered water is preferred. (Produces a 1:8 ratio or coffee to water).</li>  
      <li>Wait 12-18 hours at room temperature, or 18-24 hours in the fridge.</li>  
      <li>Strain the coffee.</li>
    </ol>
  </div>

  const instructions = props.method.method === 'Pour over' ? pourOver : 
    props.method.method === 'French press' ? frenchPress :
    props.method.method === 'Aeropress' ? aeropress :
    props.method.method === 'Moka pot' ? mokaPot : 
    props.method.method === 'Cold brew' ? coldBrew :
    '';

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

  return <div id="instructions">
    <h2>Instructions</h2>
    {instructions}
    <h3 id="tips">Tips</h3>
    {tips}
  </div>
}

export default Instructions;