"use client";

import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="px-5 lg:px-20">
        <div className="inline-flex justify-center relative">
          <h1 className="font-bold tight bg-gradient-to-b from-white to-[#c015cc] text-transparent bg-clip-text">
            ThumbSpot
          </h1>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Feature
          </a>
          <a href="#" className="#">
            Customers
          </a>
          <a href="#" className="">
            Pricing
          </a>
          <a href="#" className="">
            Help
          </a>
          <a href="#" className="">
            Career
          </a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <FaInstagram size={30} />
          <FaLinkedin size={30} />
          <FaYoutube size={30} />
          <FaTwitter size={30} />
        </div>
        <p className="mt-6">&copy; 2024 Saas. All rights reserved</p>
      </div>
    </footer>
  );
};
