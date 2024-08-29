import React, { useState } from 'react';
import Vector from '../assets/images/arrow/vector.png';
import "../assets/styles/components/_carousel.scss"
import AccommodationDetails from '../pages/AccommodationDetails';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <img
        src={Vector}
        onClick={goToPrevious}
        className="carousel__button carousel__button-left">
      </img>

      <div className="carousel__image-container">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel__image"
        />
      </div>

      <img
        src={Vector}
        onClick={goToNext}
        className="carousel__button carousel__button-right">
      </img>

      <div className="carousel__pagination">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};


export default Carousel;