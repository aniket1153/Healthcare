import React from "react";
import img1 from "../assets/Frame.png";

const ResetSuccessPage = ({ onGoToLogin }) => {
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
      <h2 className="text-2xl font-semibold text-black mb-2">
        Password Reset Successful 🎉
      </h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Your password has been updated successfully. <br />
        Please log in with your new password.
      </p>

      {/* Button */}
  
    </div>
  );
};

export default ResetSuccessPage;
