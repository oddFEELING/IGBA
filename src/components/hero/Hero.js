import React from 'react';
import './Hero.scss';
import AOS from 'aos';
import DescType from './DescType';
import map_img from '../../assets/svg/hero-map.svg';
import arrow_icon from '../../assets/svg/arrow-right-icon.svg';

const Hero = () => {
  AOS.init({
    duration: 1000,
  });

  //-->  animation settings for button
  const BtnAnimation = {
    'data-aos': 'fade-up',
    'data-aos-delay': 4000,
    'data-aos-duration': 650,
  };

  return (
    <header className='hero-container'>
      {/* ----- content area div ----- */}
      {/* texts */}
      <div className='content-area--div'>
        <h1 className='content-area--title' data-aos='fade-down'>
          IGBA
        </h1>
        <h3 className='content-area--desc' data-aos='fade-right'>
          <DescType />
        </h3>
        {/* CTA BTN */}
        <div className='content-area--btn' {...BtnAnimation}>
          <p className='content-area--btn-text'>Take a tour</p>
          <img src={arrow_icon} alt='' className='content-area--btn-icon' />
        </div>
      </div>
      {/* ----- image div ----- */}
      <div className='image-area--div'>
        <img
          src={map_img}
          alt=''
          className='image-area--img'
          data-aos='zoom-out'
        />
      </div>
    </header>
  );
};

export default Hero;
