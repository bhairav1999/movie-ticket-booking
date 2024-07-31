
import React from 'react';

const BookingConfirmation = ({ booking }) => {
  if (!booking) return null;

  const { show, seats, subtotal, serviceTax, swachhBharatCess, krishiKalyanCess, total } = booking;

  return (
    <div>
      <h3>Successfully Booked - Show {show}</h3>
      <p>Seats: {seats.join(', ')}</p>
      <p>Subtotal: Rs. {subtotal.toFixed(2)}</p>
      <p>Service Tax @14%: Rs. {serviceTax.toFixed(2)}</p>
      <p>Swachh Bharat Cess @0.5%: Rs. {swachhBharatCess.toFixed(2)}</p>
      <p>Krishi Kalyan Cess @0.5%: Rs. {krishiKalyanCess.toFixed(2)}</p>
      <p>Total: Rs. {total.toFixed(2)}</p>
    </div>
  );
};

export default BookingConfirmation;
