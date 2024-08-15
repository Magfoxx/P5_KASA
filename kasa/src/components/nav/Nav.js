import React from 'react';
import { Link } from 'react-router-dom';
/*importer le scss quand il sera fait ici */

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;