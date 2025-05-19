import React, { useState } from "react";
import axios from "axios";

const SignUpModal = ({ close }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Force all signups to be users
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the registration API
      await axios.post("http://localhost:5173/api/users/register", form);
      alert("Registration successful!");
      close(); // Close the modal after success
    } catch (error) {
      // Show a friendly error message
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

        {/* Role selection removed to prevent admin sign-up from UI */}
        {/* Hidden input to keep role as 'user' */}
        <input type="hidden" name="role" value="user" />

        <button type="submit">Register</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default SignUpModal;
