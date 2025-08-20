import React, { useState } from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/Health.jpg"
import img2 from "../assets/HealthImg1.jpg"
import img3 from "../assets/HealthImg2.jpg"
import img4 from "../assets/HealthImg3.jpg"
import img5 from "../assets/HealthImg4.jpg"
import img6 from "../assets/HealthImg5.jpg"
import img7 from "../assets/HealthImg6.jpg"
import img8 from "../assets/HealthImg7.jpg"
import img9 from "../assets/HealthImg8.jpg"
import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Breadcrumbs from '../componets/Breadcrumbs'

const HealthGuide = () => {
  const guides = [
    { id: 1, img: img2, title: "Boosting Bone Health: Calcium & Vitamin D Explained", date: "29 Jul, 6:12 PM" },
    { id: 2, img: img3, title: "Beginner’s Guide to Mindful Eating", date: "29 Jul, 6:12 PM" },
    { id: 3, img: img4, title: "How Much Is Too Much?", date: "29 Jul, 6:12 PM" },
    { id: 4, img: img5, title: "Signs You Might Be Deficient in Key Nutrients", date: "29 Jul, 6:12 PM" },
    { id: 5, img: img6, title: "Hand Wash: Your First Line of Defense Against Germs", date: "29 Jul, 6:12 PM" },
    { id: 6, img: img7, title: "Foods That Naturally Lower Cholesterol", date: "29 Jul, 6:12 PM" },
    { id: 7, img: img8, title: "Healthy Alternatives to Junk Food", date: "29 Jul, 6:12 PM" },
    { id: 8, img: img9, title: "15 Minute Workouts You Can Stick To", date: "29 Jul, 6:12 PM" },
  ]

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const totalPages = Math.ceil(guides.length / itemsPerPage)

  // Get current items
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentGuides = guides.slice(startIndex, startIndex + itemsPerPage)

  // Handlers
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className="p-6 sm:p-1">
      {/* Top Banner Image */}
      <div className='flex p-15 pl-32'>
        <Breadcrumbs/>
      </div>
      <div className="flex justify-center p-1 mt-2">
        <img
          src={img1}
          className="h-[30rem] w-[85%] rounded-xl object-cover"
          alt="Health Banner"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Health Guide</h1>
      <p className="text-gray-600 text-center mt-2 mb-8">
        Easy to understand tips, expert backed advice, and everyday practices for a healthier life.
      </p>

      {/* Grid of Guides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center sm:p-1 lg:p-27">
        {currentGuides.map((guide) => (
          <Link to={`/health-guide/${guide.id}`} key={guide.id} className="w-full">
          <div
            key={guide.id}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer w-full max-w-[38rem] h-[25rem] group"
          >
            <img
              src={guide.img}
              alt={guide.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
              <p className="text-sm flex gap-1">
                <span className="text-lg pt-0.5"><FaCalendarAlt /></span>
                <span>{guide.date}</span>
              </p>
              <h3 className="text-md sm:text-lg font-semibold">{guide.title}</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center rounded-full text-white"
          style={{ backgroundColor: "#006E58" }}
        >
          <FaArrowLeft />
        </button>

        <span className="font-medium text-gray-700">
           {currentPage} 
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded-full text-white"
          style={{ backgroundColor: "#006E58" }}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default HealthGuide
