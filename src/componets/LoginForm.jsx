import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

const LoginForm = ({
    onForgotPassword
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-[30rem] ">

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#006E58]"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#006E58]"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 cursor-pointer pt-1"
          >
            {showPassword ? <AiOutlineEyeInvisible  /> : <AiOutlineEye />}
          </span>
        </div>
      
     
                <button className="flex justify-center items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 bg-[#006E58] text-white rounded-full hover:bg-[#004d3d] transition mx-auto lg:mx-0">
                  <span className="font-medium">Login</span>
                  <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full mt-0.5">
                    <FaChevronRight />
                  </div>
                </button>
<p
  className="text-sm text-[#006E58] font-semibold cursor-pointer hover:underline mt-2"
  onClick={onForgotPassword}  // 👈 call parent
>
  Forgot Password?
</p>


              
      </form>
    </div>
  );
};

export default LoginForm;
