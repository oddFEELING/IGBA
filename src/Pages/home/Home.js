import React from 'react';
import './HomeStyles.scss';
import Nav from '../../components/navbar/Nav';
import Hero from '../../components/hero/Hero';
import TopSection from '../../components/top-section/TopSection';
import MidSection from '../../components/mid-section/MidSection';
import Features from '../../components/features/Features';
import Foot from '../../components/footer/Foot';

const Home = () => {
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

export default Home;
