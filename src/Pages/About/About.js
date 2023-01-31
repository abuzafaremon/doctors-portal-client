import React from 'react';

const About = () => {
  return (
    <div className='m-6 card max-w-md w-full shadow mx-auto'>
      <div className="card-body">
        <h2 className='text-2xl text-center'>About Doctors Portal</h2>
        <p>In this website people can create an account using Gmail and a password. After creating an account they need to verify their Gmail. People also create an account using their logged-in Gmail and don't need to verify Gmail.
          People take a doctor's appointment on a different date. They see their appointment list on the dashboard.
          Admin can make a user an admin. And admin Add a doctor to this website. And delete doctors if needed.
          Technology Used:
          React Js, JReact-Tailwind, DaisyUI, Node Js, Express Js, MongoDB, Firebase.</p>
      </div>
    </div>
  );
};

export default About;