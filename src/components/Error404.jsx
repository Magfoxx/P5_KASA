import React from 'react';

import imgError from '../assets/images/error/404.png';
import '../assets/styles/components/_errorPage.scss';

function Error404() {
  return (
      <div className='error'>
        <img className='error__logo' src={ imgError } alt='Logo erreur 404'/>
        <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
        <a href='/' className='back-home-link'>Retourner sur la page d'accueil</a>
      </div>
  );
};

export default Error404;