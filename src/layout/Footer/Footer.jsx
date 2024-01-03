import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <hr className="border-gray-800 my-6" />

        <div className="flex items-center space-x-8 mb-4">
          <Link
            to="https://apps.apple.com/us/app/luma-delightful-events/id1546150895"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <i className="bi bi-apple fs-4"></i>
          </Link>
          <Link
            to="https://twitter.com/LumaHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <i className="bi bi-twitter fs-4"></i>
          </Link>
          <Link
            to="https://www.instagram.com/luma_hq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <i className="bi bi-instagram fs-4"></i>
          </Link>
        </div>

        <Link
          to="https://lu.ma/holiday"
          className="text-black hover:text-white transition duration-300"
        >
          Host your holiday Party with Luma
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
