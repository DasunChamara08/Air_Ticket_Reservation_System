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



import React, { useState, useEffect } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import logo from '../../assets/Logo01.png';
import SignInModal from '../auth/SignInModal';
import SignUpModal from '../auth/SignUpModal';

const Navbar = () => {
  // State to control text size zoom levels
  const [textSize, setTextSize] = useState('md');

  // State to control showing modals
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Apply text zoom size when state changes
  useEffect(() => {
    document.body.classList.remove('zoom-sm', 'zoom-md', 'zoom-lg');
    document.body.classList.add(`zoom-${textSize}`);
  }, [textSize]);

  return (
    <header className="sri-navbar">
      {/* 🌐 Left: Logo */}
      <div className="logo-section">
        <img src={logo} className="logo-img" alt="SriLankan Airlines" />
        {/* You can add partner logos here if needed */}
        {/* <img src="/oneworld.png" alt="Oneworld Alliance" className="oneworld-img" /> */}
      </div>

      {/* 🧭 Center: Navigation Menu */}
      <ul className="nav-menu">
        <li>Home</li>
        <li>Search</li>
        <li>Subscribers</li>
        <li>Support</li>
      </ul>

      {/* 🎯 Right: Actions */}
      <div className="nav-actions">
        {/* 🔍 Search Icon */}
        <FaSearch className="icon" />

        {/* 🔠 Text Resize Controls */}
        <div className="text-resize">
          <span className="a-sm" onClick={() => setTextSize('sm')}>A</span>
          <span className="a-md" onClick={() => setTextSize('md')}>A</span>
          <span className="a-lg" onClick={() => setTextSize('lg')}>A</span>
        </div>

       {/* 🌐 Language Selector Dropdown */}
<div className="language-selector">
  <label htmlFor="country">Choose your country/region and language</label>
  <div className="language-controls">
    {/* Country Dropdown */}
    <select className="dropdown country-dropdown">
      <option value="lk">🇱🇰 Sri Lanka</option>
      <option value="jp">🇯🇵 Japan</option>
      <option value="kr">🇰🇷 South Korea</option>
      <option value="kw">🇰🇼 Kuwait</option>
      <option value="my">🇲🇾 Malaysia</option>
    </select>

    {/* Language Dropdown */}
    <select className="dropdown language-dropdown">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="jp">日本語</option>
      <option value="en-uk">English (UK)</option>
      <option value="en-us">English (US)</option>
    </select>

    {/* Go Button */}
    <button className="go-btn">Go</button>
  </div>
</div>



        {/* 👤 Login Buttons (You can wrap this in a dropdown later) */}
        <div className="login-buttons">
            <button
              onClick={() => setShowSignIn(true)}
              className="login-link"
            >
              Sign In
            </button>

            <button
              onClick={() => setShowSignUp(true)}
              className="login-link"
            >
              Sign Up
            </button>
          </div>    

      </div>

      {/* 📦 Sign In Modal */}
      {showSignIn && (
        <SignInModal close={() => setShowSignIn(false)} />
      )}

      {/* 📦 Sign Up Modal */}
      {showSignUp && (
        <SignUpModal close={() => setShowSignUp(false)} />
      )}
    </header>
  );
};

export default Navbar;

