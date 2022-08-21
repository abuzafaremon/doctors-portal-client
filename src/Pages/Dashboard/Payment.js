import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Components/Loading/Loading';

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  const { patientName, treatment, date, price } = appointment;
  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mb-5 mx-auto">
        <div class="card-body">
          <h2 class="card-title text-primary">Hello, {patientName}</h2>
          <h2>Please pay for {treatment}</h2>
          <p>your Appointment: <span className='text-secondary'>{date}</span></p>
          <p className="font-bold">Please pay: ${price}</p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title">Payment</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;