import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import SpecialService from './SpecialService';

const Services = () => {
  const services = [
    { _id: '1', title: 'Fluoride Treatment', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, laudantium?', img: fluoride },
    { _id: '2', title: 'Cavity Filling', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, laudantium?', img: cavity },
    { _id: '3', title: 'Teeth Whitening', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, laudantium?', img: whitening }
  ]
  return (
    <section className='p-2 sm:p-5 md:p-10'>
      <h3 className='uppercase text-primary text-center text-lg font-bold'>Our Services</h3>
      <h2 className='text-4xl text-center'>Service We Provide</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
          services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
        }
      </div>
      <SpecialService />
    </section>
  );
};

export default Services;