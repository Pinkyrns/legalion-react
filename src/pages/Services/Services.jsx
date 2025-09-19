import React, { useEffect, useState } from "react";
import practice31 from "../../assets/images/practice31.png";
import practice32 from "../../assets/images/practice32.png";
import practice33 from "../../assets/images/practice33.png";
// import practice34 from "../../assets/images/practice34.png";
// import practice35 from "../../assets/images/practice35.png";
import pra31 from "../../assets/images/practice31.svg";
import pra32 from "../../assets/images/practice32.svg";
import pra33 from "../../assets/images/practice33.svg";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Tech Contract Management",
      img: practice31,
      icon: pra31,
      desc: "We are a corporate compliance entity for your rightful protection and financial solution.",
    },
    {
      title: "Project Contract Management",
      img: practice32,
      icon: pra32,
      desc: "We are a corporate compliance entity for your rightful protection and financial solution.",
    },
    {
      title: "Corporate Legal",
      img: practice33,
      icon:pra33,
      desc: "We are a corporate compliance entity for your rightful protection and financial solution.",
    },
    // {
    //   title: "Family Law",
    //   img: "../../assets/images/practice34.png",
    //   icon: "../../assets/images/practice34.svg",
    //   desc: "We help clients solve family disputes with care and dedication.",
    // },
    // {
    //   title: "Criminal Defense",
    //   img: "../../assets/images/practice35.png",
    //   icon: "../../assets/images/practice35.svg",
    //   desc: "Expert defense for a wide range of criminal cases.",
    // },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0); // force re-animating

  // Auto-cycle every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % services.length);
      setAnimKey((prev) => prev + 1); // update key so animation restarts
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  // pick 3 services starting from startIndex
  const visibleServices = [
    services[startIndex],
    services[(startIndex + 1) % services.length],
    services[(startIndex + 2) % services.length],
  ];

  return (
    <section className="practice-area-section3">
      <div className="service-container">
        <div className="section-title">
          <h5>OUR SERVICES</h5>
          <h2>We Are Servicing On Various Fields For Longtime.</h2>
        </div>


{/* Mobile View */}
 <div className="slider-container">
          <div
            className="slider-wrapper"
            
          >
            {services.map((service, i) => (
              <div className="practice-single3" key={i}>
                <div className="practice-image">
                  <img src={service.img} alt={service.title} />
                  <div className="practice-icon">
                    <img src={service.icon} alt="icon" />
                  </div>
                </div>
                <div className="practice-content">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                  <a href="#" className="details-btn">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
{/* Desktop View */}
        <div className="services-grid">
          {visibleServices.map((service, i) => (
            <div
              className="practice-single3 slide-in"
              key={animKey + "-" + i} // re-trigger animation
              style={{ animationDelay: `${i * 0.3}s` }} // stagger effect
            >
              <div className="practice-image">
                <img src={service.img} alt={service.title} />
                <div className="practice-icon">
                  <img src={service.icon} alt="icon" />
                </div>
              </div>
              <div className="practice-content">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <a href="#" className="details-btn">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
