import React from 'react';
import Appointment from './Appointment/Appointment';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import './Home.css';
import Info from './Info/Info';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <Info />
      <Services />
      <Appointment />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;