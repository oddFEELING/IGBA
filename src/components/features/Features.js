import React from 'react';
import './FeaturesStyle.scss';
//-->  import feature data
import FeatData from '../../data/features-data/FeatData';

const Features = () => {
  return (
    <section className='feature-container'>
      <div className='topography' />
      {/* ----- title text ----- */}
      <h2 className='feature--title'>Features</h2>

      {/* ----- feature div ----- */}
      <div className='feature-card--container'>
        {/* ----- feature map ----- */}
        {FeatData.map((data) => {
          return (
            <div
              className='feature-card'
              key={data.key}
              align={data.align}
              data-aos={`fade-${data.align}`}
            >
              {/* feature image */}
              <img src={data.image} alt='' className='feature-card--img' />
              {/* ----- feature text container ----- */}
              <div className='feature-text--container' align={data.align}>
                {/* feature title */}
                <h3 className='feature-card--title'>{data.title}</h3>
                {/* feature content */}
                <p className='feature-card--content'>{data.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
