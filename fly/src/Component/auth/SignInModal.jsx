import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for navigation

const SignInModal = ({ close }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5173/api/users/login", form, { withCredentials: true });

      alert("Login successful");

      const role = response.data.user.role;
      close();

      if (role === "admin") {
        navigate("/admin"); // Redirect to admin panel
      } else {
        navigate("/dashboard"); // Or any user page
      }
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  const handleForgotPassword = () => {
    alert("Redirecting to Forgot Password (to be implemented)");
    // navigate("/forgot-password");
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        
        <button type="submit">Login</button>
        <button type="button" onClick={close}>Cancel</button>

        <p>
          <button type="button" onClick={handleForgotPassword} style={{ background: "none", border: "none", color: "blue", textDecoration: "underline" }}>
            Forgot Password?
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignInModal;
