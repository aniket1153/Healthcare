import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaSearch, FaList, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // 👈 import navigation

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img1.jpg";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // 👈 for routing

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white py-10 flex justify-center">
      <div className="max-w-full w-full flex justify-center gap-10">

        {/* Carousel */}
        <div className="w-[55rem] ml-5">
          <Slider {...settings}>
            <div>
              <img src={img1} alt="slide1" className="rounded-xl w-full h-[23rem] object-cover" />
            </div>
            <div>
              <img src={img2} alt="slide2" className="rounded-xl w-full h-[23rem] object-cover" />
            </div>
            <div>
              <img src={img3} alt="slide3" className="rounded-xl w-full h-[23rem] object-cover" />
            </div>
          </Slider>
        </div>

        {/* Search Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm h-[23rem]">
          <h2 className="text-xl font-semibold mb-6 text-center">Search</h2>
          
          {/* Choose Category */}
          <div className="w-full max-w-sm relative" ref={dropdownRef}>
            {/* Trigger */}
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center border rounded-full px-4 py-2 mb-4 cursor-pointer bg-white shadow-sm hover:border-[#006E58] transition"
            >
              <FaList className="text-gray-400 mr-3" />
              <span className="w-full text-gray-600">Choose Category</span>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg p-2 animate-fadeIn z-10">
                <ul className="space-y-1 text-gray-700">
                  <li
                    onClick={() => {
                      navigate("/hospitals");  // 👈 redirect to HospitalList page
                      setOpen(false);
                    }}
                    className="px-3 py-2 rounded-md hover:bg-[#006E58] hover:text-white cursor-pointer"
                  >
                    Nearby Hospital List
                  </li>
                  <li className="px-3 py-2 rounded-md hover:bg-[#006E58] hover:text-white cursor-pointer">
                    Nearby Medicine Shop
                  </li>
                  <li className="px-3 py-2 rounded-md hover:bg-[#006E58] hover:text-white cursor-pointer">
                    Nearby Pathological / Diagnostic Lab
                  </li>
                  <li className="px-3 py-2 rounded-md hover:bg-[#006E58] hover:text-white cursor-pointer">
                    Nearby Blood Bank
                  </li>
                  <li className="px-3 py-2 rounded-md hover:bg-[#006E58] hover:text-white cursor-pointer">
                    Nearby Eldercare Organization
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Search By Name */}
          <div className="flex items-center border rounded-full px-4 py-2 mb-4">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search By Name"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Pincode */}
          <div className="flex items-center border rounded-full px-4 py-2 mb-6">
            <FaMapMarkerAlt className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Pincode"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button className="w-full flex items-center justify-center bg-[#006E58] text-white rounded-full py-3 font-medium hover:bg-[#005947] transition">
            Search
            <div className="h-8 w-8 rounded-full bg-white p-2 ml-2">
              <FaSearch className="text-black " />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
