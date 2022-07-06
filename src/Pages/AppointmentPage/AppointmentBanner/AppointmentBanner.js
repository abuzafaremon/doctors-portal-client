import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
      className='p-2 sm:p-5 md:p-10 py-10'>

      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center">
        <div className="bg-white shadow rounded-md">
          <DayPicker
            mode='single'
            selected={date}
            onSelect={setDate}
          />
        </div>
        <div>
          <img className="max-w-lg rounded-lg hover:shadow-lg" src={chair} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;