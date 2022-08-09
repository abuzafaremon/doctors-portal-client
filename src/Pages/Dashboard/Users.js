import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import UserRow from './UserRow';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();
  const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('https://dr-portal-server.herokuapp.com/users', {
    method: 'GET',
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
      <h2>All users: {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove Usee</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => <UserRow
                key={user._id}
                user={user}
                refetch={refetch}
              ></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;