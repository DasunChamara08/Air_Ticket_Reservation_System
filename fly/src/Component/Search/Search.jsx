import React, { useState } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// List of countries for dropdown
const countryOptions = [
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'LK', label: 'Sri Lanka' },
  { value: 'IN', label: 'India' },
  { value: 'AU', label: 'Australia' },
];

function Search() {
  // State management
  const [tripType, setTripType] = useState('oneway'); // 'oneway' or 'round'
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState('economy');

  // Passenger control
  const incrementPassengers = () => setPassengers(p => p + 1);
  const decrementPassengers = () => setPassengers(p => (p > 1 ? p - 1 : 1));

  return (
    <div className="search container section">
      <div className="sectionContainer grid">

        {/* Trip Type Selection */}
        <div className="btns flex" style={{ gap: '1rem' }}>
          <label>
            <input
              type="radio"
              name="tripType" // Ensures radio buttons are grouped
              value="oneway"
              checked={tripType === 'oneway'}
              onChange={() => setTripType('oneway')}
            /> One Way
          </label>
          <label>
            <input
            name="tripType"
              type="radio"
              value="round"
              checked={tripType === 'round'}
              onChange={() => setTripType('round')}
            /> Round Trip
          </label>
        </div>

        {/* Search Form Inputs */}
        <div className="searchInputs flex" style={{ gap: '1rem', flexWrap: 'wrap' }}>

          {/* From Country */}
          <div className="singleInput" style={{ minWidth: '200px' }}>
            <h4><HiOutlineLocationMarker /> From</h4>
            <Select
              options={countryOptions}
              value={fromCountry}
              onChange={setFromCountry}
              placeholder="Select Country"
            />
          </div>

          {/* To Country */}
          <div className="singleInput" style={{ minWidth: '200px' }}>
            <h4><HiOutlineLocationMarker /> To</h4>
            <Select
              options={countryOptions}
              value={toCountry}
              onChange={setToCountry}
              placeholder="Select Country"
            />
          </div>

          {/* Departure Date */}
          <div className="singleInput" style={{ minWidth: '200px' }}>
            <h4><RxCalendar /> Departure</h4>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
              className="datepicker"
            />
          </div>

          {/* Return Date - Only show if round trip */}
          {tripType === 'round' && (
            <div className="singleInput" style={{ minWidth: '200px' }}>
              <h4><RxCalendar /> Return</h4>
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                placeholderText="Select date"
                dateFormat="dd/MM/yyyy"
                className="datepicker"
              />
            </div>
          )}

          {/* Passenger Count */}
          <div className="singleInput flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <RiAccountPinCircleLine className="icon" />
            <div className="texts">
              <h4>Passengers</h4>
              <div className="passengerControl flex" style={{ gap: '0.5rem', alignItems: 'center' }}>
                <button onClick={decrementPassengers}>-</button>
                <span>{passengers}</span>
                <button onClick={incrementPassengers}>+</button>
              </div>
            </div>
          </div>

          {/* Flight Class Selection */}
          <div className="btns flex" style={{ gap: '1rem' }}>
            <div
              className={`singleBtn ${flightClass === 'economy' ? 'active' : ''}`}
              onClick={() => setFlightClass('economy')}
            >
              Economy
            </div>
            <div
              className={`singleBtn ${flightClass === 'business' ? 'active' : ''}`}
              onClick={() => setFlightClass('business')}
            >
              Business
            </div>
          </div>

          {/* Search Button */}
          <button className="btn btnBlock flex" style={{ marginTop: '1rem' }}>
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
