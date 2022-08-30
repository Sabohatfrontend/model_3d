import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcNightPortrait } from 'react-icons/fc';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const closeMobileMenu =() => setclick(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className='logo navbar-logo' onClick={closeMobileMenu}>
          3D MAX
            <FcNightPortrait className='navbar-icon' />
             night
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click? 'nav-menu active':'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>Kurs haqida</Link>
            </li>
            <li className="nav-item">
              <Link to='/3dmax' className="nav-links" onClick={closeMobileMenu}>3D Max</Link>
            </li>
            <li className="nav-item">
              <Link to='/corona' className="nav-links" onClick={closeMobileMenu}>Corona-render</Link>
            </li>
            <li className="nav-item">
              <Link to='/vray' className="nav-links" onClick={closeMobileMenu}>V-Ray render</Link>
            </li>
            <li className="nav-item">
              <Link to='/photoshop' className="nav-links" onClick={closeMobileMenu}>Adobe PhotoShop</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;