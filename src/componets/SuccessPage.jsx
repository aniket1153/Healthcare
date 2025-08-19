import React from "react";
import img1 from "../assets/Frame.png";

const SuccessPage = ({ onGoToLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto px-4 sm: py-8 md:py-38">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <img
          src={img1}
          alt="Success"
          className="w-28 h-28 cursor-pointer"
          onClick={onGoToLogin}
        />
      </div>

      {/* Success Message */}
      <h2 className="text-2xl font-semibold text-black mb-4">
        Your account has been <br /> successfully created 🎉
      </h2>

      {/* Button */}
   
    </div>
  );
};

export default SuccessPage;
