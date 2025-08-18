import React, { useState } from "react";
import { FaSearch, FaEnvelope, FaStar, FaList, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const hospitals = [
  { id: "A", name: "A Medical Hospital", location: "Kolkata, West Bengal", email: "yourmail@gmail.com", phone: "18003032588", rating: 4.8 },
  { id: "B", name: "B Medical Hospital", location: "Kolkata, West Bengal", email: "yourmail@gmail.com", phone: "18003032588", rating: 4.8 },
  { id: "C", name: "C Medical Hospital", location: "Kolkata, West Bengal", email: "yourmail@gmail.com", phone: "18003032588", rating: 4.8 },
  { id: "D", name: "D Medical Hospital", location: "Kolkata, West Bengal", email: "yourmail@gmail.com", phone: "18003032588", rating: 4.8 },
  { id: "A", name: "A Medical Hospital", location: "Kolkata, West Bengal", email: "yourmail@gmail.com", phone: "18003032588", rating: 4.8 },
  { id: "B", name: "B Medical Hospital", location: "Kolkata, West Bengal", email: "yourmail@gmail.com", phone: "18003032588", rating: 4.8 },
  { id: "C", name: "C Medical Hospital", location: "Kolkata, West Bengal", email: "yourmail@gmail.com", phone: "18003032588", rating: 4.8 },
  { id: "D", name: "D Medical Hospital", location: "Kolkata, West Bengal", email: "yourmail@gmail.com", phone: "18003032588", rating: 4.8 },
];

const HospitalList = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const hospitalsPerPage = 8;
  const navigate = useNavigate(); // ✅ initialize navigate

  const indexOfLast = currentPage * hospitalsPerPage;
  const indexOfFirst = indexOfLast - hospitalsPerPage;
  const currentHospitals = hospitals.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(hospitals.length / hospitalsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // ✅ Function to navigate directly
  const handleCardClick = () => {
    navigate("/hospital-details"); // navigate to HospitalDetails page
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-8">
      {/* Search Section */}
      <div className="bg-white shadow-md rounded-2xl w-full max-w-6xl p-6">
        <h2 className="text-lg font-semibold mb-5">Search</h2>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative w-full md:w-auto">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center border rounded-full px-4 py-2 cursor-pointer bg-white shadow-sm hover:border-[#006E58] transition"
            >
              <FaList className="text-gray-400 mr-3" />
              <span className="text-black">Nearby Hospital List</span>
            </div>
            {/* {open && (
              <div className="absolute mt-2 bg-white border rounded-lg shadow-lg p-2 z-10 w-72">
                <ul className="space-y-1 text-gray-700">
                  <li className="px-3 py-2 rounded-md bg-white text-black cursor-pointer shadow-sm">
                    Nearby Hospital List
                  </li>
                  <li className="px-3 py-2 rounded-md text-gray-400 cursor-not-allowed">
                    Nearby Medicine Shop
                  </li>
                  <li className="px-3 py-2 rounded-md text-gray-400 cursor-not-allowed">
                    Nearby Pathological / Diagnostic Lab
                  </li>
                  <li className="px-3 py-2 rounded-md text-gray-400 cursor-not-allowed">
                    Nearby Blood Bank
                  </li>
                  <li className="px-3 py-2 rounded-md text-gray-400 cursor-not-allowed">
                    Nearby Eldercare Organization
                  </li>
                </ul>
              </div>
            )} */}
          </div>
          <input type="text" placeholder="Search By Name" className="flex-1 px-4 py-2 border rounded-full outline-none" />
          <input type="text" placeholder="Pincode" className="flex-1 px-4 py-2 border rounded-full outline-none" />
          <button className="bg-[#006E58] text-white p-3 rounded-full flex items-center justify-center">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className="bg-white shadow-md rounded-2xl w-full max-w-6xl p-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentHospitals.map((hospital, index) => (
            <div
              key={`${hospital.id}-${index}`}
              onClick={handleCardClick} // ✅ Add onClick
              className="bg-[#F5F6FF] shadow rounded-2xl p-6 flex flex-col gap-3 relative cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-[#006E58] flex items-center justify-center font-semibold text-white">
                  {hospital.id}
                </div>
                <div className="bg-orange-400 text-white text-sm flex items-center gap-1 px-2 py-1 rounded-full">
                  <FaStar className="text-xs" /> {hospital.rating}
                </div>
              </div>

              <h3 className="text-lg font-semibold">{hospital.name}</h3>
              <p className="text-gray-600 flex items-center gap-2 text-sm">
                <FaLocationDot /> Location: <span className="font-medium">{hospital.location}</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2 text-sm">
                <FaEnvelope /> Email: <span className="font-medium">{hospital.email}</span>
              </p>
              <p className="text-gray-600 flex items-center gap-2 text-sm">
                <IoIosCall size={16} /> Phone: <span className="font-medium">{hospital.phone}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2 items-center">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? "bg-gray-200 text-gray-400" : "bg-[#006E58] text-white"}`}
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                currentPage === i + 1 ? "bg-[#006E58] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${currentPage === totalPages ? "bg-gray-200 text-gray-400" : "bg-[#006E58] text-white"}`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalList;
