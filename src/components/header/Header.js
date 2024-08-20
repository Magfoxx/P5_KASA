import React from 'react';
import logo from '../../assets/images/logo/LOGO.svg';
import Nav from '../nav/Nav';
import '../../assets/styles/layout/_header.scss'

function Header() {
  return (
    <header className='header-content'> 
      <img className='header-logo' src={ logo } alt='Logo Kasa' />
      <Nav />
    </header>
  );
};

export default Header;