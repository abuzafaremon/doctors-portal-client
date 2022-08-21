import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card shadow hover:shadow-lg">
      <div className="card-body justify-center items-center">
        <h2 className="text-primary text-xl font-bold">{name}</h2>
        <p>
          {
            slots.length ? <span>{slots[0]}</span> : <span className='text-red-600'>No Slots Available</span>
          }
        </p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <p className="text-sm font-bold text-secondary">Price: ${price}</p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary'
            disabled={slots.length === 0}>Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;