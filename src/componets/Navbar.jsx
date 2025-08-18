import React from 'react'
import logo from "../assets/Logo.png"
import { FaUserCircle } from "react-icons/fa";
import IconNavbar from '../icons/IconNavbar';

const Navbar = () => {
  return (
    <div className="h-[5rem] w-full bg-[#F5F6FF] flex items-center justify-between px-16 shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="h-[10rem]" />
        </a>
      </div>

      {/* Menu */}
      <div className="flex space-x-10 text-gray-600 font-medium">
        <a href="/" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">About Us</a>
        <a href="#" className="hover:text-black">Health Guide</a>
        <a href="#" className="hover:text-black">Job Updates</a>
        <a href="#" className="hover:text-black">News</a>
        <a href="#" className="hover:text-black">Course</a>
        <a href="#" className="hover:text-black">Contact Us</a>
      </div>

      {/* Profile */}
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-lg">Your Name</span>
        <div className="bg-[#0A7A6F] text-white rounded-full p-3">
          <IconNavbar  />
        </div>
      </div>

    </div>
  )
}

export default Navbar
