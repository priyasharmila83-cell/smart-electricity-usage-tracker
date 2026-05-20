import React, { useState } from 'react';

function Usage() {
  const [appliance, setAppliance] = useState('');
  const [watts, setWatts] = useState('');
  const [hours, setHours] = useState('');
  const [days, setDays] = useState('');
  const [units, setUnits] = useState(0);

  const calculateUsage = () => {
    const result = (watts * hours * days) / 1000;
    setUnits(result);
  };

  return (
    <div className='page'>
      <h1>Appliance Usage</h1>

      <div className='form-box'>
        <input
          type='text'
          placeholder='Enter Appliance'
          onChange={(e) => setAppliance(e.target.value)}
        />

        <input
          type='number'
          placeholder='Watts'
          onChange={(e) => setWatts(e.target.value)}
        />

        <input
          type='number'
          placeholder='Hours Used'
          onChange={(e) => setHours(e.target.value)}
        />

        <input
          type='number'
          placeholder='Number of Days'
          onChange={(e) => setDays(e.target.value)}
        />

        <button onClick={calculateUsage}>
          Calculate Usage
        </button>

        <h2>{appliance} Consumption: {units} Units</h2>
      </div>
    </div>
  );
}

export default Usage;