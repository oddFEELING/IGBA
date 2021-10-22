import React from 'react';
import AOS from 'aos';
import Tilt from 'react-parallax-tilt';
import './CardStyle.scss';

const Cards = (props) => {
  AOS.init({
    duration: 1000,
  });

  //-->  destructure props
  const { icon, title, content } = props;

  //-->  put options into an object
  const TiltOptions = {
    tiltMaxAngleX: 20,
    tiltMaxAngleY: 20,
    perspective: 1000,
    transitionSpeed: 1500,
    scale: 1.1,
    gyroscope: false,
  };

  return (
    <Tilt className='card-container' {...TiltOptions}>
      <div className='card-circle--one'>
        <div className='card-circle--two'>
          <div className='card-circle--three'>
            <div className='card-circle--four'>
              <img src={icon} alt='' className='card-icon' />
            </div>
          </div>
        </div>
      </div>
      <h2 className='card-content--title'>{title}</h2>
      <p className='card-content--text'>{content}</p>
    </Tilt>
  );
};

export default Cards;
