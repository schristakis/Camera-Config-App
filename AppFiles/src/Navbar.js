import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);


  return (
    <>
      <nav className='navbar'>
        <div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
              >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/General_Settings'
                className='nav-links'
              >
                General Settings
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Advanced_Settings'
                className='nav-links'
              >
                Advanced Settings
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
