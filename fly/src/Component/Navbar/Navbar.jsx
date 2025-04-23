import React, { useState, useEffect } from 'react';

// Icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

// Image
import logo from '../../assets/Logo01.png';

const Navbar = () => {
  const [active, setActive] = useState('navBarMenu'); // Mobile menu toggle
  const [navBg, setNavBg] = useState('navBarTwo');    // Scroll-based background

  const showNavBar = () => setActive('navBarMenu showNavBar');
  const removeNavBar = () => setActive('navBarMenu');

  // Handle scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setNavBg('navBarTwo navbar_with_Bg');
      } else {
        setNavBg('navBarTwo');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navBar flex">
      
      {/* Top Navigation */}
      <div className="navBarOne flex">
        <div className="logoDiv">
          <img src={logo} className="Logo" alt="Logo" />
        </div>

        <div className="none flex">
          <li className="flex">Home</li>
          <li className="flex"><AiOutlineGlobal /> Language</li>
          <li className="flex"><BsPhoneVibrate /> Support</li>
        </div>

        <div className="atb flex">
          <button className="authBtn">Sign In</button>
          <button className="authBtn">Sign Up</button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className={navBg}>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">Booking</li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Travel Info</li>
          </ul>
          <button onClick={removeNavBar} className="btn flex btnOne">Contact</button>
        </div>

        <div className="langSupport flex">
          <li className="flex"><AiOutlineGlobal /> Language</li>
          <li className="flex"><BsPhoneVibrate /> Support</li>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
