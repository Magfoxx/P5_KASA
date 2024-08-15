import React, { useState } from 'react';
/* importer le scss quand il sera fait ici */

function Collapse({ title, children }) {
  const [isOpen, setisOpen] = useState(false);

  const toggleCollapse = () => {
    setisOpen(!isOpen);
  }
  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className='collapse-content'>{children}</div>}
    </div>
  );
};

export default Collapse;