import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./Achievement.css"; // ✅ Import extra CSS file
import icon1 from "../assets/images/intro-icon1.svg"
import icon2 from "../assets/images/intro-icon2.svg"
import icon3 from "../assets/images/intro-icon3.svg"
import icon4 from "../assets/images/intro-icon4.svg"

const statsData = [
  { id: "01", img: icon1, alt: "Expert Teams Icon", value: 10, suffix: "+", text: "Expert Teams" },
  { id: "02", img: icon2, alt: "Happy Clients Icon", value: 200, suffix: "+", text: "Happy Client" },
  { id: "03", img: icon3, alt: "Case Completed Icon", value: 50, suffix: "+", text: "Case Completed" },
  { id: "04", img: icon4, alt: "Certification Icon", value: 100, suffix: "%", text: "Certification" },
];

const Achievement = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="intro-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-number ">{item.id}</span>
              <img src={item.img} alt={item.alt} />
              <h3>
                <CountUp start={0} end={item.value} duration={2} /> {item.suffix}
              </h3>
              <h5>{item.text}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
