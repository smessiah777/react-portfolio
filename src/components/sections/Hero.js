import React from 'react';
import '../sections/Hero.css';

const Hero = () => {
  return (
    <div>
      <section id='#' className='section hero'>
        <div className='nav-overlay'></div>
        <div className='hero-overlay'>
          <div className='hero-content-wrap '>
            <h1 className='name animated fadeInDown slow'>
              Stephen{' '}
              <span className='last-name animated fadeInDown slow'>
                Messiah
              </span>{' '}
            </h1>
            <h2 className='sub-title animated fadeInUp slower'>
              {' '}
              Web-Developer
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
