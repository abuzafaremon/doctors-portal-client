import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = treatment;

  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment({});
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-primary">{name}</h3>
          <form onSubmit={handleBooking} className='flex flex-col gap-2 mt-5'>
            <div className="form-control">
              <input type="text" disabled value={format(date, 'PP')} className="input input-bordered" />
            </div>
            <select name='slot' className="select select-bordered w-full">
              {
                slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
              }
            </select>
            <div className="form-control">
              <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered" />
            </div>
            <div className="form-control">
              <input type="email" name='email' value={user?.email} disabled className="input input-bordered" />
            </div>
            <div className="form-control">
              <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered" />
            </div>
            <div className="form-control">
              <input type="submit" className="btn btn-primary btn-block uppercase bg-gradient-to-r from-primary to-secondary text-white font-bold" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;