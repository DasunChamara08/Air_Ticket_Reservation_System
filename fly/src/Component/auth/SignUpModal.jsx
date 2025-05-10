import React, { useState } from 'react';
import axios from 'axios';

const SignUpModal = ({ close }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users/register", form, { withCredentials: true });
      alert("Registration successful");
      close();
    } catch (err) {
      alert("Registration failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default SignUpModal;
