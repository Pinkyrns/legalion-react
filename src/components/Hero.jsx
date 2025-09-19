import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "../assets/video/hero.mp4"; // ✅ Import video

const slides = [
  {
    id: 1,
    title: "RELIABLE IT SUPPORT",
    subtitle: "We Have Driving Your Success With",
    description:
      "Take charge of your business continuity with innovative IT Solutions",
    button: "View IT Services",
    link: "#services",
  },
  {
    id: 2,
    title: "GET LEGAL HELP FROM US",
    subtitle: "NEED LEGAL SUPPORT?",
    description:
      "Professional legal consultation to protect your business & rights.",
    button: "Call Us",
    link: "#contact",
  },
  {
    id: 3, // 🔥 custom slide
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // Auto-play slides every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Slide 3 words cycle: "real." → "great."
  useEffect(() => {
    if (index === 2) {
      setWordIndex(0);
      const wordTimer = setTimeout(() => {
        setWordIndex(1);
      }, 2000); // after 2s switch to "great."
      return () => clearTimeout(wordTimer);
    }
  }, [index]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Slides */}
      <div className="relative flex items-center justify-center h-full z-20   ">
        <AnimatePresence mode="wait">
          {index === 2 ? (
            // ✅ Custom Slide 3
            <motion.div
              key="slide-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="text-left px-6 md:px-12 max-w-5xl  flex flex-col gap-5 "
            >
              {/* Title */}
              <h1 className="font-bold leading-tight mb-6 text-4xl md:text-6xl relative">
                <span style={{ color: "#e59040" }}>Make your</span>{" "}
                <span className="text-white">Consultation</span>{" "}
                <AnimatePresence mode="wait">
                  {wordIndex === 0 ? (
                    <motion.span
                      key="real"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.8 }}
                      style={{ color: "#e59040" }}
                    >
                      real.
                    </motion.span>
                  ) : (
                    <motion.span
                      key="great"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.8 }}
                      style={{ color: "#81DA34" }}
                    >
                      great.
                    </motion.span>
                  )}
                </AnimatePresence>
              </h1>

              {/* Description */}
              <p className="text-white text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
                Consulting Of Data Transformations, Business Due Diligence,
                Merger & Acquisitions, Application Modernizations
              </p>

              {/* Button */}
              <a
                href="#free-consultant"
                className="inline-block border-2 rounded-md font-medium transition  w-46"
                style={{
                  borderColor: "#e59040",
                  color: "#e59040",
                  padding: "0.8rem 2rem",
                  fontSize: "1rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e59040";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#e59040";
                }}
              >
                Free Consultant
              </a>
            </motion.div>
          ) : (
            // ✅ Normal Slides (1 & 2)
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="text-center px-4 md:px-8 max-w-3xl slide  flex flex-col gap-4 justify-center items-center"
            >
              {slides[index].subtitle && (
                <p className="text-base md:text-lg font-semibold text-white mb-4">
                  {slides[index].subtitle}
                </p>
              )}

              <h1
                className="font-bold drop-shadow-md mb-6"
                style={{
                  color: "#e59040",
                  fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
                  lineHeight: "1.2",
                }}
              >
                {slides[index].title}
              </h1>

              <p className="text-white text-sm md:text-lg mb-8 leading-relaxed">
                {slides[index].description}
              </p>

              <a
                href={slides[index].link}
                className="inline-block border-2 rounded-lg font-medium transition  " 
                style={{
                  borderColor: "#e59040",
                  color: "#e59040",
                  padding: "0.9rem 2.5rem",
                  fontSize: "1rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e59040";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#e59040";
                }}
              >
                {slides[index].button}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-[#e59040]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
