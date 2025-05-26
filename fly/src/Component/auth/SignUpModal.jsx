import React, { useState } from "react";
import axios from "axios";

// SignUpModal handles sign-up for both user and admin (admin hidden, determined by email+password)
const SignUpModal = ({ close }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // default role is user
  });

  // Handle input updates
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Automatically set role to admin if specific credentials are entered
    const updatedForm = { ...form, [name]: value };

    // Check if credentials match admin
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

  // Handle registration logic
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", form);
      alert("Registration successful!");
      close();
    } catch (error) {
      alert(
        "Registration failed: " +
          (error.response?.data?.message || error.message)
      );
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

        {/* Hidden input to submit role (user or admin) */}
        <input type="hidden" name="role" value={form.role} />

        <button type="submit">Register</button>
        <button type="button" onClick={close}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SignUpModal;
