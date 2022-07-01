import React from 'react';

const ServicesCard = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div class="card shadow-lg">
      <figure class="px-10 pt-10">
        <img src={img} height={115} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;