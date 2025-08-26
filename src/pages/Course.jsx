import React, { useState } from 'react'; 
import img1 from "../assets/JobUpdate.jpg";
import Breadcrumbs from '../componets/Breadcrumbs';
import Img1 from "../assets/Course1img .jpg";
import Img2 from "../assets/Course2img .jpg";
import { FaArrowLeft, FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { FiUsers, FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { BsPersonSquare } from 'react-icons/bs';

const Course = () => {
  const jobs = [
    {
      id: 1,
      img: Img1,
      Posted: "29 Jul, 6:12 PM",
      title: "Launch Your Career in Medicine",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 2,
      img: Img2,
      Posted: "29 Jul, 6:12 PM",
      title: "Medical Officer",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 3,
      img: Img1,
      Posted: "29 Jul, 6:12 PM",
      title: "Senior Resident - Physiology",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 4,
      img: Img2,
      Posted: "29 Jul, 6:12 PM",
      title: "Medical Officer",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 5,
      img: Img1,
      Posted: "29 Jul, 6:12 PM",
      title: "Senior Resident - Physiology",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 6,
      img: Img2,
      Posted: "29 Jul, 6:12 PM",
      title: "Medical Officer",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 7,
      img: Img1,
      Posted: "29 Jul, 6:12 PM",
      title: "Senior Resident - Physiology",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      location: "Kolkata, West Bengal",
      posted: "20 Jul, 4:12 PM",
      lastDate: "29 Jul, 6:12 PM",
    },
    {
      id: 8,
      img: Img2,
      Posted: "29 Jul, 6:12 PM",
      title: "Medical Officer",
      description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    navigate("/CourseRegistrationForm", { state: jobs });
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <div className='flex p-8 lg:p-15 pl-8 lg:pl-38'>
        <Breadcrumbs/>
      </div>

      {/* Banner */}
      <div className="w-full p-5">
        <div className="flex justify-center">
          <img
            src={img1}
            className="h-[15rem] sm:h-[25rem] lg:h-[30rem] w-full lg:max-w-[87%] rounded-xl object-cover cursor-pointer"
            alt=""
          />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h1 className="text-center text-2xl sm:text-3xl font-semibold p-2">Course</h1>
        <p className="text-center text-md font-normal text-gray-600">
       Your first step toward a successful medical career
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-15 p-6 md:p-27 ">
        {currentJobs.map((job) => (
          <div key={job.id}>
                    
            <div className="bg-[#F5F6FF] w-full rounded-lg p-3 shadow-sm hover:shadow-md transition">
              {/* Icon */}
                <div className=''>
                     <img src={job.img} className="w-[55rem] h-[15rem] rounded-lg object-cover cursor-pointer" alt="" />
                </div>
              

              {/* Title + Desc */}
         <div className='p-2'>     
            
            
            <h1 className="text-xl sm:text-2xl font-medium sm:pt-0 md:pt-2">{job.title}</h1>

              <p className="text-sm sm:text-md text-gray-600 mt-2">{job.description}</p>

              {/* Divider */}
             

              {/* Details with Icons */}
              <div className="text-gray-600 text-sm my-4 space-y-1">
                <div className="flex items-center gap-2">
                  <BsPersonSquare className="text-gray-500" />Posted: {job.Posted}
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
              </div></div>

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

export default Course;
