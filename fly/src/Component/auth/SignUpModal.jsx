import React, { useState } from "react";
import axios from "axios";

// SignUpModal registers only normal users (no admin)
const SignUpModal = ({ close }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user" // Force role as user
  });

  // Handle input updates
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle registration logic
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", form);
      alert("Registration successful!");
      close();
    } catch (error) {
      alert("Registration failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

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
          minLength={6}
        />

        {/* Hidden input to lock the role as 'user' */}
        <input type="hidden" name="role" value="user" />

        <button type="submit">Register</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default SignUpModal;
