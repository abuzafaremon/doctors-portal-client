import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return <Loading />
  }

  if (!user || !admin) {
    localStorage.removeItem('accessToken');
    signOut(auth);
    return <Navigate to='/dashboard'></Navigate>
  }
  return children;
};

export default RequireAdmin;