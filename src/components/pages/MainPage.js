import React, { Fragment } from 'react';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import '../sections/Hero.css';

const MainPage = () => {
  return (
    <div>
      <section id='#' className='section hero'>
        <Hero />
      </section>
      <section id='projects' className=' section-content'>
        <Projects />
      </section>
    </div>
  );
};

export default MainPage;
