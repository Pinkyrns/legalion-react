import React from "react";
import contactimg from "../../assets/images/contact-img.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const location = useLocation();
  const isTeamPage = location.pathname === "/contact";
  return (
    <div className="contact-section bg-gray-50 py-20"    >
      <div className=" mx-auto px-6 lg:px-16" style={{ marginTop: isTeamPage ? "67px" : "0px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  justify-around items-center">
          {/* Left Side (Form) */}
          <div className="   flex flex-col   h-full bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900  contact-section-title ">
              Contact Now
            </h2>
            <p className=" para-left">
              Your partner for digital transformation in Bhubaneswar, offering
              state-of-the-art IT solutions that make a difference.
            </p>

            <form className="space-y-6">
              <div className="  grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300  outline-none"
                />
                <select
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300  outline-none"
                >
                  <option value="">Select Service</option>
                  <option value="legal">Legal service</option>
                  <option value="it">IT service</option>
                  <option value="consultancy">Consultancy</option>
                  <option value="digital">Digital Marketing</option>
                </select>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300  outline-none"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your Phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300  outline-none"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                required
                className="w-full px-4 py-3 border border-gray-300  outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3  shadow-md  transition-all"
              >
                Contact Now
              </button>
            </form>
          </div>

          {/* Right Side (Contact Info + Image) */}
          <div className="contact-text">
            <h2 className="text-amber-600 ">Get In Touch</h2>
            <p>
              We'd love to hear from you! Fill out the form or reach us using
              the details below.
            </p>
            <ul className="address-list sibling2">
              <li>
                <div className="icon">
                  <FaMapMarkerAlt size={25} />
                </div>
                <div className="text">
                  <h4>Location</h4>
                  <p>
                    Plot 10/10, Anantam Residency, Sabar sahi, Rasulgarh,
                    Bhubaneswar-751010
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <FaPhoneAlt size={25} />
                </div>
                <div className="text">
                  <h4>Phone </h4>
                  <a href="tel:+91-9954293599">+91 99542 93599</a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <FaEnvelope size={25} />
                </div>
                <div className="text">
                  <h4>Email </h4>
                  <a href="mailto:info@ligalion.com">info@ligalion.com</a>
                </div>
              </li>
            </ul>

            <div className=" contact-image-area">
              <img src={contactimg} alt="Contact" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
