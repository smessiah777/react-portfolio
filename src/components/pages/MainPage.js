import React, { Fragment } from 'react';
import '../sections/Hero.css';
import '../sections/About.css';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import About from '../sections/About';

const MainPage = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
    </div>
  );
};

export default MainPage;
