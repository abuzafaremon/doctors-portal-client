import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import DoctorRow from './DoctorRow';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const ManageDoctors = () => {
  const navigate = useNavigate();
  const { data: doctors, isLoading, refetch } = useQuery(['doctors'], () => fetch('http://localhost:5000/doctors', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => {
    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem('accessToken');
      signOut(auth);
      navigate('/dashboard');
    }
    return res.json()
  }));

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Manage doctors</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              doctors.map((doctor, index) => <DoctorRow
                index={index}
                key={doctor._id}
                doctor={doctor}
                refetch={refetch}
              ></DoctorRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;