import React from "react";
import michael from "../assets/michael.webp";
import emilly from "../assets/emilly.webp";
import dave from "../assets/dave.webp";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="text-2xl font-bold">About Booking.com</h1>
        <p>
          Your trusted partner for comfortable and affordable stays worldwide.
        </p>
      </section>

      {/* Company Overview */}
      <section className="about-section">
        <h2 className="text-2xl font-bold pt-8">Who We Are</h2>
        <p>
          Founded in 2020, <strong>Booking.com</strong> is a modern hotel
          booking platform dedicated to connecting travelers <br />
          with the best hotels around the globe. Whether you’re traveling for
          business or leisure,
          <br /> we make it simple to find, compare, and book your perfect stay
          — all in one place.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="about-section mission">
        <h2 className="text-2xl font-bold pt-8">Our Mission</h2>
        <p>
          To simplify travel by providing seamless, transparent, and reliable
          hotel booking experiences for everyone.
        </p>

        <div className="values">
          <div className="value-card">
            <h3 className="text-2xl font-bold pt-8">✨ Transparency</h3>
            <p>Clear prices, honest reviews, and no hidden fees.</p>
          </div>
          <div className="value-card">
            <h3 className="text-2xl font-bold pt-8">🤝 Trust</h3>
            <p>We partner only with verified hotels and trusted hosts.</p>
          </div>
          <div className="value-card">
            <h3 className="text-2xl font-bold pt-8">🌍 Accessibility</h3>
            <p>
              Our platform is built for travelers from every corner of the
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team">
        <h2 className="text-2xl font-bold pt-8">Meet Our Team</h2>
        <div className="team-grid flex gap-12">
          <div className="team-member">
            <img className="w-[90px] rounded-full h-20" src={dave} alt="CEO" />
            <h4>Dave Johnson</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img
              className="w-[90px] rounded-full h-20"
              src={michael}
              alt="CTO"
            />
            <h4>Michael Lee</h4>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img
              className="w-[90px] rounded-full h-20"
              src={emilly}
              alt="Marketing Head"
            />
            <h4>Emily Smith</h4>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-section contact">
        <h2 className="text-2xl font-bold pt-8">Contact Us</h2>
        <p>
          Have questions or want to partner with us? Reach out at{" "}
          <a href="mailto:support@Booking.com">support@Booking.com</a>
        </p>
        <p>📍 123 Travel Road, New York, USA</p>
      </section>
    </div>
  );
};

export default AboutUs;
