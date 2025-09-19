// export default Header;
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import "../styles/colors.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const fixedNavbarPages = [
    "/about",
    "/services",
    "/contact",
    "/team",
    "/excellence",
  ];
  const isFixedNavbar = fixedNavbarPages.includes(currentPath);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesSubmenu = [
    { title: "Tech Contract Management", link: "/tech-contract-management" },
    { title: "Corporate Legal Services", link: "/corporate-legal-services" },
    { title: "NCLT Legal Services", link: "/nclt-legal-services" },
    {
      title: "Project Contract Management",
      link: "/project-contract-management",
    },
    { title: "Banking Legal Services", link: "/banking-legal-services" },
  ];

  const TeamSubmenu = [
    { title: "Our Foundation", link: "/our-foundation" },
    { title: "Job Opportunity", link: "/job-opportunity" },
    { title: "Knowledge", link: "/knowledge" },
    { title: "News", link: "/news" },
    { title: "Learning & Development", link: "/learning-and-development" },
  ];

  const ExcelleceSubmenu = [
    { title: "Dispute Resolution", link: "/dispute-resolution" },
    { title: "IBC - legal Advisory ", link: "/ibc-legal-advisory" },
    { title: "Legal Consulting", link: "/legal-consulting" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <>
      <div className="page-header">
        <div className={`${isFixedNavbar ? "fixed-header-top" : "header-top"}`}>
          <div className="header-top-container  ">
            <div className="flex justify-between items-center">
              <div className="text-white flex items-center gap-2 ">
                <div className="flex items-center gap-3">
                  <span className="float-left">
                    Do You need help ? PleaseCall :
                  </span>
                  <a
                    href="https://wa.me/919945293599"
                    className="text-[#e59040] hover:text-[#e594040] transition-colors font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (+91) 9945293599
                  </a>
                </div>
                <div className=" float-left"> | </div>
                <div className="float-left">Mon - Sat : 9.00am - 5.00pm</div>
              </div>
              <div className="flex items-center space-x-4 social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4267B2] hover:opacity-80 transition-opacity"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1DA1F2] hover:opacity-80 transition-opacity"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077b5] hover:opacity-80 transition-opacity"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF0000] hover:opacity-80 transition-opacity"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav
          className={` ${scrolled ? "scrolled" : ""} ${
            isFixedNavbar ? "fixed-navbar" : "navbar"
          } `}
        >
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="Legalion" />
            </Link>
            <div className="menu-details flex items-center justify-between gap-5">
              <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars className="FaBar" />}
              </div>

              <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-links ${
                      currentPath === "/" ? "activeit" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-links ${
                      currentPath === "/about" ? "activeit" : ""
                    }  `}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => !isOpen && toggleDropdown("services")}
                  onMouseLeave={() => !isOpen && setDropdown(null)}
                >
                  <div
                    className={`nav-links ${
                      servicesSubmenu.some((item) => currentPath === item.link)
                        ? "activeit"
                        : ""
                    }`}
                    onClick={() => isOpen && toggleDropdown("services")}
                  >
                    <Link
                      to="/services"
                      className={`nav-links ${
                        currentPath === "/services" ? "activeit" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                  </div>

                  <AnimatePresence>
                    {dropdown === "services" && (
                      <motion.ul
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {servicesSubmenu.map((item, index) => (
                          <li key={index} className="dropdown-item">
                            <Link
                              to={item.link}
                              className={`dropdown-link ${
                                currentPath === item.link ? "activeit" : ""
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setDropdown(null);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => !isOpen && toggleDropdown("team")}
                  onMouseLeave={() => !isOpen && setDropdown(null)}
                >
                  <div
                    className={`nav-links ${
                      TeamSubmenu.some((item) => currentPath === item.link)
                        ? "activeit"
                        : ""
                    }`}
                    onClick={() => isOpen && toggleDropdown("team")}
                  >
                    <Link
                      to="/team"
                      className={`nav-links ${
                        currentPath === "/team" ? "activeit" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Team
                    </Link>
                  </div>

                  <AnimatePresence>
                    {dropdown === "team" && (
                      <motion.ul
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {TeamSubmenu.map((item, index) => (
                          <li key={index} className="dropdown-item">
                            <Link
                              to={item.link}
                              className={`dropdown-link ${
                                currentPath === item.link ? "activeit" : ""
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setDropdown(null);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li
                  className="nav-item dropdown"
                  onMouseEnter={() => !isOpen && toggleDropdown("excellence")}
                  onMouseLeave={() => !isOpen && setDropdown(null)}
                >
                  <div
                    className={`nav-links ${
                      ExcelleceSubmenu.some((item) => currentPath === item.link)
                        ? "activeit"
                        : ""
                    }`}
                    onClick={() => isOpen && toggleDropdown("excellence")}
                  >
                    <Link
                      to="/excellence"
                      className={`nav-links ${
                        currentPath === "/excellence" ? "activeit" : ""
                      }  `}
                      onClick={() => setIsOpen(false)}
                    >
                      Excellence
                    </Link>
                  </div>

                  <AnimatePresence>
                    {dropdown === "excellence" && (
                      <motion.ul
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {ExcelleceSubmenu.map((item, index) => (
                          <li key={index} className="dropdown-item">
                            <Link
                              to={item.link}
                              className={`dropdown-link ${
                                currentPath === item.link ? "activeit" : ""
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setDropdown(null);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
              <button className="btn">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
