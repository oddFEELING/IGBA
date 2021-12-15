import React from 'react';
import AuthIcon from '../../assets/svg/auth-icon.svg';
import './AuthStyle.scss';

const Auth = () => {
  return (
    <div className='auth-container'>
      {/* ----- auth section ----- */}
      <section className='login-auth--section'>
        {/* ----- content div ----- */}
        <section className='login-content--section'></section>

        {/* ----- image ----- */}
        <img src={AuthIcon} alt='' className='auth-icon' />
      </section>

      {/* ----- free section ----- */}
      <div className='login-free--section'></div>
    </div>
  );
};

export default Auth;
