import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import bg from '../../../assets/images/appointment.png';
import { FcGoogle } from 'react-icons/fc';
import Loading from '../../../Components/Loading/Loading';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
    reset();
  }

  if (user || gUser) {
    navigate('/');
  }
  if (loading || gLoading) {
    return <Loading />
  }
  let errorElement;
  if (error || gError) {
    errorElement = <p className='text-red-500'>{error?.message || gError?.message}</p>
  }
  const forgotPassword = () => {

  }
  return (
    <section className='p-2 sm:p-5 md:p-10 py-10'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl">
        <div className="card-body">
          <h3 className="text-primary font-bold text-lg text-center border-b-2 border-t-2 border-primary rounded-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className=''>
            <div className="form-control">
              <label htmlFor="" className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input placeholder='Email' className='input input-bordered' {...register("email", { required: true })} />
            </div>
            <div className="form-control">
              <label htmlFor="" className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input placeholder='Password' className='input input-bordered' type="password" {...register("password", { required: true, minLength: 6 })} />
              <label onClick={forgotPassword} className="label cursor-pointer">
                <span className='label-text-alt text-primary'>Forgot Password?</span>
              </label>
            </div>
            {errorElement}
            <div className="form-control mt-5">
              <input className='btn' type="submit" value='Login' />
              <p className='text-sm text-center mt-2 text-white'>New to Doctors Portal? <Link to='/register' className='text-primary'>Create new account</Link></p>
            </div>
          </form>
          <div className="divider text-white">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary gap-2 hover:btn-primary hover:bg-gradient-to-r from-primary to-secondary"><span>Continue With</span><span className='flex items-center'><FcGoogle className='w-6 h-6'></FcGoogle><span className='text-red-500'>o</span><span className='text-yellow-500'>o</span><span className='text-blue-500'>g</span>le</span></button>
        </div>
      </div>
    </section>
  );
};

export default Login;