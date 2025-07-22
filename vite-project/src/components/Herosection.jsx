import React from "react";
import img1 from "../assets/img1.jpg"; // Adjust path as needed

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center text-center px-6"
      style={{
        background: `url(${img1}) center/cover no-repeat`,
        backgroundColor: "#FAF7F2", // fallback color
      }}
    >
      <div className="backdrop-blur-sm bg-white/70 p-10 rounded-xl max-w-xl shadow-lg">
        <h1
          className="text-4xl md:text-5xl font-semibold mb-6"
          style={{ color: "#D68C45" }}
        >
          Curated Elegance for Every Woman
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Discover timeless couture and bespoke designs at Sparsh Boutique. For
          women who value grace, detail, and understated luxury.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 rounded-full text-white text-sm tracking-wide"
            style={{ backgroundColor: "#D68C45" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#B2834A")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#D68C45")
            }
          >
            Explore Collection
          </button>
          <button
            className="px-8 py-3 rounded-full border text-sm tracking-wide"
            style={{ borderColor: "#D68C45", color: "#D68C45" }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
