import React from 'react';
/* importer le scss ici quand il sera fait */

function Banner({ imageUrl, altText, title }) {
  return (
    <div className='banner'>
      <img src={imageUrl} alt={altText} className='banner-image' />
      <h1 className='banner-text'>{title}</h1>
    </div>
  );
};

export default Banner;