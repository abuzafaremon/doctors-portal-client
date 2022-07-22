import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import auth from '../../../firebase.init';
import swal from 'sweetalert';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const location = useLocation();

  if (loading || sending) {
    return <Loading />
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
    return <section className='py-20'>
      <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body text-center">
          <h2 className="text-2xl text-center">Your Email is not verified!</h2>
          <p>Please verify your email address.</p>
          <div className="card-actions justify-end">
            <button onClick={async () => {
              await sendEmailVerification();
              swal('Your Verification Email Sent', "Check Your Email Inbox or Spam Folder", "success");
            }} className="btn btn-primary btn-block">Send Verification Email</button>
          </div>
        </div>
      </div>
    </section>
  }



  return children;
};

export default RequireAuth;