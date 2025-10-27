import React, { useState } from "react";

const BookHotelPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "standard",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="confirmation">
        <h2>✅ Booking Confirmed!</h2>
        <p>
          Thank you, {formData.name}. Your stay is booked from{" "}
          {formData.checkIn} to {formData.checkOut}.
        </p>
        <button onClick={() => setSubmitted(false)}>Book Another Room</button>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <h1 className="font-bold text-2xl">Hotel Room Booking</h1>
      <form onSubmit={handleSubmit} className="booking-form flex-row">
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Check-in Date:
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Check-out Date:
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Room Type:
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </select>
        </label>
        <div className="pt-12">
          <button
            className="border rounded-full w-40 h-10 bg-gray-200 "
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookHotelPage;
