import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/collapse.scss';
import Arrow from '../assets/images/carrousel/Arrow.png';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      <div className={`collapse__header ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img
          src={Arrow}
          alt={isOpen ? 'Collapse' : 'Expand'}
          className={`collapse__icon ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;