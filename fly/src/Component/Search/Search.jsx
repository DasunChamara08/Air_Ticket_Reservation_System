import React, { useState, useEffect } from 'react'; 
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Country options with flags
const countryOptions = [
  {
    value: 'Sri Lanka',
    label: 'Sri Lanka (CMB)',
    flag: 'lk',
  },
  {
    value: 'India',
    label: 'India (DEL)',
    flag: 'in',
  },
  {
    value: 'United Kingdom',
    label: 'United Kingdom (LHR)',
    flag: 'gb',
  },
  {
    value: 'United States',
    label: 'United States (JFK)',
    flag: 'us',
  },
  {
    value: 'Japan',
    label: 'Japan (HND)',
    flag: 'jp',
  },
];

// Function to show flag and country label
const formatOptionLabel = ({ label, flag }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img
      src={`https://flagcdn.com/w40/${flag}.png`}
      alt={flag}
      style={{ width: '20px', height: '15px' }}
    />
    <span>{label}</span>
  </div>
);

function Search() {
  const [tripType, setTripType] = useState('round');
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengerCount, setPassengerCount] = useState(1);
  const [travelClass, setTravelClass] = useState('economy');

  // Validation to prevent same origin and destination
  useEffect(() => {
    if (fromCountry && toCountry && fromCountry.value === toCountry.value) {
      alert("Departure and destination can't be the same.");
      setToCountry(null);
    }
  }, [fromCountry, toCountry]);

  // Button enable/disable logic
  const isSearchDisabled =
    !fromCountry ||
    !toCountry ||
    !departureDate ||
    (tripType === 'round' && !returnDate);

  return (
    <div className="searchContainer">
      <div className="tripType">
        <label>
          <input
            type="radio"
            name="tripType"
            value="round"
            checked={tripType === 'round'}
            onChange={() => setTripType('round')}
          />
          Round Trip
        </label>
        <label>
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={tripType === 'oneway'}
            onChange={() => setTripType('oneway')}
          />
          One Way
        </label>
      </div>

      <div className="row">
        <div className="inputBox">
          <label>From</label>
          <Select
            options={countryOptions}
            value={fromCountry}
            onChange={setFromCountry}
            placeholder="Select Country"
            formatOptionLabel={formatOptionLabel}
          />
        </div>

        <div className="inputBox">
          <label>To</label>
          <Select
            options={countryOptions}
            value={toCountry}
            onChange={setToCountry}
            placeholder="Select Country"
            formatOptionLabel={formatOptionLabel}
          />
        </div>
      </div>

      <div className="row">
        <div className="inputBox">
          <label>Departure Date</label>
          <DatePicker
            selected={departureDate}
            onChange={setDepartureDate}
            placeholderText="Select date"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>

        {tripType === 'round' && (
          <div className="inputBox">
            <label>Return Date</label>
            <DatePicker
              selected={returnDate}
              onChange={setReturnDate}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
              minDate={departureDate || new Date()}
            />
          </div>
        )}
      </div>

      <div className="row">
        <div className="inputBox">
          <label>Passengers</label>
          <input
            type="number"
            min="1"
            value={passengerCount}
            onChange={(e) => setPassengerCount(Number(e.target.value))}
          />
        </div>

        <div className="inputBox">
          <label>Class</label>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </div>
      </div>

      <button className="searchBtn" disabled={isSearchDisabled}>
        Search Flight
      </button>
    </div>
  );
}

export default Search;
