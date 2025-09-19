import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"; // adjust path
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F1012] text-[#dea057] ">
      {/* Footer Top */}
      <div className=" w-full  pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 border-b border-gray-700 footer-top">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className=" flex  mt-0  flex-col justify-start gap-6">
            <img className="w-36 mb-4" src={logo} alt="logo" />
            <p className="mb-4 text-white leading-6">
              Clients occupy the center space in our ecosphere. Our march
              towards success is only through our clients’ success. We stand
              firm on Excellence, Objectiveness and Sincerity
            </p>
            <ul className="flex gap-6 text-lg mb-6">
              <li className="bg-black w-[30px] h-[30px] flex justify-center items-center rounded">
                <a
                  href="https://www.facebook.com/"
                  className="hover:text-[#dea057]  text-white "
                >
                  <FaFacebookF size={18} />
                </a>
              </li>
              <li className="bg-black w-[30px] h-[30px] flex justify-center items-center rounded">
                <a
                  href="https://www.twitter.com/"
                  className="hover:text-[#dea057] text-white "
                >
                  <FaTwitter size={18} />
                </a>
              </li>
              <li className="bg-black w-[30px] h-[30px] flex justify-center items-center rounded">
                <a
                  href="https://www.linkedin.com/"
                  className="hover:text-[#dea057] text-white "
                >
                  <FaLinkedin size={18} />
                </a>
              </li>
              <li className="bg-black w-[30px] h-[30px] flex justify-center items-center rounded">
                <a
                  href="https://www.youtube.com/@legalion2025"
                  className="hover:text-[#dea057] text-white "
                >
                  <FaYoutube size={18} />
                </a>
              </li>
            </ul>
            <div>
              <h6 className="font-semibold mb-1">Open Hour</h6>
              <p className="text-white">
                Monday To Saturday,
                <br /> 9.00 AM - 5.00 PM
              </p>
            </div>
          </div>

          {/* Practice Area */}
          <div className="flex flex-col gap-12">
            <h4 className="text-xl font-semibold mb-4">Practice Area</h4>
            <ul className="space-y-2 flex flex-col gap-4">
              <li>
                <a href="#" className="hover:text-white">
                  Business Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Work Accident
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Criminal Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Real State Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Drug Offense
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Juvenile Crime
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-12">
            <h4 className="text-xl font-semibold mb-4">Contacts</h4>
            <ul className="space-y-4 text-sm flex flex-col gap-8">
              <li className="flex items-start gap-3">
                <span>
                  <LuPhoneCall size={25} />
                </span>
                <div className="flex flex-col">
                  <a href="tel:+919945293599" className="hover:text-white">
                    +91 9945293599
                  </a>
                  <a href="tel:+919945293599" className="hover:text-white">
                    +91 9945293599
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span>
                  <MdOutlineMail size={25} />
                </span>
                <div className="flex flex-col">
                  <a
                    href="mailto:info@ligalion.com"
                    className="hover:text-white"
                  >
                    info@ligalion.com
                  </a>
                  <a
                    href="mailto:support@example.com"
                    className="hover:text-white"
                  >
                    support@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span>
                  <FaLocationDot size={25} />
                </span>
                <p className="text-white">
                  Plot 10/10 , Anantam Residency , Bhubaneswar-751010
                </p>
              </li>
            </ul>
          </div>

          {/* Recent Case */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-semibold mb-4">Recent Case</h4>
            <ul className="space-y-4 flex flex-col gap-6">
              <li className="flex gap-3">
                <img
                  src="assets/images/blog/recent-case1.png"
                  alt="case1"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <span className="text-xs">skirmish</span>
                  <h5 className="font-medium">
                    <a href="#" className="hover:text-white">
                      Education Law
                    </a>
                  </h5>
                </div>
              </li>
              <li className="flex gap-3">
                <img
                  src="assets/images/blog/recent-case2.png"
                  alt="case2"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <span className="text-xs">skirmish</span>
                  <h5 className="font-medium">
                    <a href="#" className="hover:text-white">
                      Personal Injury
                    </a>
                  </h5>
                </div>
              </li>
              <li className="flex gap-3">
                <img
                  src="assets/images/blog/recent-case3.png"
                  alt="case3"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <span className="text-xs">skirmish</span>
                  <h5 className="font-medium">
                    <a href="#" className="hover:text-white">
                      Drug Offense
                    </a>
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4 footer-bottom">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">
          <p className="text-center lg:text-left">
            © 2025{" "}
            <a href="#" className="text-[#dea057] font-medium">
              Legalion
            </a>{" "}
            - All Rights Reserved
          </p>
          <ul className="flex gap-4 mt-3 lg:mt-0">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
