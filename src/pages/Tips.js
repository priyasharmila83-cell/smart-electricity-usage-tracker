import React from 'react';

function Tips() {
  const tips = [
    'Switch off unused appliances',
    'Use LED bulbs',
    'Reduce AC usage',
    'Unplug chargers when not in use',
    'Use natural lighting during daytime',
  ];

  return (
    <div className='page'>
      <h1>Energy Saving Tips</h1>

      <div className='tips-container'>
        {tips.map((tip, index) => (
          <div className='tip-card' key={index}>
            <h3>Tip {index + 1}</h3>
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;