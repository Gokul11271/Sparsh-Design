import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-6"
          style={{ color: "#D68C45" }}
        >
          Book Your Private Appointment
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Experience couture in person. Visit our boutique or book a
          personalized fitting session.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <a
            href="https://wa.me/919876543210" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full text-white text-sm tracking-wide"
            style={{ backgroundColor: "#D68C45" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#B2834A")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#D68C45")
            }
          >
            WhatsApp Us
          </a>

          <a
            href="tel:+919876543210" // Replace with your phone number
            className="px-8 py-3 rounded-full border text-sm tracking-wide"
            style={{ borderColor: "#D68C45", color: "#D68C45" }}
          >
            Call Now
          </a>
        </div>

        {/* Optional Simple Form */}
        <form className="bg-[#FAF7F2] p-8 rounded-xl shadow-md max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-full text-white"
            style={{ backgroundColor: "#D68C45" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#B2834A")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#D68C45")
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
