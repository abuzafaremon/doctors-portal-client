import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Components/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import ServiceCard from './ServiceCard';

const AvailableService = ({ date }) => {
  const [treatment, setTreatment] = useState({});
  const formattedDate = format(date, 'PP');
  const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://dr-portal-server.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json())
  )
  if (isLoading) {
    return <Loading />
  }


  return (
    <section className='p-2 sm:p-5 md:p-10 py-10'>
      <h3 className="text-center text-primary text-xl">Available Services on {format(date, 'PP')}</h3>
      <p className="text-center">Please select a service</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
        {
          services?.map(service => <ServiceCard key={service._id} service={service}
            setTreatment={setTreatment}
          ></ServiceCard>)
        }
      </div>
      {
        treatment && <BookingModal
          key={treatment._id}
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      }
    </section>
  );
};

export default AvailableService;