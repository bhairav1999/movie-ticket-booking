import React, { useState } from "react";
import ShowSelector from "./components/ShowSelector";
import SeatDisplay from "./components/SeatDisplay";
import BookingPopup from "./components/BookingPopup";   
import BookingConfirmation from "./components/BookingConfirmation";
import Summary from "./components/Summary";
import { shows, seatPricing } from "./data"; 
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [selectedShow, setSelectedShow] = useState("");
  const [bookedSeats, setBookedSeats] = useState({});
  const [bookings, setBookings] = useState([]);
  const [lastBooking, setLastBooking] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false); 

  const bookSeats = (seats, cost) => {
    setBookedSeats((prev) => {
      const newBooked = { ...prev };
      newBooked[selectedShow] = newBooked[selectedShow]
        ? [...newBooked[selectedShow], ...seats]
        : seats;
      return newBooked;
    });

    const subtotal = cost;
    const serviceTax = subtotal * 0.14;
    const swachhBharatCess = subtotal * 0.005;
    const krishiKalyanCess = subtotal * 0.005;
    const total = subtotal + serviceTax + swachhBharatCess + krishiKalyanCess;

    const newBooking = {
      show: selectedShow,
      seats,
      subtotal,
      serviceTax,
      swachhBharatCess,
      krishiKalyanCess,
      total,
    };
    setBookings((prev) => [...prev, newBooking]);
    setLastBooking(newBooking);
    setSelectedSeats([]); 
  };

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(seat)) {
        return prevSelected.filter((s) => s !== seat); 
      } else {
        return [...prevSelected, seat]; 
      }
    });
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length > 0) {
      const cost = selectedSeats.reduce((acc, seat) => acc + seatPricing[seat.charAt(0)], 0);
      bookSeats(selectedSeats, cost); 
      setIsPopupVisible(false); 
    }
  };

  return (
    <div className="App">
      <Navbar/>
      <hr />
      <ShowSelector
        selectedShow={selectedShow}
        setSelectedShow={setSelectedShow}
      />
      {selectedShow && (
        <>
          <SeatDisplay
            show={`Show ${selectedShow} (${shows[selectedShow].audi})`}
            seats={shows[selectedShow].seats}
            bookedSeats={bookedSeats[selectedShow] || []}
            onSeatClick={handleSeatClick} 
            selectedSeats={selectedSeats} 
          />
          {selectedSeats.length > 0 && (
            <button className="confirm-booking" onClick={() => setIsPopupVisible(true)}>Confirm Booking</button> 
          )}
          {isPopupVisible && (
            <BookingPopup
              selectedSeats={selectedSeats}
              onConfirm={handleConfirmBooking} 
              onClose={() => setIsPopupVisible(false)} 
            />
          )}
          <BookingConfirmation booking={lastBooking} />
         
          <hr />
          <Summary bookings={bookings} />
        </>
      )}
     
    </div>
  );
}

export default App;

