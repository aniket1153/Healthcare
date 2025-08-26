import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

const SignupForm = ({ onSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    referral: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const passRe  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const validate = (v) => {
    const e = {};
    if (!v.name.trim()) e.name = "Full name is required.";
    if (!emailRe.test(v.email)) e.email = "Enter a valid email.";
    if (!passRe.test(v.password)) {
      e.password = "Min 8 chars, 1 upper, 1 lower, 1 number.";
    }
    if (v.confirm !== v.password) e.confirm = "Passwords do not match.";
    return e;
  };

  const inputBase = "p-3 border rounded focus:outline-none focus:ring-2";
  const okCls     = "border-gray-300 focus:ring-[#006E58]";
  const errCls    = "border-red-500 focus:ring-red-500";
  const cls = (hasError) => `${inputBase} ${hasError ? errCls : okCls}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...form, [name]: value };
    setForm(next);
    if (touched[name]) setErrors(validate(next));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  const errs = validate(form);
  setErrors(errs);
  setTouched({ name: true, email: true, password: true, confirm: true, referral: true });
  if (Object.keys(errs).length === 0) {
    onSignup(form.email); // 👈 pass email to parent
  }
};


  const isValid = Object.keys(validate(form)).length === 0;

  return (
    <div className="max-w-[30rem]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Full Name */}
       <div className="w-full"> 
  <input
    name="name"
    type="text"
    placeholder="Full Name"
    className={`${cls(touched.name && errors.name)} w-full max-w-[30rem]`} // 👈 increased width
    value={form.name}
    onChange={handleChange}
    onBlur={handleBlur}
  />
  {touched.name && errors.name && (
    <p className="text-xs text-red-600 mt-1">{errors.name}</p>
  )}
</div>


        {/* Email */}
        <div className="w-full">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={`${cls(touched.email && errors.email)} w-full max-w-[30rem]`}
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password + Confirm (side by side) */}
        <div className="flex flex-col md:flex-row gap-2 w-full">
  {/* Password Field */}
  <div className="relative flex-1">
    <input
      name="password"
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className={cls(touched.password && errors.password) + " w-full pr-10"}
      value={form.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
    >
      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </span>
    {touched.password && errors.password && (
      <p className="text-xs text-red-600 mt-1">{errors.password}</p>
    )}
  </div>

  {/* Confirm Password Field */}
  <div className="relative flex-1">
    <input
      name="confirm"
      type={showConfirmPassword ? "text" : "password"}
      placeholder="Confirm Password"
      className={cls(touched.confirm && errors.confirm) + " w-full pr-10"}
      value={form.confirm}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <span
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
    >
      {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </span>
    {touched.confirm && errors.confirm && (
      <p className="text-xs text-red-600 mt-1">{errors.confirm}</p>
    )}
  </div>
</div>


        {/* Referral (Optional) */}
        <input
          name="referral"
          type="text"
          placeholder="Referral (Optional)"
          className={cls(false)}
          value={form.referral}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid}
          className="flex justify-center items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 bg-[#006E58] text-white rounded-full hover:bg-[#004d3d] transition mx-auto lg:mx-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="font-medium">Signup</span>
          <div className="bg-white text-black h-8 w-8 flex items-center justify-center rounded-full mt-0.5">
            <FaChevronRight />
          </div>
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
