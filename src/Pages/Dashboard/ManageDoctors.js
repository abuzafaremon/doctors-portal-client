import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery(['doctors'], () => fetch('http://localhost:5000/doctors', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      Manage doctors:{doctors.length}
    </div>
  );
};

export default ManageDoctors;