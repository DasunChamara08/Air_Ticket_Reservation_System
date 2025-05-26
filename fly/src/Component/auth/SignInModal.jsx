import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Handles both user and admin login logic
const SignInModal = ({ close }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Update email and password fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle sign-in
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Send login request
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        form,
        { withCredentials: true }
      );

      alert("Login successful");

      // Extract user info
      const { email, role } = response.data.user;

      close(); // Close modal after login

      // Redirect admin to admin panel
      if (
        email === "adminaviationacticket@gmail.com" &&
        role === "admin"
      ) {
        navigate("/admin"); // Redirect to AdminPanel.jsx route
      } else {
        navigate("/"); // Normal user redirect
      }
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  // Placeholder for forgot password (optional implementation)
  const handleForgotPassword = () => {
    alert("Redirecting to Forgot Password (to be implemented)");
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>
        <button type="button" onClick={close}>Cancel</button>

        <p>
          <button
            type="button"
            onClick={handleForgotPassword}
            style={{
              background: "none",
              border: "none",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignInModal;
