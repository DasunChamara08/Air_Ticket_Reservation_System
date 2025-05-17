import React, { useState } from "react";
import axios from "axios";

// SignInModal receives a 'close' function prop to close the modal
const SignInModal = ({ close }) => {
  // Form state for controlled inputs: email and password
  const [form, setForm] = useState({ email: "", password: "" });

  // Update form state when inputs change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission for login
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // POST request to backend login endpoint with credentials and cookie support
      await axios.post("/api/users/login", form, { withCredentials: true });

      alert("Login successful");

      // Close modal on successful login
      close();
    } catch (err) {
      // Show error message from backend or default
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default SignInModal;
