import React from 'react';
import appointment from '../../../assets/images/doctor-small.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton'
import './Appointment.css';

const Appointment = () => {
  return (
    <section className='py-10'>
      <div className="appointment mt-10 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <img className='mt-[-100px] hidden md:block' src={appointment} alt='' />
          <div className='p-2 sm:p-5 md:p-10 py-10 text-white'>
            <h3 className="text-primary text-lg font-bold">Appointment</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold">Make an appointment Today</h2>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;