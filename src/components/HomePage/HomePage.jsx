import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import CallToAction from './CallToAction';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div id='HomePage_1' className='min-h-screen bg-gradient-to-b from-white to-gray-100'>
      <Hero />
      <AboutUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;