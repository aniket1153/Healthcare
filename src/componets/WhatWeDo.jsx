import React from 'react'
import img1 from "../assets/ImgWhat.jpg"
import { FaChevronRight } from 'react-icons/fa'

const WhatWeDo = () => {
  return (
    <div className="bg-[#F5F6FF] p-6 sm:p-10 lg:p-15">
      {/* Flex: column on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-25">
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <img 
            src={img1} 
            alt="What we do" 
            className="w-full max-w-[31rem] h-auto object-cover rounded-lg shadow-md" 
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 text-center lg:text-left cursor-pointer">
          <h1 className="text-3xl lg:text-4xl font-semibold">What We Do</h1>

          <div className="text-base lg:text-md pt-4 space-y-1">
            <p>Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi.</p>
            <p>pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. </p>
            <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl .</p>
            <p>malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent.</p>
            <p>taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
          </div>

          <div className="text-base lg:text-md pt-4 space-y-1">
            <p>Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi </p>
            <p>pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. </p>
            <p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl.</p>
            <p>malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent</p>
            <p>taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
          </div>

          {/* Button */}
          <div className="pt-6">
            <button className="flex items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 bg-[#006E58] text-white rounded-full hover:bg-[#004739] transition mx-auto lg:mx-0  cursor-pointer">
              <span className="font-medium">Read More</span>
              <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full">
                <FaChevronRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
