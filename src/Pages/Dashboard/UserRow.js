import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://doctors-portal-server-zafaremon20.vercel.app/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          swal('Failed', 'You have no rights to make an admin', 'error')
        }
        return res.json()
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an Admin", {
            theme: 'dark'
          })
        }
      })
  }
  return (
    <tr>
      <td>User Name</td>
      <td>{email}</td>
      <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : <button className="btn btn-xs cursor-default">Admin</button>}</td>
      <td><button className="btn btn-xs">Remove User</button></td>
    </tr>
  );
};

export default UserRow;