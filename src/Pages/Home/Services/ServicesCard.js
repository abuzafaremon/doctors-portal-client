import React from 'react';

const ServicesCard = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div className="card shadow-lg">
      <figure className="px-10 pt-10">
        <img src={img} height={115} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;