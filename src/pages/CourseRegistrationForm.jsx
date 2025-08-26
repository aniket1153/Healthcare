import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Breadcrumbs from "../componets/Breadcrumbs";

const CourseRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    startDate: "31/07/2025",
    courseName: "Launch Your Career in Medicine",
  });

  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+91\s?\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone (+91XXXXXXXXXX)";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Registration submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div>
      <div className="flex p-10 sm:pl-3 md:ml-68">
        <Breadcrumbs />
      </div>
      <div className="max-w-5xl mx-auto p-9 bg-white shadow-md rounded-2xl mt-1 mb-5">
        <h1 className="text-2xl font-semibold mb-6">Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          {/* Address + Pincode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div>
              <input
                type="number"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
            </div>
          </div>

          {/* Start Date & Course Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg p-2">
            <div className="bg-[#F5F6FF] rounded-lg p-1">
              <label className="block text-sm text-gray-600 pl-2">Start Date</label>
              <p className="font-medium pl-2">{formData.startDate}</p>
            </div>
            <div className="bg-[#F5F6FF] rounded-lg p-1">
              <label className="block text-sm text-gray-600 pl-2">Course Name</label>
              <p className="font-medium pl-2">{formData.courseName}</p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#006E58] text-white py-3 rounded-full hover:bg-[#014134] transition"
          >
            Apply Now <div className="bg-white text-black h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full">
                                  <FaChevronRight />
                                </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseRegistrationForm;
