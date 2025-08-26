import React from 'react'
import img1 from "../assets/About.jpg"
import img2 from "../assets/AboutUs1.jpg"
import img3 from "../assets/Register.jpg"
import { FaChevronRight, FaPlay } from 'react-icons/fa'
import img4 from "../assets/Video.jpg"
import Breadcrumbs from '../componets/Breadcrumbs'

const AboutUs = () => {
  return (
    <div>
       <div className='flex p-8 lg:p-15 pl-5 lg:pl-32'>
        <Breadcrumbs/>
      </div>
      <div className='w-full p-5'>
     <div className="flex justify-center">
           <img
             src={img1}
           className="h-[18rem] sm:h-[25rem] lg:h-[30rem] w-full lg:max-w-[89%] rounded-xl object-cover cursor-pointer"
             alt="Health Banner"
           />
         </div>


<div className='flex  flex-col gap-8 w-full pt-10 justify-center'>
   <div className='text-center flex flex-col gap-0.5'> <h1 className='text-3xl font-semibold pb-1    '>About Us</h1>
    <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
    <p>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
    <p>nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div className='text-center flex flex-col gap-0.5'> 
    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
    <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  </p>
    <p>proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
    </div>
</div>


      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-25 p-5 md:p-10 bg-[#F5F6FF]">
  {/* Left Side Image */}
  <div className="flex-shrink-0">
    <img
      className="h-[20rem] w-full md:h-[30rem] md:w-[31rem] object-cover rounded-lg shadow-lg"
      src={img2}
      alt="Vision and Mission"
    />
  </div>

  {/* Right Side Content */}
  <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
    {/* Vision Section */}
    <div>
      <h1 className="text-3xl md:text-4xl font-semibold pb-3 text-gray-800">Our Vision</h1>
      <p className="text-gray-600 leading-relaxed">
        Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
        duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus
        nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
        hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos.
      </p>
    </div>

    {/* Mission Section */}
    <div>
      <h1 className="text-3xl md:text-4xl font-semibold pb-3 text-gray-800">Our Mission</h1>
      <p className="text-gray-600 leading-relaxed">
        Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
        duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus
        nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
        hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos.
      </p>
    </div>
  </div>
</div>
<div className="p-6 sm:p-10 lg:p-16">
  {/* Flex: column on mobile, row on desktop */}
  <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20">
    
    {/* Text Content */}
    <div className="flex flex-col gap-4 text-center lg:text-left max-w-xl">
      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
        Register as a
      </h1>
      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
        Healthcare Provider
      </h1>

      <div className="text-base lg:text-md text-gray-600 ">
        <p>
          Join our network and reach thousands of people searching for trusted
          healthcare services.
        </p>
      </div>

      <div className="text-base lg:text-md text-gray-600 ">
        <p>
          Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi 
        </p>
        <p>
         pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. 
        </p>
        <p>
         Pulvinar vivamus fringilla lacus nec metus bibendum egestas.  Iaculis massa nisl 
        </p>
        <p>
        malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.   Ad litora torquent per conubia nostra inceptos himenaeos.
        </p>
      </div>

      {/* Button */}
      <div className="pt-6">
        <button className="flex items-center gap-3 h-12 sm:h-14 px-6 sm:px-8 bg-[#006E58] text-white rounded-full hover:bg-[#005144] transition duration-300 mx-auto lg:mx-0 shadow-md">
          <span className="font-medium">Register Now</span>
          <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full">
            <FaChevronRight />
          </div>
        </button>
      </div>
    </div>

    {/* Image */}
    <div className="flex justify-center lg:justify-start w-full max-w-[32rem]">
      <img
        src={img3}
        alt="Healthcare Provider"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>

<div className='bg-[#F5F6FF] p-4'>
     <div className='flex justify-center '>
      

      <div className=' relative w-full  max-w-[75%]  '>
        <img src={img4} alt=""  className='w-full h-[27rem] object-cover rounded-lg shadow-md' />
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
    <button className="flex items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 bg-[#006E58] text-white rounded-full hover:bg-[#024638] transition">
      <span className="font-medium">Join now</span>
      <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full">
        <FaChevronRight />
      </div>
    </button>
  </div>
</div>

   </div>
      </div>
    </div>
  )
}

export default AboutUs
