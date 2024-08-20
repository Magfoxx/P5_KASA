import React from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import homeImage from '../assets/images/banner/bannerHome.webp';
/*import Gallery from '../../components/gallery/Gallery';*/
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner
          imageUrl={ homeImage }
          altText="Paysage de falaises "
          title="Chez vous, partout ailleurs"
          isDarkened={true} />
        {/* <Gallery /> Mettre la gallerie ici quand elle sera terminé */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;