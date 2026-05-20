import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <h2>Smart Electricity Tracker</h2>

      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/usage'>Usage</Link>
        <Link to='/report'>Report</Link>
        <Link to='/tips'>Tips</Link>
        <Link to='/history'>History</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
}

export default Navbar;