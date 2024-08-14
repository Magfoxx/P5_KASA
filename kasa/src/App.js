import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Composants temporaires pour les pages
const Home = () => <div><h1>Home Page</h1><p>Bienvenue sur la page d'accueil</p></div>;
const About = () => <div><h1>About Page</h1><p>Ceci est la page à-propos</p></div>;
const Error404 = () => <div><h1>Error 404</h1><p>Et ici la page d'erreur</p></div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <p>
          Lancement du Projet KASA 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;