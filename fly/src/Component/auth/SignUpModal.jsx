import React, { useState } from "react";
import axios from "axios";

// SignUpModal receives a 'close' function prop to close the modal when needed
const SignUpModal = ({ close }) => {
  // Form state for controlled inputs: name, email, password
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // Update form state when any input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission for signup
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // POST request to backend API to register user
      const response = await axios.post("http://localhost:5000/api/users/register" , form);

      alert("Registration successful!");
      console.log("User data:", response.data);

      // Close modal on success
      close();
    } catch (error) {
      // Extract error message safely
      const errorMessage =
        error.response?.data?.message || error.message || "Unknown error";
      alert("Registration failed: " + errorMessage);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
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
          minLength={6} // Add minimum password length for better validation
        />
        <button type="submit">Register</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default SignUpModal;
