import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import HomeImage from '../assets/images/banner/bannerHome.webp';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner
          imageUrl={ HomeImage }
          altText="Paysage de falaises "
          title="Chez vous, partout ailleurs"
          isDarkened={true} />
        <Gallery /> 
      </main>
      <Footer />
    </div>
  );
};

export default Home;