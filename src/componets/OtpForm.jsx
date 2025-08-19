import React, { useState, useRef } from "react"; 

const OtpForm = ({ email,onOtpSuccess }) => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // 6 digit OTP
  const inputsRef = useRef([]);

  // Handle OTP change
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // Handle backspace move to previous box
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      alert("Please enter all 6 digits.");
      return;
    }

    // ✅ Accept any 6-digit OTP
    onOtpSuccess(otpValue); 
  };

  return (
    <div className="max-w-[25rem]">
      <p className="text-center text-gray-600 mb-6">
        We sent a code to <span className="font-semibold">{email}</span>
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
        {/* OTP Boxes */}
        <div className="flex gap-3 justify-center">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 rounded-lg text-center text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-[#006E58]"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          type="submit"
          className="h-12 px-8 bg-[#006E58] text-white rounded-full hover:bg-[#004d3d] transition"
        >
          Verify OTP
        </button>

        {/* Resend Link */}
        <p className="text-gray-600 text-sm">
          Didn’t Receive?{" "}
          <span className="text-[#006E58] font-semibold cursor-pointer hover:underline">
            Resend
          </span>
        </p>
      </form>
    </div>
  );
};

export default OtpForm;
