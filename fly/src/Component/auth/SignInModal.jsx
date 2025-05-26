import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// SignInModal handles user and admin login
const SignInModal = ({ close }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Update input values
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle login logic
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        form,
        { withCredentials: true }
      );

      alert("Login successful");

      const role = response.data.user.role;
      close(); // Close the modal

      // Redirect based on user role
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  // Placeholder for forgot password
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
