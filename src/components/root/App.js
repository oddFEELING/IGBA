import React from 'react';
import './AppStyle.scss';
import Nav from '../navbar/Nav';
import Hero from '../hero/Hero';
import TopSection from '../top-section/TopSection';
import MidSection from '../mid-section/MidSection';
import Features from '../features/Features';
import Foot from '../footer/Foot';

const App = () => {
  return (
    <div className='app-container'>
      <Nav />
      <Hero />
      <TopSection />
      <MidSection />
      <Features />
      <Foot />
    </div>
  );
};

export default App;
