import React from 'react';
import { FiSearch } from "react-icons/fi";
import './Navbar.scss';

function Navbar() {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-hamburger'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='app__navbar-logo'>
        <p>Zintlr News</p>
      </div>
      <div className='app__navbar-search'>
        <FiSearch />
      </div>
    </div>
  )
}

export default Navbar