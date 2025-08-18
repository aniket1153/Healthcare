import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdEmail, MdContacts } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start gap-12 px-6 md:px-40 py-16 ">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Our team is here to help. Just drop your message and we’ll reach out.
        </p>

        {/* Email */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#006E58] text-white p-3 rounded-md shadow-md">
            <MdEmail size={26} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium text-gray-800">
              company@gmail.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="bg-[#006E58] text-white p-3 rounded-md shadow-md">
            <MdContacts size={26} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="text-lg font-medium text-gray-800">+91 7335556644</p>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="flex-1 w-full">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              defaultValue="Ram Kumar Das"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006E58]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006E58]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006E58]"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006E58]"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-[#006E58] hover:bg-[#005744] text-white font-medium py-3 px-6 rounded-full transition"
            >
              Submit
              <span className="bg-white text-[#006E58] rounded-full w-7 h-7 flex items-center justify-center">
                <FaChevronRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
