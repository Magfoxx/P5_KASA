import React from 'react';
import logo from '../../assets/images/logo/logo_footer.png';
/*importer le scss quand il sera fait ici */

function Footer() {
  return (
    <footer className='footer'>
      <img src={ logo } alt='Logo Kasa' />
      <p>© 2024 Kasa. All right reserved</p>
    </footer>
  );
};

export default Footer;