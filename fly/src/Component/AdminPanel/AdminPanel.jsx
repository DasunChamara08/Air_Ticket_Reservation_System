import React, { useEffect, useState } from "react";
import axios from "axios";


// AdminPanel component for admin-only functionality
const AdminPanel = () => {
  const [flights, setFlights] = useState([]);
  const [news, setNews] = useState("");

  // Fetch flight data from API
  const fetchFlights = async () => {
    const res = await axios.get("http://localhost:5173/api/flights");
    setFlights(res.data);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  // Delete a flight
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5173/api/flights/${id}`);
    fetchFlights(); // Refresh list
  };

  // Update announcement/news content
  const handleNewsUpdate = async () => {
    await axios.post("http://localhost:5173/api/news", { content: news });
    alert("News updated successfully!");
  };

  return (
    <div className="admin-dashboard">
      <h2>✈️ Admin Dashboard</h2>

      <div className="dashboard-section">
        {/* Flight creation section */}
        <div className="card">
          <h3>Create Flight</h3>
          <button className="btn" onClick={() => alert("Show create flight form")}>+ Add Flight</button>
        </div>

        {/* Flight list and management */}
        <div className="card">
          <h3>Manage Flights</h3>
          <ul>
            {flights.map((flight) => (
              <li key={flight._id} className="flight-item">
                <span>{flight.name} - {flight.time}</span>
                <div>
                  <button className="btn-small" onClick={() => alert("Edit flight logic")}>Edit</button>
                  <button className="btn-small danger" onClick={() => handleDelete(flight._id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* News and announcement section */}
        <div className="card">
          <h3>News / Special Announcement</h3>
          <textarea
            value={news}
            onChange={(e) => setNews(e.target.value)}
            rows="4"
            placeholder="Write news or announcements..."
          />
          <button className="btn" onClick={handleNewsUpdate}>Update News</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
