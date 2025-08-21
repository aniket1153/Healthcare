import React from 'react'
import img1 from "../assets/Register.jpg"
import { FaChevronRight } from 'react-icons/fa'

const Register = () => {
  return (
    <div className=" p-6 sm:p-10 lg:p-15">
      {/* Flex: column on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-25">
        {/* Image */}
       

        {/* Text Content */}
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-semibold">Register as a</h1>
          <h1 className="text-3xl lg:text-4xl font-semibold">Healthcare Provider</h1>

          <div className="text-base lg:text-md pt-4 space-y-1">
            <p>Join our network and reach thousands of people searching for trusted </p>
            <p>healthcare services </p>
     
          </div>

          <div className="text-base lg:text-md pt-4 space-y-1">
            <p>Whether you're a doctor, nurse, therapist, or clinic this is your opportunity to  </p>
            <p>expand your reach, grow your reputation, and simplify your patient . </p>
            <p>engagement with digital tools built for today’s care providers..</p>
          </div>

          {/* Button */}
          <div className="pt-6">
            <button className="flex items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 bg-[#006E58] text-white rounded-full hover:bg-[#02483a] transition mx-auto lg:mx-0 cursor-pointer">
              <span className="font-medium">Register Now</span>
              <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full">
                <FaChevronRight />
              </div>
            </button>
          </div>
        </div>
         <div className="flex justify-center lg:justify-start">
          <img 
            src={img1} 
            alt="What we do" 
            className="w-full max-w-[31rem] h-auto object-cover rounded-lg shadow-md" 
          />
        </div>
      </div>
    </div>
  )
}

export default Register
