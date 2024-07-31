import React from 'react';
import { seatPricing } from '../data';

const BookingForm = ({ selectedShow, availableSeats, bookSeats, selectedSeats }) => {
  const handleBook = () => {
    const cost = selectedSeats.reduce((acc, seat) => acc + seatPricing[seat.charAt(0)], 0);
    bookSeats(selectedSeats, cost); 
  };

  return (
    <div>
      <h3>Book Seats for Show {selectedShow}</h3>
      {selectedSeats.length > 0 ? (
        <div>
          <p>Selected Seats: {selectedSeats.join(', ')}</p>
          <button onClick={handleBook}>Confirm Booking</button>
        </div>
      ) : (
        <p>No seats selected.</p>
      )}
    </div>
  );
};

export default BookingForm;

