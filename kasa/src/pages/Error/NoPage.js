import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Error404 from '../../components/error/Error404';

function NoPage() {
  return (
    <div className='no-page'>
      <Header />
      <Error404 />
      <Footer />
    </div>
  );
};

export default NoPage;
