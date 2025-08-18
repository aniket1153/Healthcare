import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import img1 from "../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
           <img src={img1} alt="CareLinnk Logo" className="h-32" />
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center gap-8 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Health Guide</a></li>
            <li><a href="#" className="hover:text-white transition">Job Updates</a></li>
            <li><a href="#" className="hover:text-white transition">News</a></li>
            <li><a href="#" className="hover:text-white transition">Course</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 mt-6 pt-4 text-xs text-gray-400">
          <p>© 2025 CareLinnk. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
