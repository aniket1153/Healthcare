import React from "react";
import { FaStar, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import img1 from "../assets/bedHosptial.jpg"
import { IoStarSharp } from "react-icons/io5";

const HospitalDetails = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Header Image */}
      <div className="relative w-full max-w-6xl pt-4">
        <img
          src={img1}
          alt="Hospital"
          className="w-full h-64 md:h-80 object-cover rounded-xl"
        />
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
          <IoStarSharp size={21} className="text-white" /> 4.8 / 5
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl p-6 md:p-10 md:ml-12">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">B Medical Hospital</h1>

        {/* About Section */}
        <h2 className="text-lg font-semibold mb-2">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          B Medical Hospital is a leading healthcare facility in Kolkata, West
          Bengal, known for its patient-centric care, advanced medical
          technology, and highly skilled healthcare professionals. We aim to
          provide world-class medical services with compassion and efficiency.
        </p>

        {/* Location */}
        <h2 className="text-lg font-semibold mb-2">Location</h2>
        <p className="text-gray-700 mb-6">
          Address: Kolkata, West Bengal, India
          <br />
          Conveniently located in the heart of Kolkata, making it easily
          accessible for patients from across the state.
        </p>

        {/* Contact Info */}
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700 flex items-center gap-2 mb-2">
        yourmail@gmail.com
        </p>
        <p className="text-gray-700 flex items-center gap-2 mb-6">
        1800-302-588
        </p>

        {/* Specialties */}
      {/* Specialties */}
<h2 className="text-lg font-semibold mb-2">Specialties & Services</h2>
<ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
  <li>General Medicine & Surgery</li>
  <li>Cardiology & Cardiac Surgery</li>
  <li>Neurology & Neurosurgery</li>
  <li>Orthopedics & Joint Replacement</li>
  <li>Pediatrics & Neonatal Care</li>
  <li>Emergency & Trauma Care</li>
  <li>Diagnostic & Imaging Services</li>
  <li>Pharmacy & Inpatient Facilities</li>
</ul>


        {/* Why Choose Us */}
    {/* Why Choose Us */}
<h2 className="text-lg font-semibold mb-2">Why Choose Us</h2>
<ul className="list-disc pl-6 text-gray-700 space-y-1 mb-10">
  <li>Highly experienced medical team</li>
  <li>Modern diagnostic and surgical equipment</li>
  <li>24×7 emergency care</li>
  <li>Patient-friendly environment</li>
  <li>High patient satisfaction rating (4.8/5)</li>
</ul>


        {/* WhatsApp Floating Button */}
        {/* <a
          href="https://wa.me/918888888888"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-5 bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        >
          <FaWhatsapp size={22} />
        </a> */}

        {/* Book Appointment */}
        <div className="w-full flex justify-center">
          <button className="bg-[#006E58] text-white font-medium px-8 py-3 rounded-full w-full md:w-7xl">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
