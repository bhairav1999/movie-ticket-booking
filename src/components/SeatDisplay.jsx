import React from "react";
import "../App.css";

const SeatDisplay = ({ show, seats, bookedSeats, onSeatClick, selectedSeats }) => {
  const seatingCategories = {
    Platinum: { rows: ["A"], seats: [] },
    Gold: { rows: ["B"], seats: [] },
    Silver: { rows: ["C"], seats: [] },
  };

  
  seats.forEach((seat) => {
    const row = seat.charAt(0);
    if (row === "A") {
      seatingCategories.Platinum.seats.push(seat);
    } else if (row === "B") {
      seatingCategories.Gold.seats.push(seat);
    } else if (row === "C") {
      seatingCategories.Silver.seats.push(seat);
    }
  });

  return (
    <div className="seat-display">
      <h3>Available Seats for {show}</h3>
      <div className="seats-container">
        {Object.keys(seatingCategories).map((category) => (
          <div key={category} className="seating-category">
            <h4>{category} Seats</h4>
            <div className="seats-grid">
              {seatingCategories[category].seats.map((seat) => (
                <span
                  key={seat}
                  className={`seat ${
                    bookedSeats.includes(seat) ? "booked" : selectedSeats.includes(seat) ? "selected" : "available"
                  }`}
                  onClick={() => !bookedSeats.includes(seat) && onSeatClick(seat)} 
                >
                  {seat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatDisplay;
