import React from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import HomeImage from '../assets/images/banner/bannerHome.webp';
import Gallery from '../components/gallery/Gallery';
import Footer from '../components/footer/Footer';

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