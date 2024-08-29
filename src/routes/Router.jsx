import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error404 from '../pages/NoPage';
import AccommodationDetails from '../pages/AccommodationDetails';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation/:id" element={<AccommodationDetails />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;