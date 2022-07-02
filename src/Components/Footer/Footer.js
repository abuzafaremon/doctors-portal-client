import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footerBg p-2 sm:p-5 md:p-10 py-10'>
      <div className="footer p-5 md:p-10">
        <div>
          <h3 className='text-lg footer-title'>Services</h3>
          <Link className='link link-hover' to=''>Emergency Checkup</Link>
          <Link className='link link-hover' to=''>Monthly Checkup</Link>
          <Link className='link link-hover' to=''>Weekly Checkup</Link>
          <Link className='link link-hover' to=''>Deep Checkup</Link>
        </div>
        <div>
          <h3 className='text-lg footer-title'>Oral Health</h3>
          <Link className='link link-hover' to=''>Fluoride Treatment</Link>
          <Link className='link link-hover' to=''>Cavity Filling</Link>
          <Link className='link link-hover' to=''>Teeth Whitening</Link>
        </div>
        <div>
          <h3 className='text-lg footer-title'>Our Address</h3>
          <span>New York - 101010 Hudson</span>
        </div>
      </div>
      <div className="text-center mt-5">
        <span>Copyright {new Date().getFullYear()} | Doctors Portal | All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;