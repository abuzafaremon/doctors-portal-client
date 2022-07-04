import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BokkingModal';
import ServiceCard from './ServiceCard';

const AvailableService = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState({});
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <section className='p-2 sm:p-5 md:p-10 py-10'>
      <h3 className="text-center text-primary text-xl">Available Services on {format(date, 'PP')}</h3>
      <p className="text-center">Please select a service</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
        {
          services.map(service => <ServiceCard key={service._id} service={service}
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
        ></BookingModal>
      }
    </section>
  );
};

export default AvailableService;