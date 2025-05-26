import React from "react";

// This component is rendered when admin logs in
const AdminPanel = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome, Admin!</h1>
      <p>This is your Admin Panel.</p>

      {/* Add your admin functionalities here */}
      <div style={{ marginTop: "2rem" }}>
        <button>Manage Flights</button>
        <button>View Bookings</button>
        <button>Post News / Announcements</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default AdminPanel;
