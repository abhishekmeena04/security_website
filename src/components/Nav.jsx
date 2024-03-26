import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "./Footer";

const Nav = () => {
  const [isClick, setisClick] = useState();
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      {/* nav-top */}
      <div className="bg-[#f9f8f8] nav-top lg:px-10 max-w-7xl mx-auto">
        <div className="nav-top-first">
          <a href="tel:+91-20-65290835" target="_top">
            <BsFillTelephoneFill color="#2d4567" />
            <span>+91-20-65290835</span>
          </a>
          <a href="newnational_s@yahoo.com" target="_top">
            <MdEmail color="#2d4567" />
            newnational_s@yahoo.com
          </a>
        </div>
        <div className="nav-top-second">
          <a href="" target="_blank">
            <FaFacebookF color="#2d4567" className="facebook" />
          </a>
          <a href="" target="_blank">
            <FaTwitter color="#2d4567" className="twitter" />
          </a>
          <a href="" target="_blank">
            <FaInstagram color="#2d4567" className="instagram" />
          </a>
          <a href="" target="_blank">
            <FaYoutube color="#2d4567" className="youtube" />
          </a>
        </div>
      </div>
      {/* nav-top */}

      {/* nav */}
      <nav className="bg-[#2d4567] border py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="logo-img" src="/img.jpeg" alt="" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </Link>
                <Link
                  to="/Services"
                  className="text-white hover:bg-white hover:text-black rounded-lg  p-2"
                >
                  Services
                </Link>
                <Link
                  to="/Gallery"
                  className="text-white hover:bg-white hover:text-black rounded-lg  p-2"
                >
                  Gallery
                </Link>
                <Link
                  to="/About"
                  className="text-white hover:bg-white hover:text-black rounded-lg  p-2"
                >
                  About
                </Link>
                <Link
                  to="/Contact"
                  className="text-white hover:bg-white hover:text-black rounded-lg  p-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="rounded"
                      strokeLinejoin="rounded"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="rounded"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2 pl-4"
              >
                Home
              </Link>
              <Link
                to="/Services"
                className="text-white block hover:bg-white hover:text-black rounded-lg  p-2 pl-4"
              >
                Services
              </Link>
              <Link
                to="/Gallery"
                className="text-white block hover:bg-white hover:text-black rounded-lg  p-2 pl-4"
              >
                Gallery
              </Link>
              <Link
                to="/About"
                className="text-white block hover:bg-white hover:text-black rounded-lg  p-2 pl-4"
              >
                About
              </Link>
              <Link
                to="/Contact"
                className="text-white block hover:bg-white hover:text-black rounded-lg  p-2 pl-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* nav */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Nav;
