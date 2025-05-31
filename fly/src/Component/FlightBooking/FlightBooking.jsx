import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./FlightBooking.css";

function FlightBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;

  // State to hold multiple passengers data
  const [passengers, setPassengers] = useState([
    { firstName: "", lastName: "", dob: "", passportNumber: "", state: "", phoneNumber: "", email: "", passportSizePhoto: "" }
  ]);

  // Selected seats array
  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!flight) {
    return (
      <div className="no-flight-message">
        <p>No flight selected.</p>
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Search
        </button>
      </div>
    );
  }

  // Handle passenger data change
  function handlePassengerChange(index, e) {
    const { name, value } = e.target;
    const newPassengers = [...passengers];
    newPassengers[index][name] = value;
    setPassengers(newPassengers);
  }

  // Add a passenger form
  function addPassenger() {
    setPassengers([
      ...passengers,
      { firstName: "", lastName: "", dob: "", passportNumber: "", state: "", phoneNumber: "", email: "", passportSizePhoto: "" }
    ]);
  }

  // Remove a passenger form
  function removePassenger(index) {
    const newPassengers = passengers.filter((_, i) => i !== index);
    setPassengers(newPassengers);
  }

  // Handle seat selection (simplified example)
  function handleSeatChange(e) {
    // Assume user inputs seats as comma-separated string e.g. "12A,12B"
    const seats = e.target.value.split(",").map((seat) => seat.trim());
    setSelectedSeats(seats);
  }

//   async function handleBooking(e) {
//     e.preventDefault();

//     if (passengers.length !== selectedSeats.length) {
//       alert("Number of passengers and seats must match");
//       return;
//     }

//     try {
//       // Prepare bookingUsersData object as expected by backend
//       const bookingUsersData = {};
//       passengers.forEach((p, idx) => {
//         bookingUsersData[`passenger${idx + 1}`] = p;
//       });

//       // Call backend checkout session endpoint
//       const response = await axios.post(
//         `/api/flights/checkout-session/${flight._id}`,
//         { bookingUsersData, selectedSeats },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust auth header as per your auth method
//           },
//         }
//       );

//       if (response.data.success) {
//         const stripeSession = response.data.session;

//         // Redirect user to Stripe checkout
//         window.location.href = stripeSession.url;
//       } else {
//         alert("Failed to create checkout session");
//       }
//     } catch (error) {
//       console.error("Booking error:", error);
//       alert("An error occurred during booking.");
//     }
//   }

async function handleBooking(e) {
  e.preventDefault();

  if (passengers.length !== selectedSeats.length) {
    alert("Number of passengers and seats must match");
    return;
  }

  try {
    const bookingUsersData = {};
    passengers.forEach((p, idx) => {
      bookingUsersData[`passenger${idx + 1}`] = p;
    });

    // Full backend API URL here:
    const apiUrl = `http://localhost:5000/api/flights/checkout-session/${flight._id}`;

    const response = await axios.post(
      apiUrl,
      { bookingUsersData, selectedSeats },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Your auth token
        },
      }
    );

    if (response.data.success) {
      const stripeSession = response.data.session;
      window.location.href = stripeSession.url;
    } else {
      alert("Failed to create checkout session");
    }
  } catch (error) {
    console.error("Booking error:", error);
    alert("An error occurred during booking.");
  }
}


  return (
    <div className="flight-booking-container">
      <h2>Flight Booking for {flight.airline}</h2>
      <p><strong>From:</strong> {flight.from}</p>
      <p><strong>To:</strong> {flight.to}</p>
      <p><strong>Time:</strong> {flight.time}</p>
      <p><strong>Price per passenger:</strong> {flight.price}</p>

      <form className="booking-form" onSubmit={handleBooking}>
        <label>
          Select Seats (comma separated):
          <input
            type="text"
            value={selectedSeats.join(", ")}
            onChange={handleSeatChange}
            placeholder="e.g. 12A, 12B"
            required
          />
        </label>

        {passengers.map((passenger, index) => (
          <fieldset key={index} className="passenger-fieldset">
            <legend>Passenger {index + 1}</legend>
            <input
              type="text"
              name="firstName"
              value={passenger.firstName}
              onChange={(e) => handlePassengerChange(index, e)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={passenger.lastName}
              onChange={(e) => handlePassengerChange(index, e)}
              placeholder="Last Name"
              required
            />
            <input
              type="date"
              name="dob"
              value={passenger.dob}
              onChange={(e) => handlePassengerChange(index, e)}
              placeholder="Date of Birth"
              required
            />
            <input
              type="text"
              name="passportNumber"
              value={passenger.passportNumber}
              onChange={(e) => handlePassengerChange(index, e)}
              placeholder="Passport Number"
              required
            />
            <input
              type="text"
              name="state"
              value={passenger.state}
              onChange={(e) => handlePassengerChange(index, e)}
              placeholder="State"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={passenger.phoneNumber}
              onChange={(e) => handlePassengerChange(index, e)}
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="email"
              value={passenger.email}
              onChange={(e) => handlePassengerChange(index, e)}
              placeholder="Email"
              required
            />
            {/* For simplicity, passportSizePhoto can be handled later */}
            <button type="button" onClick={() => removePassenger(index)} disabled={passengers.length === 1}>
              Remove Passenger
            </button>
          </fieldset>
        ))}

        <button type="button" onClick={addPassenger}>
          Add Passenger
        </button>

        <button type="submit" className="book-button">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}

export default FlightBooking;




//Older Code --->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import './FlightBooking.css'; // Assuming you use the CSS from earlier or adjust accordingly

// function FlightBooking() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const flight = location.state?.flight;

//   // Sample seat map (A-F, 1-6 rows)
//   // We'll assume flight.bookedSeats is an array of seat ids already booked, e.g. ["A1", "B3"]
//   // If not provided, use empty array
//   const bookedSeats = flight?.bookedSeats || [];

//   // State to track selected seats
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const rows = [1, 2, 3, 4, 5, 6];
//   const cols = ['A', 'B', 'C', 'D', 'E', 'F'];

//   const toggleSeat = (seatId) => {
//     if (bookedSeats.includes(seatId)) return; // Can't select booked seat

//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   if (!flight) {
//     return (
//       <div className="no-flight-message">
//         <p>No flight selected.</p>
//         <button className="back-button" onClick={() => navigate('/')}>
//           Back to Search
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flight-booking-container">
//       <h2>Flight Booking</h2>
//       <p className="flight-detail"><strong>Airline:</strong> {flight.airline}</p>
//       <p className="flight-detail"><strong>From:</strong> {flight.from}</p>
//       <p className="flight-detail"><strong>To:</strong> {flight.to}</p>
//       <p className="flight-detail"><strong>Time:</strong> {flight.time}</p>
//       <p className="flight-detail"><strong>Price:</strong> {flight.price}</p>

//       <h3>Select Your Seats</h3>
//       <div className="seat-map">
//         {rows.map((row) => (
//           <div key={row} className="seat-row">
//             {cols.map((col) => {
//               const seatId = col + row;
//               const isBooked = bookedSeats.includes(seatId);
//               const isSelected = selectedSeats.includes(seatId);

//               return (
//                 <button
//                   key={seatId}
//                   className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
//                   disabled={isBooked}
//                   onClick={() => toggleSeat(seatId)}
//                   title={isBooked ? `Seat ${seatId} - Booked` : `Seat ${seatId}`}
//                 >
//                   {seatId}
//                 </button>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       {selectedSeats.length > 0 && (
//         <div className="selected-seats-summary">
//           <p>
//             Selected Seats: {selectedSeats.join(', ')}
//           </p>
//           {/* You can add a "Proceed to payment" button here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FlightBooking;


// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import './FlightBooking.css';

// function FlightBooking() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const flight = location.state?.flight;

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     passengers: 1,
//   });

//   const [bookingSuccess, setBookingSuccess] = useState(false);

//   if (!flight) {
//     return (
//       <div className="no-flight-message">
//         <p>No flight selected.</p>
//         <button className="back-button" onClick={() => navigate('/')}>
//           Back to Search
//         </button>
//       </div>
//     );
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === 'passengers' ? Number(value) : value,
//     }));
//   }

//   function handleBooking(e) {
//     e.preventDefault();
//     // Here you can add API call to book the flight, send formData and flight details to server

//     // For now, just simulate success:
//     setBookingSuccess(true);
//   }

//   return (
//     <div className="flight-booking-container">
//       <h2>Flight Booking</h2>
//       <p className="flight-detail"><strong>Airline:</strong> {flight.airline}</p>
//       <p className="flight-detail"><strong>From:</strong> {flight.from}</p>
//       <p className="flight-detail"><strong>To:</strong> {flight.to}</p>
//       <p className="flight-detail"><strong>Time:</strong> {flight.time}</p>
//       <p className="flight-detail"><strong>Price:</strong> {flight.price}</p>

//       {!bookingSuccess ? (
//         <form className="booking-form" onSubmit={handleBooking}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your full name"
//             />
//           </label>

//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Your email address"
//             />
//           </label>

//           <label>
//             Number of Passengers:
//             <input
//               type="number"
//               name="passengers"
//               min="1"
//               value={formData.passengers}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <button type="submit" className="book-button">
//             Book Now
//           </button>
//         </form>
//       ) : (
//         <div className="booking-confirmation">
//           <h3>Booking Confirmed!</h3>
//           <p>Thank you, {formData.name}. Your booking for {formData.passengers} passenger(s) on flight {flight.airline} from {flight.from} to {flight.to} has been received.</p>
//           <button className="back-button" onClick={() => navigate('/')}>
//             Back to Search
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FlightBooking;

