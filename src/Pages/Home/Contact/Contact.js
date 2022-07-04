import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact' className='contact p-2 sm:p-5 md:p-10 py-10'>
      <h3 className="text-primary text-lg font-bold text-center">Contact Us</h3>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white text-center">Stay connected with us</h1>
      <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <input type="email" placeholder="Email Address" className="input input-bordered" />
            </div>
            <div className="form-control">
              <input type="text" placeholder="Subject" className="input input-bordered" />
            </div>
            <div className="form-control">
              <textarea placeholder="Your Message" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;