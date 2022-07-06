import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../../../assets/images/appointment.png';
import auth from '../../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import Loading from '../../../Components/Loading/Loading';

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
  };
  if (user || gUser) {
    navigate('/');
  }
  if (loading || gLoading || updating) {
    return <Loading />
  }
  let errorElement;
  if (error || gError || updateError) {
    return <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
  }

  return (
    <section className='p-2 sm:p-5 md:p-10 py-10 '
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <h3 className="text-primary font-bold text-lg text-center border-b-2 border-t-2 border-primary rounded-lg">Register</h3>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input placeholder='Email' className='input input-bordered' {...register("email", {
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
                <span className="label-text">Password</span>
              </label>
              <input placeholder='Set a Password' className='input input-bordered' type="password" {...register("password", {
                required: {
                  value: true,
                  message: 'Password is required'
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer'
                }
              })} />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {errorElement}
            <div className="form-control mt-5">
              <input className='btn' type="submit" value='Register' />
              <p className='text-sm text-center mt-2'>Already Have An Account? <Link to='/login' className='text-primary'>Please Login</Link></p>
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline gap-2 hover:btn-primary hover:bg-gradient-to-r from-primary to-secondary"><span>Continue With</span><span className='flex items-center'><FcGoogle className='w-6 h-6'></FcGoogle><span className='text-red-500'>o</span><span className='text-yellow-500'>o</span><span className='text-blue-500'>g</span>le</span></button>
        </div>
      </div>
    </section>
  );
};

export default Register;