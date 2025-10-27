import { Link } from "react-router-dom";

import React, { useState } from "react";

function Hero() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    checkIn: "",
    checkOut: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field on change
    setErrors((prev) => ({
      ...prev,
      [name]: null,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.from.trim()) {
      newErrors.from = "Please enter where you are from.";
    }
    if (!formData.to.trim()) {
      newErrors.to = "Please enter where you are going.";
    }
    if (!formData.checkIn) {
      newErrors.checkIn = "Please select a check-in date.";
    }
    if (!formData.checkOut) {
      newErrors.checkOut = "Please select a check-out date.";
    }
    if (formData.checkIn && formData.checkOut) {
      const inDate = new Date(formData.checkIn);
      const outDate = new Date(formData.checkOut);
      if (outDate <= inDate) {
        newErrors.checkOut = "Check-out must be after check-in.";
      }
    }

    setErrors(newErrors);

    // If no errors -> return true
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert(
        `From: ${formData.from}\nTo: ${formData.to}\nCheck-In: ${formData.checkIn}\nCheck-Out: ${formData.checkOut}`
      );
      // You can send the data to a server or clear form etc.
      setFormData({ from: "", to: "", checkIn: "", checkOut: "" });
    }
  };

  return (
    <form className="travel-form flex pt-8" onSubmit={handleSubmit}>
      <div className="form-group pb-6 text-white">
        <label>
          Where Are You From:
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
          />
        </label>
        {errors.from && <div className="error">{errors.from}</div>}
      </div>
      <div className="form-group pb-6 text-white">
        <label>
          Where To:
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
          />
        </label>
        {errors.to && <div className="error">{errors.to}</div>}
      </div>
      <div className="form-group pb-6 text-white">
        <label>
          Check In Date:
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
          />
        </label>
        {errors.checkIn && <div className="error">{errors.checkIn}</div>}
      </div>
      <div className="form-group pb-6 text-white">
        <label>
          Check Out Date:
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
          />
        </label>
        {errors.checkOut && <div className="error">{errors.checkOut}</div>}
      </div>
      <div className="pb-14 ml-14">
        <Link to="/bookhotel">
          <button className="bg-gray-200 border rounded-full h-12 items-center  py-3 px-3">
            BOOK A HOTEL NOW
          </button>
        </Link>
      </div>
    </form>
  );
}

export default Hero;
