export const brewMethods = {
  'Pour over': {
    ratio: 60,
    grind: 'Medium to medium-fine',
    temperature: '98°C (just off the boil)',
    time: '2 minutes',
    timer: {hours: 0, minutes: 2, seconds: 0}
  },
  'French press': {
    ratio: 60,
    grind: 'Coarse',
    temperature: '94°C (let sit for 1 min after boiling)',
    time: '4 minutes',
    timer: {hours: 0, minutes: 4, seconds: 0}
  },
  'Aeropress': {
    ratio: 62.5,
    grind: 'Medium to fine',
    temperature: '80°C',
    time: '10 seconds',
    timer: {hours: 0, minutes: 0, seconds: 10}
  },
  'Moka pot': {
    ratio: 130,
    grind: 'Fine',
    temperature: '95°C',
    time: '4-5 minutes',
    timer: {hours: 0, minutes: 5, seconds: 0}
  },
  'Cold brew': {
    ratio: 125,
    grind: 'Extra coarse',
    temperature: 'Room temperature or cold',
    time: '12-24 hours',
    timer: {hours: 24, minutes: 0, seconds: 0}
  }
};

export const options = Object.keys(brewMethods);
console.log('options',options);
export const optionsSelect = options.map(option => <option key={option}>{option}</option>);

export default brewMethods;