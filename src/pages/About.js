import React from 'react';

function About() {
  return (
    <div className='page'>
      <h1>About Project</h1>

      <p>
        Smart Electricity Usage Tracker is a React-based
        front-end project developed to monitor and analyze
        household electricity usage.
      </p>

      <h2>Technologies Used</h2>

      <ul>
        <li>React JS</li>
        <li>React Router DOM</li>
        <li>Recharts</li>
        <li>CSS</li>
      </ul>

      <h2>Features</h2>

      <ul>
        <li>Monthly usage graph</li>
        <li>Bill estimation</li>
        <li>Energy-saving tips</li>
        <li>Multi-page navigation</li>
        <li>Responsive design</li>
      </ul>
    </div>
  );
}

export default About;