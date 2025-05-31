// import React, { useState, useEffect } from 'react';
// import { SiConsul } from "react-icons/si";
// import { BsPhoneVibrate } from "react-icons/bs";
// import { AiOutlineGlobal } from "react-icons/ai";
// import { CgMenuGridO } from "react-icons/cg";
// import logo from '../../assets/Logo01.png';
// import SignInModal from "../auth/SignInModal";
// import SignUpModal from '../auth/SignUpModal';


// const Navbar = () => {
//   const [active, setActive] = useState('navBarMenu');
//   const [navBg, setNavBg] = useState('navBarTwo');
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   const showNavBar = () => setActive('navBarMenu showNavBar');
//   const removeNavBar = () => setActive('navBarMenu');

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 10) {
//         setNavBg('navBarTwo navbar_with_Bg');
//       } else {
//         setNavBg('navBarTwo');
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="navBar flex">
//       <div className="navBarOne flex">
//         <div className="logoDiv">
//           <img src={logo} className="Logo" alt="Logo" />
//         </div>

//         <div className="langSupport flex">
//           <li className="flex"><AiOutlineGlobal /> Language</li>
//           <li className="flex"><BsPhoneVibrate /> Support</li>
//         </div>

//         <div className="none flex">
//           <li className="flex">Home</li>
//           <li className="flex"><AiOutlineGlobal /> Language</li>
//           <li className="flex"><BsPhoneVibrate /> Support</li>
//         </div>

//         <div className="atb flex">
//           <button className="authBtn" onClick={() => setShowSignIn(true)}>Sign In</button>
//           <button className="authBtn" onClick={() => setShowSignUp(true)}>Sign Up</button>
//         </div>
//       </div>

//       <div className={navBg}>
//         <div className={active}>
//           <ul className="menu flex">
//             <li onClick={removeNavBar} className="listItem">Home</li>
//             <li onClick={removeNavBar} className="listItem">Booking</li>
//             <li onClick={removeNavBar} className="listItem">About</li>
//             <li onClick={removeNavBar} className="listItem">Travel Info</li>
//           </ul>
//           <button onClick={removeNavBar} className="btn flex btnOne">Contact</button>
//         </div>

        

//         <button className="btn flex btnTwo">Contact</button>

//         <div onClick={showNavBar} className="toggleIcon">
//           <CgMenuGridO className="icon" />
//         </div>
//       </div>

//       {/* Modals */}
//       {showSignIn && <SignInModal close={() => setShowSignIn(false)} />}
//       {showSignUp && <SignUpModal close={() => setShowSignUp(false)} />}
//     </div>
//   );
// };

// export default Navbar;

// components/Navbar.jsx



import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from '../../assets/Logo01.png';
import SignInModal from '../auth/SignInModal';
import SignUpModal from '../auth/SignUpModal';

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <header className="sri-navbar">
      {/* Left: Logo */}
      <div className="logo-section">
        <img src={logo} className="logo-img" />
        {/* <img src="/oneworld.png" alt="Oneworld Alliance" className="oneworld-img" /> */}
      </div>

      {/* Center: Menu */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>Search</li>
        <li>Subscribers</li>
        <li>Support</li>
      </ul>

      {/* Right: Icons & Login */}
      <div className="nav-actions">
        <FaSearch className="icon" />
        <div className="text-resize">
          <span className="a-sm">A</span>
          <span className="a-md">A</span>
          <span className="a-lg">A</span>
        </div>
        <span className="lang-select">🇱🇰 EN ▾</span>

        {/* 🔽 Login Dropdown - Updated
        <div className="login-link relative group cursor-pointer">
          <FaUser className="icon" />
          <span>Login</span> */}

          {/* Hover Dropdown for Sign In / Sign Up */}
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded px-4 py-2 top-full right-0 z-50">
            <button
              onClick={() => setShowSignIn(true)}
              className="block text-left text-sm text-gray-800 hover:text-blue-600 w-full"
            >
              Sign In
            </button>
            <button
              onClick={() => setShowSignUp(true)}
              className="block text-left text-sm text-gray-800 hover:text-green-600 w-full"
            >
              Sign Up
            </button>
          </div>
        </div>
      

      {/* 🔽 Modals */}
      {showSignIn && (
        <SignInModal
          close={() => setShowSignIn(false)}
        />
      )}

      {showSignUp && (
        <SignUpModal
          close={() => setShowSignUp(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
