import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click] = useState(false);


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
                to='/Settings'
                className='nav-links'
              >
                Settings
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
