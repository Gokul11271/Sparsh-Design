import React from "react";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-[#FAF7F2] border-t border-[#E7D8C9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 text-sm">
        {/* Brand & Tagline */}
        <div>
          <h3
            className="text-2xl font-semibold mb-2"
            style={{ color: "#D68C45" }}
          >
            SPARSH DESIGN
          </h3>
          <p>Where timeless elegance meets contemporary sophistication.</p>
          <p className="mt-2 text-xs">
            Creating bespoke fashion experiences since 2003.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-lg font-semibold mb-3"
            style={{ color: "#B2834A" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-[#D68C45]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#D68C45]">
                About Us
              </a>
            </li>
            <li>
              <a href="#collection" className="hover:text-[#D68C45]">
                Collections
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#D68C45]">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#D68C45]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-lg font-semibold mb-3"
            style={{ color: "#B2834A" }}
          >
            Our Services
          </h4>
          <ul className="space-y-2">
            <li>Personal Styling</li>
            <li>Bespoke Tailoring</li>
            <li>Bridal Styling</li>
            <li>Fashion Consultation</li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h4
            className="text-lg font-semibold mb-3"
            style={{ color: "#B2834A" }}
          >
            Contact Us
          </h4>
          <p>
            135 A, Above ICICI ATM
            <br />
            Hope College, Avinashi Rd
            <br />
            Coimbatore, Tamil Nadu 641004
          </p>
          <p className="mt-2 flex items-center gap-2">
            <Phone size={16} /> 098657 66573
          </p>
          <p className="mt-1 flex items-center gap-2">
            <Mail size={16} /> hello@sparshdesign.com
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} className="hover:text-[#D68C45]" />
            </a>
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={20} className="hover:text-[#D68C45]" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Sparsh Design. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
// https://1c14e0bd51ce699c3e.gradio.live/