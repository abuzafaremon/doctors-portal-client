import React from 'react';

const ReviewsCard = ({ review }) => {
  const { text, img, name, from } = review;
  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <p>{text}</p>
        <div className="flex items-center gap-3 pt-3">
          <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src={img} alt={name} />
          </div>
          <div className="">
            <h2 className="card-title">{name}</h2>
            <p>{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;