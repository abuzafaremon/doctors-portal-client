import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableService from './AvailableService/AvailableService';

const AppointmentPage = () => {

  const [date, setDate] = useState(new Date())
  return (
    <>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableService date={date}></AvailableService>
    </>
  );
};

export default AppointmentPage;