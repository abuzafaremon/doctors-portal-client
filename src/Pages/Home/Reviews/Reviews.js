import React from 'react';
import ReviewsCard from './ReviewsCard';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';

const Reviews = () => {
  const reviews = [
    { _id: 1, name: 'Winson Herry', from: 'California', img: people1, text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
    { _id: 2, name: 'Lara Winson', from: 'California', img: people2, text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
    { _id: 3, name: 'Angelina', from: 'California', img: people3, text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
  ]
  return (
    <section className='p-2 sm:p-5 md:p-10 py-10'>
      <div className="mb-5 flex justify-between items-center">
        <div>
          <h3 className='text-primary font-bold text-lg'>Testimonial</h3>
          <h1 className='text-2xl sm:text-3xl md:text-4xl'>What Our Patients Says</h1>
        </div>
        <img src={quote} className='w-24 sm:w-32 md:w-48' alt="" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
          reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
        }
      </div>
    </section>
  );
};

export default Reviews;