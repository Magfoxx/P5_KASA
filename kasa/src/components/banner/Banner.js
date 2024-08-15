import React from 'react';
/* importer le scss ici quand il sera fait */

function Banner({ imageUrl, altText }) {
  return (
    <div className='banner'>
      <img src={imageUrl} alt={altText} className='banner-image' />
      <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;