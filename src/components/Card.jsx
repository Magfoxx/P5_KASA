import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/components/_card.scss';



function Card({ id, title, cover }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/accommodation/${id}`);
  };

  return (
    <div className='card' onClick={handleClick}>
        <img
          src={cover}
          alt={title}
          className='card__image' />
        <h2 className='card__title'>{title}</h2>
    </div>
  );
}

export default Card;