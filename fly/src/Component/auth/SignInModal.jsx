import React, { useState } from 'react';
import axios from 'axios';

const SignInModal = ({ close }) => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users/login", form, { withCredentials: true });
      alert("Login successful");
      close();  // Close modal
    } catch (err) {
      alert("Login failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default SignInModal;
