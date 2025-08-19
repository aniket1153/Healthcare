import React, { useState } from "react"; 
import { FaChevronRight } from "react-icons/fa";

const ForgotPassword = ({ onBack, onForgotSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Enter your email");
      return;
    }
    onForgotSubmit(email); // 👈 send email to AuthPage and go OTP
  };

  return (
    <div className="max-w-[25rem]">
      <h2 className="text-xl font-semibold mb-6 text-center">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-[20rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006E58]"
        />

        <button
          type="submit"
          className="h-12 px-6 bg-[#006E58] text-white rounded-full hover:bg-[#004d3d] transition flex items-center justify-center gap-2"
        >
          <span className="font-medium">Continue</span>
          <span className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full">
            <FaChevronRight />
          </span>
        </button>

     
      </form>
    </div>
  );
};

export default ForgotPassword;
