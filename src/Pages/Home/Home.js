import React from 'react';
import Appointment from './Appointment/Appointment';
import Hero from './Hero/Hero';
import './Home.css';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Services />
      <Appointment />
    </>
  );
};

export default Home;