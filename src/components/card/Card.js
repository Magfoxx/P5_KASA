import React from 'react';
import '../../assets/styles/components/_card.scss';

function Card({ title, cover }) {
  return (
    <div className='card'>
        <img
          src={cover}
          alt={title}
          className='card__image' />
        <h2 className='card__title'>{title}</h2>
    </div>
  );
}

export default Card;