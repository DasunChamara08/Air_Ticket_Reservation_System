// import React, { useState, useEffect } from 'react'; 
// import Select from 'react-select';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// // Country options with flags
// const countryOptions = [
//   {
//     value: 'Sri Lanka',
//     label: 'Sri Lanka (CMB)',
//     flag: 'lk',
//   },
//   {
//     value: 'India',
//     label: 'India (DEL)',
//     flag: 'in',
//   },
//   {
//     value: 'United Kingdom',
//     label: 'United Kingdom (LHR)',
//     flag: 'gb',
//   },
//   {
//     value: 'United States',
//     label: 'United States (JFK)',
//     flag: 'us',
//   },
//   {
//     value: 'Japan',
//     label: 'Japan (HND)',
//     flag: 'jp',
//   },
// ];

// // Function to show flag and country label
// const formatOptionLabel = ({ label, flag }) => (
//   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//     <img
//       src={`https://flagcdn.com/w40/${flag}.png`}
//       alt={flag}
//       style={{ width: '20px', height: '15px' }}
//     />
//     <span>{label}</span>
//   </div>
// );

// function Search() {
//   const [tripType, setTripType] = useState('round');
//   const [fromCountry, setFromCountry] = useState(null);
//   const [toCountry, setToCountry] = useState(null);
//   const [departureDate, setDepartureDate] = useState(null);
//   const [returnDate, setReturnDate] = useState(null);
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [travelClass, setTravelClass] = useState('economy');

//   // Validation to prevent same origin and destination
//   useEffect(() => {
//     if (fromCountry && toCountry && fromCountry.value === toCountry.value) {
//       alert("Departure and destination can't be the same.");
//       setToCountry(null);
//     }
//   }, [fromCountry, toCountry]);

//   // Button enable/disable logic
//   const isSearchDisabled =
//     !fromCountry ||
//     !toCountry ||
//     !departureDate ||
//     (tripType === 'round' && !returnDate);

//   return (
//     <div className="searchContainer">
//       <div className="tripType">
//         <label>
//           <input
//             type="radio"
//             name="tripType"
//             value="round"
//             checked={tripType === 'round'}
//             onChange={() => setTripType('round')}
//           />
//           Round Trip
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="tripType"
//             value="oneway"
//             checked={tripType === 'oneway'}
//             onChange={() => setTripType('oneway')}
//           />
//           One Way
//         </label>
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>From</label>
//           <Select
//             options={countryOptions}
//             value={fromCountry}
//             onChange={setFromCountry}
//             placeholder="Select Country"
//             formatOptionLabel={formatOptionLabel}
//           />
//         </div>

//         <div className="inputBox">
//           <label>To</label>
//           <Select
//             options={countryOptions}
//             value={toCountry}
//             onChange={setToCountry}
//             placeholder="Select Country"
//             formatOptionLabel={formatOptionLabel}
//           />
//         </div>
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>Departure Date</label>
//           <DatePicker
//             selected={departureDate}
//             onChange={setDepartureDate}
//             placeholderText="Select date"
//             dateFormat="dd/MM/yyyy"
//             minDate={new Date()}
//           />
//         </div>

//         {tripType === 'round' && (
//           <div className="inputBox">
//             <label>Return Date</label>
//             <DatePicker
//               selected={returnDate}
//               onChange={setReturnDate}
//               placeholderText="Select date"
//               dateFormat="dd/MM/yyyy"
//               minDate={departureDate || new Date()}
//             />
//           </div>
//         )}
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>Passengers</label>
//           <input
//             type="number"
//             min="1"
//             value={passengerCount}
//             onChange={(e) => setPassengerCount(Number(e.target.value))}
//           />
//         </div>

//         <div className="inputBox">
//           <label>Class</label>
//           <select
//             value={travelClass}
//             onChange={(e) => setTravelClass(e.target.value)}
//           >
//             <option value="economy">Economy</option>
//             <option value="business">Business</option>
//             <option value="first">First</option>
//           </select>
//         </div>
//       </div>

//       <button className="searchBtn" disabled={isSearchDisabled}>
//         Search Flight
//       </button>
//     </div>
//   );
// }

// export default Search;


import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const countryOptions = [
  { value: 'Sri Lanka', label: 'Sri Lanka (CMB)', flag: 'lk' },
  { value: 'India', label: 'India (DEL)', flag: 'in' },
  { value: 'United Kingdom', label: 'United Kingdom (LHR)', flag: 'gb' },
  { value: 'United States', label: 'United States (JFK)', flag: 'us' },
  { value: 'Japan', label: 'Japan (HND)', flag: 'jp' },
];

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
  const navigate = useNavigate();

  const [tripType, setTripType] = useState('round');
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengerCount, setPassengerCount] = useState(1);
  const [travelClass, setTravelClass] = useState('economy');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (fromCountry && toCountry && fromCountry.value === toCountry.value) {
      alert("Departure and destination can't be the same.");
      setToCountry(null);
    }
  }, [fromCountry, toCountry]);

  const isSearchDisabled =
    !fromCountry ||
    !toCountry ||
    !departureDate ||
    (tripType === 'round' && !returnDate);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/flights?from=${fromCountry.value}&to=${toCountry.value}`
      );
      const data = await response.json();
      setSearchResults(data);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const handleFlightClick = (flight) => {
    console.log('Clicked flight:', flight);
    navigate('/booking', { state: { flight } });
  };

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

      <button
        className="searchBtn"
        disabled={isSearchDisabled}
        onClick={handleSearch}
      >
        Search Flight
      </button>

      {showResults && (
        <div className="resultsContainer">
          <h3>Available Flights</h3>
          {searchResults.length > 0 ? (
            searchResults.map((flight) => (
              <div
                key={flight._id} // unique key fix
                className="flightCard"
                onClick={() => handleFlightClick(flight)}
                style={{ cursor: 'pointer' }}
              >
                <p>
                  <strong>Airline:</strong> {flight.airline}
                </p>
                <p>
                  <strong>From:</strong> {flight.from}
                </p>
                <p>
                  <strong>To:</strong> {flight.to}
                </p>
                <p>
                  <strong>Time:</strong> {flight.time}
                </p>
                <p>
                  <strong>Price:</strong> {flight.price}
                </p>
              </div>
            ))
          ) : (
            <p>No flights found for the selected route.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;



// import React, { useState, useEffect } from 'react'; 
// import Select from 'react-select';
// import DatePicker from 'react-datepicker';
// import { useNavigate } from 'react-router-dom';
// import 'react-datepicker/dist/react-datepicker.css';

// const countryOptions = [
//   { value: 'Sri Lanka', label: 'Sri Lanka (CMB)', flag: 'lk' },
//   { value: 'India', label: 'India (DEL)', flag: 'in' },
//   { value: 'United Kingdom', label: 'United Kingdom (LHR)', flag: 'gb' },
//   { value: 'United States', label: 'United States (JFK)', flag: 'us' },
//   { value: 'Japan', label: 'Japan (HND)', flag: 'jp' },
// ];

// const formatOptionLabel = ({ label, flag }) => (
//   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//     <img src={`https://flagcdn.com/w40/${flag}.png`} alt={flag} style={{ width: '20px', height: '15px' }} />
//     <span>{label}</span>
//   </div>
// );

// function Search() {
//   const navigate = useNavigate();

//   const [tripType, setTripType] = useState('round');
//   const [fromCountry, setFromCountry] = useState(null);
//   const [toCountry, setToCountry] = useState(null);
//   const [departureDate, setDepartureDate] = useState(null);
//   const [returnDate, setReturnDate] = useState(null);
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [travelClass, setTravelClass] = useState('economy');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (fromCountry && toCountry && fromCountry.value === toCountry.value) {
//       alert("Departure and destination can't be the same.");
//       setToCountry(null);
//     }
//   }, [fromCountry, toCountry]);

//   const isSearchDisabled =
//     !fromCountry ||
//     !toCountry ||
//     !departureDate ||
//     (tripType === 'round' && !returnDate);

//   const handleSearch = async () => {
//     setLoading(true);
//     setError(null);
//     setShowResults(false);
//     try {
//       const response = await fetch(
//         `/api/flights?from=${encodeURIComponent(fromCountry.value)}&to=${encodeURIComponent(toCountry.value)}`
//       );

//       if (!response.ok) {
//         throw new Error('Error fetching flights');
//       }

//       const flights = await response.json();
//       setSearchResults(flights);
//       setShowResults(true);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="searchContainer">
//       <div className="tripType">
//         <label>
//           <input
//             type="radio"
//             name="tripType"
//             value="round"
//             checked={tripType === 'round'}
//             onChange={() => setTripType('round')}
//           />
//           Round Trip
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="tripType"
//             value="oneway"
//             checked={tripType === 'oneway'}
//             onChange={() => setTripType('oneway')}
//           />
//           One Way
//         </label>
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>From</label>
//           <Select
//             options={countryOptions}
//             value={fromCountry}
//             onChange={setFromCountry}
//             placeholder="Select Country"
//             formatOptionLabel={formatOptionLabel}
//           />
//         </div>

//         <div className="inputBox">
//           <label>To</label>
//           <Select
//             options={countryOptions}
//             value={toCountry}
//             onChange={setToCountry}
//             placeholder="Select Country"
//             formatOptionLabel={formatOptionLabel}
//           />
//         </div>
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>Departure Date</label>
//           <DatePicker
//             selected={departureDate}
//             onChange={setDepartureDate}
//             placeholderText="Select date"
//             dateFormat="dd/MM/yyyy"
//             minDate={new Date()}
//           />
//         </div>

//         {tripType === 'round' && (
//           <div className="inputBox">
//             <label>Return Date</label>
//             <DatePicker
//               selected={returnDate}
//               onChange={setReturnDate}
//               placeholderText="Select date"
//               dateFormat="dd/MM/yyyy"
//               minDate={departureDate || new Date()}
//             />
//           </div>
//         )}
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>Passengers</label>
//           <input
//             type="number"
//             min="1"
//             value={passengerCount}
//             onChange={(e) => setPassengerCount(Number(e.target.value))}
//           />
//         </div>

//         <div className="inputBox">
//           <label>Class</label>
//           <select
//             value={travelClass}
//             onChange={(e) => setTravelClass(e.target.value)}
//           >
//             <option value="economy">Economy</option>
//             <option value="business">Business</option>
//             <option value="first">First</option>
//           </select>
//         </div>
//       </div>

//       <button
//         className="searchBtn"
//         disabled={isSearchDisabled || loading}
//         onClick={handleSearch}
//       >
//         {loading ? 'Searching...' : 'Search Flight'}
//       </button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {showResults && (
//         <div className="resultsContainer">
//           <h3>Available Flights</h3>
//           {searchResults.length > 0 ? (
//             searchResults.map((flight) => (
//               <div
//                 key={flight._id}
//                 className="flightCard"
//                 onClick={() => navigate(`/flight/${flight._id}`)}
//                 style={{
//                   cursor: 'pointer',
//                   border: '1px solid #ccc',
//                   padding: '10px',
//                   marginBottom: '10px',
//                 }}
//               >
//                 <p><strong>Airline:</strong> {flight.airline}</p>
//                 <p><strong>From:</strong> {flight.from}</p>
//                 <p><strong>To:</strong> {flight.to}</p>
//                 <p><strong>Time:</strong> {flight.time}</p>
//                 <p><strong>Price:</strong> {flight.price}</p>
//               </div>
//             ))
//           ) : (
//             <p>No flights found for the selected route.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;

// import React, { useState, useEffect } from 'react'; 
// import Select from 'react-select';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const countryOptions = [
//   { value: 'Sri Lanka', label: 'Sri Lanka (CMB)', flag: 'lk' },
//   { value: 'India', label: 'India (DEL)', flag: 'in' },
//   { value: 'United Kingdom', label: 'United Kingdom (LHR)', flag: 'gb' },
//   { value: 'United States', label: 'United States (JFK)', flag: 'us' },
//   { value: 'Japan', label: 'Japan (HND)', flag: 'jp' },
// ];

// const formatOptionLabel = ({ label, flag }) => (
//   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//     <img src={`https://flagcdn.com/w40/${flag}.png`} alt={flag} style={{ width: '20px', height: '15px' }} />
//     <span>{label}</span>
//   </div>
// );

// function Search() {
//   const [tripType, setTripType] = useState('round');
//   const [fromCountry, setFromCountry] = useState(null);
//   const [toCountry, setToCountry] = useState(null);
//   const [departureDate, setDepartureDate] = useState(null);
//   const [returnDate, setReturnDate] = useState(null);
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [travelClass, setTravelClass] = useState('economy');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (fromCountry && toCountry && fromCountry.value === toCountry.value) {
//       alert("Departure and destination can't be the same.");
//       setToCountry(null);
//     }
//   }, [fromCountry, toCountry]);

//   useEffect(() => {
//     if (returnDate && departureDate && returnDate < departureDate) {
//       setReturnDate(null);
//     }
//   }, [departureDate, returnDate]);

//   const isSearchDisabled =
//     !fromCountry ||
//     !toCountry ||
//     !departureDate ||
//     (tripType === 'round' && !returnDate) ||
//     loading;

//   const handleSearch = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const query = new URLSearchParams({
//         from: fromCountry.value,
//         to: toCountry.value,
//         departureDate: departureDate.toISOString(),
//         returnDate: returnDate ? returnDate.toISOString() : '',
//         passengers: passengerCount,
//         travelClass,
//       }).toString();

//       const response = await fetch(`http://localhost:5000/api/flights?${query}`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch flights');
//       }

//       const data = await response.json();
//       setSearchResults(data);
//       setShowResults(true);
//     } catch (err) {
//       setError(err.message);
//       setShowResults(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="searchContainer">
//       <div className="tripType">
//         <label>
//           <input
//             type="radio"
//             name="tripType"
//             value="round"
//             checked={tripType === 'round'}
//             onChange={() => setTripType('round')}
//           />
//           Round Trip
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="tripType"
//             value="oneway"
//             checked={tripType === 'oneway'}
//             onChange={() => setTripType('oneway')}
//           />
//           One Way
//         </label>
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>From</label>
//           <Select
//             options={countryOptions}
//             value={fromCountry}
//             onChange={setFromCountry}
//             placeholder="Select Country"
//             formatOptionLabel={formatOptionLabel}
//           />
//         </div>

//         <div className="inputBox">
//           <label>To</label>
//           <Select
//             options={countryOptions}
//             value={toCountry}
//             onChange={setToCountry}
//             placeholder="Select Country"
//             formatOptionLabel={formatOptionLabel}
//           />
//         </div>
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>Departure Date</label>
//           <DatePicker
//             selected={departureDate}
//             onChange={setDepartureDate}
//             placeholderText="Select date"
//             dateFormat="dd/MM/yyyy"
//             minDate={new Date()}
//           />
//         </div>

//         {tripType === 'round' && (
//           <div className="inputBox">
//             <label>Return Date</label>
//             <DatePicker
//               selected={returnDate}
//               onChange={setReturnDate}
//               placeholderText="Select date"
//               dateFormat="dd/MM/yyyy"
//               minDate={departureDate || new Date()}
//             />
//           </div>
//         )}
//       </div>

//       <div className="row">
//         <div className="inputBox">
//           <label>Passengers</label>
//           <input
//             type="number"
//             min="1"
//             value={passengerCount}
//             onChange={(e) => setPassengerCount(Number(e.target.value))}
//           />
//         </div>

//         <div className="inputBox">
//           <label>Class</label>
//           <select
//             value={travelClass}
//             onChange={(e) => setTravelClass(e.target.value)}
//           >
//             <option value="economy">Economy</option>
//             <option value="business">Business</option>
//             <option value="first">First</option>
//           </select>
//         </div>
//       </div>

//       <button
//         className="searchBtn"
//         disabled={isSearchDisabled}
//         onClick={handleSearch}
//       >
//         {loading ? 'Searching...' : 'Search Flight'}
//       </button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {loading && <p>Loading flights...</p>}

//       {showResults && !loading && (
//         <div className="resultsContainer">
//           <h3>Available Flights</h3>
//           {searchResults.length > 0 ? (
//             searchResults.map((flight) => (
//               <div key={flight.id} className="flightCard">
//                 <p><strong>Airline:</strong> {flight.airline}</p>
//                 <p><strong>From:</strong> {flight.from}</p>
//                 <p><strong>To:</strong> {flight.to}</p>
//                 <p><strong>Time:</strong> {flight.time}</p>
//                 <p><strong>Price:</strong> {flight.price}</p>
//               </div>
//             ))
//           ) : (
//             <p>No flights found for the selected route.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;
