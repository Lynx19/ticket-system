import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import touchlogo from "../assets/touch.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-600 text-center py-[15px]">
      <div className=" w-[90%] mx-auto text-center">
        <div className="my-5">
          <img
            src={touchlogo}
            alt="bitsSense"
            className="w-[200px] mx-auto mb-2"
          />
          <p className="text-white font-body text-base md:text-lg font-lato lg:text-xl xl:text-2xl leading-6 md:leading-7 lg:leading-8 xl:leading-9">
            Powered by Touch I.T
          </p>
        </div>
        <div className="flex mx-auto w-[150px] mb-5">
          <div className="text-2xl mr-2">
            <FaFacebookF className="text-white" />
          </div>
          <div className="text-2xl mx-2">
            <FaLinkedinIn className="text-white" />
          </div>
          <div className="text-2xl mx-2">
            <FaXTwitter className="text-white" />
          </div>
          <div className="text-2xl mx-2">
            <FaInstagram className="text-white" />
          </div>
        </div>
        <div className="my-5">
          <p className="text-white font-body font-lato text-base leading-6 md:leading-7 lg:leading-8 xl:leading-9">
            &copy; {new Date().getFullYear()} Touch<span className="text-yellow-500">I.T</span> Ltd .
            All Rights Reserved.
          </p>
          <p className="text-white font-body font-lato text-base leading-6 md:leading-7 lg:leading-8 xl:leading-9">
            Abuja, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
