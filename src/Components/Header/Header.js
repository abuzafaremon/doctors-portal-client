import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
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
    <li><Link to='/login'>Login</Link></li>
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
        <Link to='/' className="normal-case text-2xl sm:text-3xl">Doctor's Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          {/* <li tabIndex="0">
              <a>
                Profile
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2">
                <li><a>Me</a></li>
                <li><a>Logout</a></li>
              </ul>
            </li> */}
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link to='' className="justify-between">
              Profile
            </Link>
          </li>
          <li><Link to=''>Settings</Link></li>
          <li><Link to=''>Logout</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;