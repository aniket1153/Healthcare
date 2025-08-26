import React, { useState } from 'react'; 
import img1 from "../assets/JobUpdate.jpg";
import Breadcrumbs from '../componets/Breadcrumbs';
import Icon1 from "../assets/JobIcon1.png";
import Icon2 from "../assets/JobIcon2.png";
import { FaArrowLeft, FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { FiUsers, FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const JobUpdates = () => {
  const jobs = [
    {
      id: 1,
      img: Icon1,
      title: "Senior Resident - Physiology",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      vacancies: 9,
      salary: "2-3.5 Lacs P.A.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 2,
      img: Icon2,
      title: "Medical Officer",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      vacancies: 9,
      salary: "2-3.5 Lacs P.A.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 3,
      img: Icon1,
      title: "Senior Resident - Physiology",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      vacancies: 9,
      salary: "2-3.5 Lacs P.A.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 4,
      img: Icon2,
      title: "Medical Officer",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      vacancies: 9,
      salary: "2-3.5 Lacs P.A.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 5,
      img: Icon1,
      title: "Senior Resident - Physiology",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      vacancies: 9,
      salary: "2-3.5 Lacs P.A.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 6,
      img: Icon2,
      title: "Medical Officer",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      vacancies: 9,
      salary: "2-3.5 Lacs P.A.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 7,
      img: Icon1,
      title: "Senior Resident - Physiology",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      vacancies: 9,
      salary: "2-3.5 Lacs P.A.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 8,
      img: Icon2,
      title: "Medical Officer",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      vacancies: 9,
      salary: "2-3.5 Lacs P.A.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Show 4 cards per page for better responsiveness
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  const navigate =useNavigate();

  const handleApply =()=>{
    navigate("/JobApplication", { state: jobs });
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <div className='flex p-8 lg:p-15 pl-8 lg:pl-42'>
        <Breadcrumbs/>
      </div>

      {/* Banner */}
      <div className="w-full p-5">
        <div className="flex justify-center">
          <img
            src={img1}
            className="h-[15rem] sm:h-[25rem] lg:h-[30rem] w-full lg:max-w-[85%] rounded-xl object-cover"
            alt=""
          />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold p-2">Job Updates</h1>
        <p className="text-center text-md font-normal text-gray-600">
          Explore roles in hospitals, clinics, labs, and health tech companies.
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 md:p-27 ">
        {currentJobs.map((job) => (
          <div key={job.id}>
            <div className="bg-[#F5F6FF] w-full rounded-lg p-5 shadow-sm hover:shadow-md transition">
              {/* Icon */}
              <div className="h-14 w-14 rounded-full bg-white p-3 mb-3">
                <img src={job.img} className="w-8 h-8" alt="" />
              </div>

              {/* Title + Desc */}
              <h1 className="text-xl sm:text-2xl font-medium">{job.title}</h1>
              <p className="text-sm sm:text-md text-gray-600 mt-2">{job.description}</p>

              {/* Divider */}
              <hr className="border-t border-gray-200 my-4" />

              {/* Details with Icons */}
              <div className="text-gray-600 text-sm my-4 space-y-2">
                <div className="flex items-center gap-2">
                  <FiUsers className="text-gray-500" /> Vacancies: {job.vacancies}
                </div>
                <div className="flex items-center gap-2">
                  <FiBriefcase className="text-gray-500" /> {job.salary}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-gray-500" /> {job.location}
                  </div>
                  <button onClick={() => handleApply(jobs)} className="flex items-center gap-2 h-10 sm:h-12 px-5 sm:px-8 bg-[#006E58] text-white rounded-full hover:bg-[#014134] transition">
                    <span className="font-medium text-sm sm:text-base">Apply now</span>
                    <div className="bg-white text-black h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full">
                      <FaChevronRight />
                    </div>
                  </button>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-t border-gray-200 my-4" />

              {/* Footer dates with icons */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 text-gray-400 text-xs">
                <div className="flex items-center gap-1">
                  <FiCalendar className="text-gray-400" /> Posted: {job.posted}
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar className="text-gray-400" /> Last Date: {job.lastDate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-12">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white transition ${
            currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-[#006E58] hover:bg-[#014134]"
          }`}
        >
          <FaArrowLeft />
        </button>

        <span className="font-medium text-[#006E58]">
           {currentPage} 
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white transition ${
            currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-[#006E58] hover:bg-[#014134]"
          }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default JobUpdates;
