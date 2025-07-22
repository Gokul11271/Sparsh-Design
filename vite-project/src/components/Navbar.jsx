import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="px-8 py-4 flex items-center justify-between border-b fixed w-full top-0 z-50 bg-opacity-95 backdrop-blur"
      style={{ background: "#FAF7F2", borderColor: "#E7D8C9" }}
    >
      <div
        className="text-2xl font-semibold tracking-wide"
        style={{ color: "#D68C45" }}
      >
        Sparsh Boutique
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-800 text-lg">
        <li>
          <a href="#home" className="hover:text-[#B2834A]">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#B2834A]">
            About
          </a>
        </li>
        <li>
          <a href="#collection" className="hover:text-[#B2834A]">
            Collection
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-[#B2834A]">
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#B2834A]">
            Contact
          </a>
        </li>
      </ul>

      <button
        className="hidden md:block ml-8 px-6 py-2 rounded-full text-white text-sm tracking-wide"
        style={{ backgroundColor: "#D68C45" }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#B2834A")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#D68C45")}
      >
        Book Now
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X color="#D68C45" size={28} />
          ) : (
            <Menu color="#D68C45" size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FAF7F2] border-t border-[#E7D8C9] flex flex-col items-center gap-4 py-6 md:hidden shadow-md">
          <a
            href="#home"
            className="text-lg text-gray-800 hover:text-[#B2834A]"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg text-gray-800 hover:text-[#B2834A]"
          >
            About
          </a>
          <a
            href="#collection"
            className="text-lg text-gray-800 hover:text-[#B2834A]"
          >
            Collection
          </a>
          <a
            href="#gallery"
            className="text-lg text-gray-800 hover:text-[#B2834A]"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-lg text-gray-800 hover:text-[#B2834A]"
          >
            Contact
          </a>
          <button
            className="mt-4 px-6 py-2 rounded-full text-white"
            style={{ backgroundColor: "#D68C45" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#B2834A")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#D68C45")
            }
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
