import React from 'react';

const Loading = () => {
  return (
    <section className='py-52 text-center'>
      <span className='block text-2xl font-bold'>Loading...</span>
      <progress className="progress w-56"></progress>
    </section>
  );
};

export default Loading;