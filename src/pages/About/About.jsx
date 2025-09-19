// components/About.js
import React from "react";
import { motion } from "framer-motion";
import auther from "../../assets/images/about-author.png";
import signature from "../../assets/images/signature.png";
import aboutbg from "../../assets/images/about-bg.png";
import abouttext1 from "../../assets/images/abt-img-text1.svg";
import abouttext2 from "../../assets/images/abt-img-text2.svg";
import sectionbg from "../../assets/images/section-bg1.svg";
import { useLocation } from "react-router-dom";
import "../../styles/colors.css";
import "./About.css";

const About = () => {

  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  return (
    <section className=" relative  pb-28 z-10 bg-white  ">
      {/* Title */}
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-6 about-title" style={{ marginTop: isAboutPage ? '90px' : '0px' }}>
        About Us
      </h1>

      {/* Background stripe */}
      <img
        src={sectionbg}
        alt="Decorative background"
        className="absolute left-0 bottom-0 -z-10 h-[600px] w-[180px] hidden md:block"
      />

      {/* Content Grid */}
      <div className="about-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2  gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center text-center"
        >
          <div className="about-image-area     relative   w-full max-w-[500px] aspect-[4/5] flex items-end">
            <img
              src={aboutbg}
              alt="Founder illustration"
              className="rounded-[30px_30px_500px_500px] w-full h-full object-cover"
            />
            <img
              src={abouttext1}
              alt="Decorative text 1"
              className="abt-img-text1"
            />
            <img
              src={abouttext2}
              alt="Decorative text 2"
              className="abt-img-text2"
            />
            <span className=" years ">25</span>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center xl:text-left  flex flex-col justify-center gap-5 w-full  "
        >
          {/* Marquee */}
          <div className=" relative overflow-hidden w-full h-12 mb-4">
            <div className="absolute whitespace-nowrap animate-[marquee_15s_linear_infinite]">
              <span className="text-5xl  font-bold  opacity-20  marquee">
                Srittam Das
              </span>
              <span className="text-5xl font-bold  opacity-20 mr-10 ">
                Srittam Das
              </span>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center ">
            <span className="text-yellow-600 uppercase tracking-wide text-sm font-semibold">
              GET TO KNOW US
            </span>
            <h2 className=" text-yellow-600   text-3xl md:text-4xl font-bold mt-2">
              Message From Founder.
            </h2>
          </div>

          {/* Founder Quote */}
          <blockquote className="italic text-gray-600 mt-6 space-y-4 leading-relaxed">
            <p>
              " I am very grateful to legendary advocate Gokulananda Chaudhury
              (1863–1915) for leaving a compliance footstep to be useful for the
              people at problem. Having more than 25 years of experience of
              serving multinational companies and managing compliance
              portfolios, I founded this entity to serve clients.
            </p>
            <p>
              I humbly acknowledge the blessings of my previous generations. The
              deep values they instilled continue to inspire us to create a
              platform that brings out the best versions of ourselves
              collectively, while we seek to serve our clients and further the
              cause of justice."
            </p>
          </blockquote>

          {/* Author & Signature */}
          <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mt-6">
            <div className="border border-yellow-500 w-28 h-28 rounded-full flex items-center justify-center p-1">
              <img
                src={auther}
                alt="Founder portrait"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <img
              src={signature}
              alt="Founder signature"
              className="w-36 sm:w-40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
