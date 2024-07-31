
import React from 'react';

const Summary = ({ bookings }) => {
  const totalRevenue = bookings.reduce((acc, booking) => acc + booking.total, 0);
  const serviceTax = totalRevenue * 0.14;
  const swachhBharatCess = totalRevenue * 0.005;
  const krishiKalyanCess = totalRevenue * 0.005;

  return (
    <div>
      <h3>Total Sales</h3>
      <p>Revenue: Rs. {totalRevenue.toFixed(2)}</p>
      <p>Service Tax: Rs. {serviceTax.toFixed(2)}</p>
      <p>Swachh Bharat Cess: Rs. {swachhBharatCess.toFixed(2)}</p>
      <p>Krishi Kalyan Cess: Rs. {krishiKalyanCess.toFixed(2)}</p>
    </div>
  );
};

export default Summary;
