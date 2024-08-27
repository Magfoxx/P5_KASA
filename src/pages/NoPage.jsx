import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error404 from '../components/Error404';

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
