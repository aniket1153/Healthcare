import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import LoginForm from "../componets/LoginForm";
import SignupForm from "../componets/SignupForm";
import OtpForm from "../componets/OtpForm";
import SuccessPage from "../componets/SuccessPage";
import loginImg from "../assets/Login.png";
import signupImg from "../assets/signup.png";
import otpImg from "../assets/otp.png";
import ForgotPassword from "../componets/ForgotPassword";
import ResetPassword from "../componets/ResetPassword";
import ResetSuccessPage from "../componets/ResetSuccessPage";

const AuthPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("login");
  const [step, setStep] = useState("form");
  const [userEmail, setUserEmail] = useState("");
  const [isForgotFlow, setIsForgotFlow] = useState(false);

  // ✅ check query param on mount
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const stepParam = queryParams.get("step");

    if (stepParam === "signup") {
      setActiveTab("signup");
      setStep("form");
    } else if (stepParam === "login") {
      setActiveTab("login");
      setStep("form");
    }
  }, [location.search]);

  const handleSignupSubmit = (email) => {
    setUserEmail(email);
    setIsForgotFlow(false);
    setStep("otp");
  };

  const handleOtpSuccess = () => {
    if (step === "otp" && isForgotFlow) {
      setStep("reset");
    } else {
      setStep("success");
    }
  };

  const handleGoToLogin = () => {
    setStep("form");
    setActiveTab("login");
  };

  const handleForgotPassword = () => {
    setStep("forgot");
  };

  const getImage = () => {
    if (step === "otp" || step === "forgot") return otpImg;
    if (step === "success") return null;
    return activeTab === "login" ? loginImg : signupImg;
  };

  const handleForgotPasswordSubmit = (email) => {
    setUserEmail(email);
    setIsForgotFlow(true);
    setStep("otp");
  };

  const handlePasswordReset = () => {
    setStep("resetSuccess");
  };

  return (
    <>
      {step === "success" || step === "resetSuccess" ? (
       <div className="flex justify-center items-center min-h-screen w-full px-4 sm:px-8 py-6">
  <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-lg sm:max-w-2xl text-center">
    {step === "success" ? (
      <SuccessPage onGoToLogin={handleGoToLogin} />
    ) : (
      <ResetSuccessPage onGoToLogin={handleGoToLogin} />
    )}
  </div>
</div>

      ) : (
        <div className="flex flex-col md:flex-row md:ml-[13%] h-auto md:h-[35rem] p-4 mt-1 gap-6">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow-2xl w-full">
            {step === "form" && (
              <>
                {/* Toggle Buttons */}
                <div className="flex justify-center mb-8 bg-gray-200 rounded-full p-1 w-full max-w-[13rem]">
                  <button
                    onClick={() => setActiveTab("login")}
                    className={`flex-1 py-2 rounded-full font-semibold text-lg transition-colors ${
                      activeTab === "login"
                        ? "bg-[#006E58] text-white"
                        : "text-gray-700"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setActiveTab("signup")}
                    className={`flex-1 py-2 rounded-full font-semibold text-lg transition-colors ${
                      activeTab === "signup"
                        ? "bg-[#006E58] text-white"
                        : "text-gray-700"
                    }`}
                  >
                    Signup
                  </button>
                </div>

                {/* Forms */}
                <div className="w-full max-w-md px-2">
                  {activeTab === "login" ? (
                    <LoginForm onForgotPassword={handleForgotPassword} />
                  ) : (
                    <SignupForm onSignup={handleSignupSubmit} />
                  )}
                </div>
              </>
            )}

            {step === "otp" && (
              <OtpForm email={userEmail} onOtpSuccess={handleOtpSuccess} />
            )}

            {step === "forgot" && (
              <ForgotPassword
                onBack={handleGoToLogin}
                onForgotSubmit={handleForgotPasswordSubmit}
              />
            )}

            {step === "reset" && (
              <ResetPassword onResetSuccess={handlePasswordReset} />
            )}
          </div>

          {/* Right Image */}
          <div className="hidden md:flex md:justify-center md:items-center md:w-1/2">
            {getImage() && (
              <img
                src={getImage()}
                alt="Auth"
                className="max-w-[80%] max-h-[80vh] object-contain rounded-lg transition-all duration-500"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
