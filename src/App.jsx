import React, { useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

function App() {
  return (
    <div>
      <NavBar />

      <Home />


        <About />


        <Resume />


        <Contact />

      <Footer />
    </div>
  );
}

export default App;
    