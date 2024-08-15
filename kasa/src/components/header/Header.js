import React from 'react';
import logo from '../../assets/images/logo/LOGO.svg';
import Nav from '../nav/Nav';
/*importer le scss quand il sera fait ici */

function Header() {
  return (
    <header>
      <img src={ logo } alt='Logo Kasa' />
      <Nav />
    </header>
  );
};

export default Header;