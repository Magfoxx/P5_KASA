import React from 'react';
import Card from '../card/Card';
import '../../assets/styles/components/_gallery.scss';
import cardData from '../../data/logements.json';

function Gallery() {
  return (
    <div className='gallery'>
      <div className='gallery__container'>
        {cardData.map(card => (
          <Card
            key={card.id}
            title={card.title}
            cover={card.cover}
            />
          ))}
      </div>
    </div>
  );
}

export default Gallery;