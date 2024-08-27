import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutImage from '../assets/images/banner/bannerAbout.webp';


function About() {
  return (
    <div className='about-page'>
      <Header />
      <Banner 
        imageUrl={ aboutImage }
        altText="Paysage montagneux"
        isDarkened={false} />
      <div className='about-content'>
        <Collapse title="Fiabilité">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula, est sed dignissim vestibulum, dolor neque ultrices nulla, auctor congue neque dui eget odio. Aenean sed dui vestibulum erat fermentum tempus ac pretium felis. Ut vulputate nisi in cursus faucibus. Suspendisse id ante congue, elementum risus et, suscipit velit. Nunc.</p>
        </Collapse>
        <Collapse title="Respect">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula, est sed dignissim vestibulum, dolor neque ultrices nulla, auctor congue neque dui eget odio. Aenean sed dui vestibulum erat fermentum tempus ac pretium felis. Ut vulputate nisi in cursus faucibus. Suspendisse id ante congue, elementum risus et, suscipit velit. Nunc.</p>
        </Collapse>
        <Collapse title="Service">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula, est sed dignissim vestibulum, dolor neque ultrices nulla, auctor congue neque dui eget odio. Aenean sed dui vestibulum erat fermentum tempus ac pretium felis. Ut vulputate nisi in cursus faucibus. Suspendisse id ante congue, elementum risus et, suscipit velit. Nunc.</p>
        </Collapse>
        <Collapse title="Sécurité">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula, est sed dignissim vestibulum, dolor neque ultrices nulla, auctor congue neque dui eget odio. Aenean sed dui vestibulum erat fermentum tempus ac pretium felis. Ut vulputate nisi in cursus faucibus. Suspendisse id ante congue, elementum risus et, suscipit velit. Nunc.</p>
        </Collapse>
      </div>
      <Footer />
    </div>
  );
};

export default About;