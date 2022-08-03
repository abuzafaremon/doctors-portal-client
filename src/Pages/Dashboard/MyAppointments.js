import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`https://dr-portal-server.herokuapp.com/booking?patient=${user?.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem('accessToken');
            signOut(auth);
            navigate('/dashboard');
          }
          return res.json()
        })
        .then(data => {

          setAppointments(data);
        })
    }
  }, [user])
  return (
    <div>
      <h2 className='text-2xl mb-5'>My Appointments: {appointments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
              appointments.map((a, index) => <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;