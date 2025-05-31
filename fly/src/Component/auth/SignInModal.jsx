// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignInModal = ({ close }) => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };




//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/api/users/login", form, { withCredentials: true });

//       alert("Login successful!");
//       close();

//       const { role } = response.data.user;

//       // Redirect to Admin dashboard if role is admin
//       if (role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       alert("Login failed: " + (err.response?.data?.message || err.message));
//     }
//   };

//   const handleForgotPassword = () => {
//     alert("Redirecting to Forgot Password (not yet implemented)");
//   };

//   return (
//     <div className="modal">
//       <form onSubmit={handleSignIn}>
//         <h3>Sign In</h3>

//         <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
//         <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />

//         <button type="submit">Login</button>
//         <button type="button" onClick={close}>Cancel</button>

//         <p>
//           <button
//             type="button"
//             onClick={handleForgotPassword}
//             style={{ background: "none", border: "none", color: "blue", textDecoration: "underline", cursor: "pointer" }}
//           >
//             Forgot Password?
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignInModal;


import React, { useState } from "react";
import axios from "axios";

const SignInModal = ({ close }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      const { token } = response.data;

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Call the close function from props to update Navbar
      close();
    } catch (err) {
      console.error("Login error:", err.response?.data?.message || err.message);
      alert("Login failed");
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>
        <button type="button" onClick={close}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SignInModal;
