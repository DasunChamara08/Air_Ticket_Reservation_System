import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [flights, setFlights] = useState([]);
  const [news, setNews] = useState("");

  const fetchFlights = async () => {
    const res = await axios.get("http://localhost:5173/api/flights");
    setFlights(res.data);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5173/api/flights/${id}`);
    fetchFlights();
  };

  const handleNewsUpdate = async () => {
    await axios.post("http://localhost:5173/api/news", { content: news });
    alert("News updated");
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      <section>
        <h3>Create Flight</h3>
        {/* You would build a full form here */}
        <button onClick={() => alert("Create form here")}>+ Add Flight</button>
      </section>

      <section>
        <h3>Manage Flights</h3>
        <ul>
          {flights.map((flight) => (
            <li key={flight._id}>
              {flight.name} - {flight.time}
              <button onClick={() => alert("Edit logic")}>Edit</button>
              <button onClick={() => handleDelete(flight._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Update News / Special Announcement</h3>
        <textarea value={news} onChange={(e) => setNews(e.target.value)} rows="4" />
        <button onClick={handleNewsUpdate}>Update</button>
      </section>
    </div>
  );
};

export default AdminPanel;
