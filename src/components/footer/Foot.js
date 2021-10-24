import React from 'react';
import './FootStyle.scss';
//-->  import image for logo
import Logo from '../../assets/svg/location-pin.svg';
//-->  import the data to display
import {
  CompanyLinks,
  ConnectData,
  NewsMsg,
} from '../../data/footer-data/FootData';

const Foot = () => {
  return (
    <footer className='foot-container'>
      {/* ----- title ----- */}
      <div className='foot-title--container'>
        <h3 className='foot-title--text'>IGBA</h3>
        <img src={Logo} alt='' className='foot-title--img' />
      </div>

      {/* ----- footer section divs ----- */}
      <div className='foot-section--container'>
        {/* ----- company links section ----- */}
        <div className='foot-link--section'>
          <h4 className='section--title'>Company</h4>

          {/* ----- map through to show links ----- */}
          {CompanyLinks.map((data) => {
            return (
              <a href={data.link} className='link-section--link' key={data.key}>
                {data.text}
              </a>
            );
          })}
        </div>

        {/* ----- connect section ----- */}
        <div className='foot-connect--section'>
          <h4 className='section--title'>Keep Connected </h4>

          {/* ----- map through data to sbow handles ----- */}
          {ConnectData.map((data) => {
            return (
              <div className='connect-section--handle-container' key={data.key}>
                <img src={data.icon} alt='' className='connect-section--img' />
                <p className='connect-section--handle'>{data.message}</p>
              </div>
            );
          })}
        </div>

        {/* ----- newsletter section ----- */}
        <div className='foot-newsletter--section'>
          <h4 className='section--title'>Subscribe</h4>

          <form className='newsletter-section-container' type='post'>
            <input
              required
              name='email'
              type='email'
              className='newsletter-section--input'
              placeholder='Enter your email'
            />
            <button
              type='reset'
              onClick={() => alert(`☹ Sorry this feature doesn't work yet... `)}
              className='newsletter-section--button'
            >
              Yes! I'm in
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
