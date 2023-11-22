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
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Aquí podrías agregar tu lógica para animaciones al hacer scroll
  };

  return (
    <>
      <NavBar />
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="resume" className="element">
        <Resume />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
    