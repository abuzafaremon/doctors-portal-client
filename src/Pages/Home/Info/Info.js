import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
  return (
    <section className='p-2 sm:p-5 md:p-10 py-10'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <InfoCard bgClass='bg-gradient-to-r from-primary to-secondary' cardTitle='Opening Hours' description='lorem ipsum doler sit amet dummy text' img={clock}></InfoCard>
        <InfoCard bgClass='bg-accent' cardTitle='Our Location' description='Brooklyn, NY 10036, United States' img={marker}></InfoCard>
        <InfoCard bgClass='bg-gradient-to-r from-primary to-secondary' cardTitle='Contact Us' description='+000 123 456789' img={phone}></InfoCard>
      </div>
    </section>
  );
};

export default Info;