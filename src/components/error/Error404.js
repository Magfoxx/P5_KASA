import React from 'react';
/* importer le scss quand il sera fait ici */

function Error404() {
  return (
      <main className='error-content'>
        <h1 className='error-code'>404</h1>
        <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
        <a href='/' className='back-home-link'>Retourner sur la page d'accueil</a>
      </main>
  );
};

export default Error404;