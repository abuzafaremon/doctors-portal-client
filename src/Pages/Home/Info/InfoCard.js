import React from 'react';

const InfoCard = ({ img, cardTitle, description, bgClass }) => {
  return (
    <div className={`card lg:card-side shadow-lg px-3 py-6 ${bgClass}`}>
      <figure><img width={86} height={86} src={img} alt="Album" /></figure>
      <div className="card-body text-white text-center lg:text-left">
        <h2 className="text-xl font-bold">{cardTitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;