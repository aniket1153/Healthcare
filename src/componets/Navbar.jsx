import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { MdMenu, MdClose, MdLogin } from "react-icons/md";
import SingnupIcon from "../icons/SingnupIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-[5rem] w-full bg-[#F5F6FF] flex items-center justify-between px-6 md:px-16 shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-[10rem] md:h-[10rem]" />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <NavLink to="/" className="hover:text-black">Home</NavLink>
        <NavLink to="/AboutUs" className="hover:text-black">About Us</NavLink>
        <NavLink to="/healthGuide" className="hover:text-black">Health Guide</NavLink>
        <NavLink to="/JobUpdates" className="hover:text-black">Job Updates</NavLink>
        <NavLink to="/news" className="hover:text-black">News</NavLink>
        <NavLink to="/courses" className="hover:text-black">Course</NavLink>
        <NavLink to="/contact" className="hover:text-black">Contact Us</NavLink>
      </div>

      {/* Profile Buttons */}
      <div className="hidden md:flex gap-4">
        {/* Signup */}
        <button
          onClick={() => navigate("/auth?step=signup")}
          className="flex items-center gap-3 border border-[#006E58] p-1 rounded-full hover:bg-[#e6f2ef] transition"
        >
          <span className="text-lg font-medium text-[#006E58]">Create An Account</span>
          <div className="flex items-center justify-center h-10 w-10 bg-[#006E58] rounded-full">
            <SingnupIcon className="text-white" />
          </div>
        </button>

        {/* Login */}
        <button
          onClick={() => navigate("/auth?step=login")}
          className="flex items-center gap-3 bg-[#006E58] p-1 rounded-full hover:bg-[#004d3d] transition"
        >
          <span className="text-lg font-medium text-white pl-2">Login</span>
          <div className="flex items-center justify-center h-10 w-10 bg-white rounded-full">
            <MdLogin className="text-[#006E58]" size={21} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[5rem] left-0 w-full bg-[#F5F6FF] shadow-md flex flex-col items-center py-6 space-y-6 md:hidden z-50">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/AboutUs" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/healthGuide" onClick={() => setIsOpen(false)}>Health Guide</NavLink>
          <NavLink to="/JobUpdates" onClick={() => setIsOpen(false)}>Job Updates</NavLink>
          <NavLink to="/news" onClick={() => setIsOpen(false)}>News</NavLink>
          <NavLink to="/courses" onClick={() => setIsOpen(false)}>Course</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>

          {/* Signup/Login in mobile */}
          <button
            onClick={() => { navigate("/auth?step=signup"); setIsOpen(false); }}
            className="flex items-center gap-3 border border-[#006E58] px-4 py-2 rounded-full"
          >
            <span className="text-[#006E58] font-medium">Create An Account</span>
            <SingnupIcon className="text-[#006E58]" />
          </button>
          <button
            onClick={() => { navigate("/auth?step=login"); setIsOpen(false); }}
            className="flex items-center gap-3 bg-[#006E58] text-white px-4 py-2 rounded-full"
          >
            <span className="font-medium">Login</span>
            <MdLogin className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
