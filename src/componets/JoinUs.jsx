import React from 'react'
import img1 from "../assets/Video.jpg"
import { FaChevronRight, FaPlay } from 'react-icons/fa'
const JoinUs = () => {
  return (
   <div>
     <div className='flex justify-center'>
      

      <div className=' relative w-full  max-w-[75%]  '>
        <img src={img1} alt=""  className='w-full h-[27rem] object-cover rounded-lg shadow-md' />
<div className='absolute inset-0  flex  items-center justify-center'>
<div className='bg-gray-300/80 text-white p-5  rounded-full shadow-lg group-hover:bg-[#006E58] group-hover:text-white transition'>
 <FaPlay size={24} />
</div>
</div>
      </div>
    
    </div>

<div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-8 w-[80%] mx-auto">
  {/* Left Section */}
  <div className="text-center lg:text-left max-w-xl">
    <h1 className="text-2xl lg:text-3xl font-bold">Join Us as an Associate</h1>
    <p className="mt-2 text-gray-700">
      Partner with us to build a healthier future together.
    </p>
  </div>

  {/* Right Section - Button */}
  <div>
    <button className="flex items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 bg-[#006E58] text-white rounded-full hover:bg-blue-600 transition">
      <span className="font-medium">Read More</span>
      <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full">
        <FaChevronRight />
      </div>
    </button>
  </div>
</div>

   </div>
  )
}

export default JoinUs
