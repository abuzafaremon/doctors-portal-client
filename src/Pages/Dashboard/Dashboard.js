import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <section className='px-2 sm:px-5 md:px-10 py-2'>
      <label htmlFor="dashboard-menu" className="btn btn-primary drawer-button lg:hidden"><span className='mt-[-5px]' style={{ 'fontSize': '30px' }}>&#8667;</span></label>
      <div className="drawer drawer-mobile">
        <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
          <ul className="menu p-4 pl-0 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard/profile'>Profile</Link></li>
            <li><Link to='/dashboard/appointments'>Appointments</Link></li>
            <li><Link to='/dashboard/reviews'>Reviews</Link></li>
            <li><Link to='/dashboard/history'>History</Link></li>
            {admin && <>
              <li><Link to='/dashboard/users'>Users</Link></li>
              <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
              <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
            </>}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;