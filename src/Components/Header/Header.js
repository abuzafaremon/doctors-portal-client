import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  }
  const menuItems = <>
    <li><HashLink to='/home#top'>Home</HashLink></li>
    <li><Link to='/about'>About</Link></li>
    <li>
      <HashLink
        to="/home/#appointment"
      // etc...
      >Appointment</HashLink>
    </li>
    <li>
      <HashLink
        to="/home/#reviews"
      // etc...
      >Reviews</HashLink>
    </li>
    <li>
      <HashLink
        to="/home/#contact"
      // etc...
      >Contact Us</HashLink>
    </li>
  </>
  return (
    <header className="navbar sm:px-5 md:px-10 bg-base-100 flex justify-between items-center z-50 fixed border-b border-primary max-w-7xl">
      <div className="">
        <div className="dropdown pr-1 md:pr-0">
          <label tabIndex="0" className="lg:hidden cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="normal-case text-2xl sm:text-3xl"><span className='text-primary'>D</span>octor's <span className='text-secondary'>P</span>ortal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      {user ? <div className="dropdown dropdown-end">

        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
          {user?.photoURL ?
            <div className="w-10 rounded-full border border-primary">
              <img src={user?.photoURL && user.photoURL} alt={user?.displayName ? user.displayName.split(' ')[0] : 'Profile'} />
            </div> :
            <span className='uppercase'>{user?.displayName ? user.displayName.split(' ')[0] : 'Reload'}</span>}
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link to='/dashboard' className="justify-between">
              Dashboard
            </Link>
          </li>
          <li><Link to=''>Settings</Link></li>
          <li><Link onClick={logout} to=''>Logout</Link></li>
        </ul>
      </div> :
        <div className='btn-group btn-group-vertical'>
          <Link className='btn btn-sm btn-block' to='/login'>Login</Link>
          <Link className='btn btn-sm btn-block' to='/register'>Register</Link>
        </div>}
    </header>
  );
};

export default Header;