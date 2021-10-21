import React from 'react';
import Cards from '../parallaxCards/Cards';
import './TopSectStyle.scss';
import CardData from '../../data/top-section-data/Data';

const TopSection = () => {
  return (
    <div className='top-section-container'>
      {/* ----- title text ----- */}
      <h2 className='top-section-title'>Mapping development with ease</h2>

      {/* ----- card div ----- */}
      <div className='top-card--container'>
        {/* ----- cards  ----- */}
        {CardData.map((data) => {
          return (
            <Cards
              key={data.key}
              icon={data.icon}
              title={data.title}
              content={data.content}
            />
          );
        })}
      </div>

      {/* ----- browse features ----- */}
    </div>
  );
};

export default TopSection;
