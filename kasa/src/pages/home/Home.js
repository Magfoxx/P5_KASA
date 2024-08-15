import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import imageBanner from '../../assets/images/banner/homeBanner.png';
/*import Gallery from '../../components/gallery/Gallery';*/
import Footer from '../../components/footer/Footer';
function Home() {
  return (
    <div>
      <Header />
      <Banner
        imageUrl={ imageBanner } 
        altText="Bannière du site avec des montagnes et l'océan"/>
      {/* <Gallery /> Mettre la gallerie ici quand elle sera terminé */}
      <Footer />
    </div>
  );
};

export default Home;