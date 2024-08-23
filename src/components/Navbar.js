import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import BrandLogo from "../assets/images/brand.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center h-16">
          <div className="flex items-center justify-start flex-grow">
            <div className="flex items-center justify-between">
              <Image
                src={BrandLogo}
                alt="Brand Logo"
                style={{ height: "50px", width: "70px" }}
              />
              <div className="flex-col gap-0">
                <Link
                  href="/"
                  className="text-green-500 font-bold text-2xl flex-grow text-center ml-5"
                  style={{fontFamily:"cursive"}}
                >
                  HomeSolution
                </Link>
                <div className="ml-5 text-gray-400 text-md font-bold" style={{fontFamily:"italic"}}>best delivery</div>
              </div>
            </div>

            <div className="hidden md:flex justify-end flex-grow">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:bg-green-600 hover:text-white px-3 py-2 rounded-3xl text-md font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/sbout"
                  className="text-gray-700 hover:bg-green-600 hover:text-white px-3 py-2 rounded-3xl text-md font-medium"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:bg-green-600 hover:text-white px-3 py-2 rounded-3xl text-md font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:bg-green-600 hover:text-white px-3 py-2 rounded-3xl text-md font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/testimonials"
                  className="text-gray-700 hover:bg-green-600 hover:text-white px-3 py-2 rounded-3xl text-md font-medium"
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:bg-green-600 hover:text-white px-3 py-2 rounded-3xl text-md font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
  <div className="md:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <Link
        href="/"
        className="text-gray-700 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-3xl text-base font-medium transition-colors duration-300"
      >
        Home
      </Link>
      <Link
        href="/"
        className="text-gray-700 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-3xl text-base font-medium transition-colors duration-300"
      >
        Services
      </Link>
      <Link
        href="/"
        className="text-gray-700 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-3xl text-base font-medium transition-colors duration-300"
      >
        Projects
      </Link>
      <Link
        href="/"
        className="text-gray-700 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-3xl text-base font-medium transition-colors duration-300"
      >
        Contact
      </Link>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
