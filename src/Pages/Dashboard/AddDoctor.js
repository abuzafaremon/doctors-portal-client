import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { data: services, isLoading } = useQuery(['services'], () => fetch(`https://doctors-portal-server-production-9169.up.railway.app/services`)
    .then(res => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem('accessToken');
        signOut(auth);
        navigate('/dashboard');
      }
      return res.json()
    })
  )

  const imageStorageKey = '0c32b85e7c7f5f33e690cbfdd6ab56ab';

  if (isLoading) {
    return <Loading />
  }

  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.image.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img
          }
          // send to data base
          fetch('https://doctors-portal-server-production-9169.up.railway.app/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                toast.success('Doctor Added Successfully');
                reset();
              }
              else {
                toast.error('Failed to add doctor')
              }
            })
        }
        console.log(result);
      })
  };
  return (
    <div className='w-full max-w-xs mx-auto'>
      <h2 className="text-2xl text-center">Add a Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input placeholder='Name' className='input input-bordered' {...register("name", {
            required: {
              value: true,
              message: 'Name is required'
            }
          })} />
          <label className="label">
            {errors?.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type='email' placeholder='Email' className='input input-bordered' {...register("email", {
            required: {
              value: true,
              message: 'email is required'
            },
            pattern: {
              value: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid Email'
            }
          })} />
          <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="" className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select {...register("specialty")} className="select select-secondary">
            {
              services.map(service => <option key={service._id}
                value={service.name}
              >{service.name}</option>)
            }
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Photo</span>
          </label>
          <input type='file' className='input input-bordered' {...register("image", {
            required: {
              value: true,
              message: 'Image is required'
            }
          })} />
          <label className="label">
            {errors?.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image?.message}</span>}
          </label>
        </div>
        <div className="form-control mt-2">
          <input className='btn' type="submit" value='Add' />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;