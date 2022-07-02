import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const SpecialService = () => {
  return (
    <div className="hero py-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-5 grid justify-center">
          <img width={450} className='rounded-lg' src={treatment} alt='' />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default SpecialService;