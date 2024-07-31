import React from 'react';
import '../App.css';

const BookingPopup = ({ selectedSeats, onConfirm, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Confirm Booking</h3>
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
        <button className="popup-button" onClick={onConfirm}>Confirm Booking</button>
        <button className="popup-button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default BookingPopup;
