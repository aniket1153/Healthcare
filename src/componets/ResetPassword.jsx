import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = ({ onResetSuccess }) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = () => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character (!@#$%^&*).";
    }
    if (password !== confirm) {
      return "Passwords do not match.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validatePassword();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    // ✅ Call API here to reset password
    onResetSuccess();
  };

  return (
    <div className="max-w-[25rem] w-full">
      <h2 className="text-xl font-semibold mb-6 text-center">Reset Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        
        {/* New Password */}
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006E58]"
          />
          <span
            className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative w-full">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006E58]"
          />
          <span
            className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Validation error */}
        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="h-12 px-6 bg-[#006E58] text-white rounded-full hover:bg-[#004d3d] transition flex items-center justify-center gap-2"
        >
          <span className="font-medium">Reset Password</span>
          <span className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full">
            <FaChevronRight />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
