import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-70 backdrop-blur-md sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold tracking-wide">Wisdmway</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Logout
            </a>
          </li>
        </ul>

        {/* Search Box */}
        <div className="relative flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="w-40 md:w-64 bg-gray-700 text-gray-300 rounded-lg py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65L21 21z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden flex flex-col items-center bg-gray-800 bg-opacity-90 p-4 space-y-4`}
      >
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
