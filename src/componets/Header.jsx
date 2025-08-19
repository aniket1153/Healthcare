import React from "react";
import {
  MdOutlineAddIcCall,
  MdMyLocation,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import IconHeader from "../icons/IconHeader";

const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-wrap items-center sm:justify-between md:justify-around   py-4 px-8 gap-6">
        {/* Left Section: Phone & Location */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <div className="bg-[#006E58] h-8 w-8 flex items-center justify-center rounded-full text-white">
              <MdOutlineAddIcCall size={16} />
            </div>
            <span className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
              +91 8855664422
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <div className="bg-[#006E58] h-8 w-8 flex items-center justify-center rounded-full text-white">
              <MdMyLocation size={16} />
            </div>
            <select
              name="location"
              id="location"
              className="border-none outline-none text-sm sm:text-base md:text-lg bg-transparent font-semibold text-gray-800 cursor-pointer"
            >
              <option value="">Your Location</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center gap-8 sm:gap-8 justify-center">
          {/* Talk to Health Expert Button */}
          <button className="flex items-center gap-2 sm:gap-3 bg-[#006E58] text-white px-4 sm:px-5 py-1 rounded-full font-medium hover:bg-[#005144] transition text-sm sm:text-base">
            Talk to a Health Expert
            <div className="flex items-center justify-center bg-white w-6 h-6 sm:w-7 sm:h-7 rounded-full">
              <IconHeader />
            </div>
          </button>

          {/* Language Selector */}
          <div className="flex items-center gap-1 text-gray-400 cursor-pointer">
            <FaGlobe size={18} />
            <select className="border-none outline-none bg-transparent text-[#666666] cursor-pointer text-sm sm:text-base">
              <option>English</option>
              <option>हिन्दी</option>
              <option>मराठी</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border rounded-full px-2 py-1 text-gray-600 w-full sm:w-[13rem]">
            <IoSearchOutline size={18} className="mr-2" />
            <input
              type="text"
              placeholder="What Are You Looking For?"
              className="outline-none border-none bg-transparent flex-1 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
