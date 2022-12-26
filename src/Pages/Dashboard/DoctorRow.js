import React from 'react';
import swal from 'sweetalert';


const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, specialty, img, email } = doctor;
  const handleDelete = email => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`https://doctors-portal-server-production-9169.up.railway.app//doctor/${email}`, {
            method: 'DELETE',
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount) {
                swal(`Doctor: ${name} is deleted`, {
                  icon: "success",
                });
                refetch();
              }
            })
        } else {
          swal("Your Doctor is safe!");
        }
      });

  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={img} alt='' />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button title='Delete' onClick={() => handleDelete(email)} className="btn btn-circle btn-sm btn-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;