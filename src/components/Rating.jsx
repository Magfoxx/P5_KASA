import React from 'react';
import fullStar from '../assets/images/rate/fullStar.png';
import emptyStar from '../assets/images/rate/emptyStar.png';

import "../assets/styles/components/_ratings.scss";

function Rating({ rating }) {
  // Converti la note en nombre entier et la limite à 5
  const starRating = Math.min(parseInt(rating, 10), 5);

  // Création d'un tableau d'étoiles pleines et vides en fonction de la note
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < starRating) {
      stars.push(<img key={i} src={fullStar} alt="star" />);
    }
    else {
      stars.push(<img key={i} src={emptyStar} alt="star" />);
    }
  }

  return <div className="rating">{stars}</div>
};

export default Rating;
