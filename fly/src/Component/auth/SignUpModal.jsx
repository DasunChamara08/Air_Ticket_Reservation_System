import React, { useState } from "react";
import axios from "axios";

// SignUpModal handles user or admin registration
const SignUpModal = ({ close }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };

    // If special admin credentials, auto-assign admin role
    if (
      updatedForm.email === "adminaviationacticket@gmail.com" &&
      updatedForm.password === "AdminAC@IT"
    ) {
      updatedForm.role = "admin";
    } else {
      updatedForm.role = "user";
    }

    setForm(updatedForm);
  };

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

        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required minLength={6} />
        
        {/* Hidden input to submit user/admin role */}
        <input type="hidden" name="role" value={form.role} />

        <button type="submit">Register</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default SignUpModal;
