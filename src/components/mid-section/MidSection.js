import React from 'react';
import MidImg from '../../assets/svg/mid-section-img.svg';
import './MidSectStyle.scss';
//-->  import mid section data
import Content from '../../data/mid-section-data/Data';

const MidSection = () => {
  return (
    <section className='mid-section-container'>
      {/* ----- content area div ----- */}
      <div className='mid-section--text-container'>
        {/* title */}
        <h2 className='mid-section--title'>{Content.title}</h2>
        {/* content */}
        <p className='mid-section--content'>{Content.content}</p>
      </div>
      {/* ----- image area div ----- */}
      <img src={MidImg} alt='' className='mid-section--img' />
    </section>
  );
};

export default MidSection;
