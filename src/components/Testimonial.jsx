import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight,  } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import './Testimonial.css'  


const TestimonialCard = ({ testimonial, highlight }) => (
  <div
    className={`bg-white rounded-2xl p-8 shadow-lg  transform transition-all duration-700 ease-in-out flex-1 max-w-sm  mr-4 ml-4 mt-3 mb-3
      ${highlight ? "scale-105 opacity-100 shadow-xl" : "scale-95 opacity-75"}`}
  >
    <FaQuoteLeft className="w-8 h-8 text-purple-400 mb-6"/>
    <p className="text-gray-700 text-lg leading-relaxed mb-8">
      {testimonial.text}
    </p>
    <div className="flex items-center   gap-12">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-semibold text-gray-900 text-lg">
          {testimonial.name}
        </h4>
        <p className="text-gray-500 text-sm">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.",
      name: "Jenny Wilson",
      location: "New York, America",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
    },
    {
      id: 2,
      text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.",
      name: "Esther Howard",
      location: "New York, America",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
    },
    {
      id: 3,
      text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.",
      name: "Wade Warren",
      location: "New York, America",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
    },
    {
      id: 4,
      text: "Amazing experience from start to finish! The attention to detail and personalized service exceeded my expectations. I'll definitely be coming back!",
      name: "Sarah Johnson",
      location: "Los Angeles, America",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
    },
    {
      id: 5,
      text: "Professional service with a personal touch. The team here really knows how to make you feel special and valued as a client.",
      name: "Michael Brown",
      location: "Chicago, America",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
    },
  ];

  // Auto-slide with pause on hover
  useEffect(() => {
    if (isHovered) return; // pause auto-slide
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      cards.push(testimonials[index]);
    }
    return cards;
  };

  return (
    <div className="w-screen  py-16 px-4 h-[28rem] ">
      <div className="max-w-7xl mx-auto max-sm:w-[89%] ">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm  text-black-900 font-bold tracking-wide uppercase mb-12">
            TESTIMONIALS
          </p>
          <h2 className=" md:text-4xl  testimonial-section-title">
            What Our Clients Say!
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative grid grid-cols-1     text-center max-w-7xl    mx-auto h-[21rem] bg-gray-50 place-items-center  left-9 gap-2 rounded-2xl  "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-9 h-9 text-orange-500 border-2 rounded-full" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-9 h-9  text-orange-500 border-2 rounded-full" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden      ">
            {/* Mobile View - 1 card */}
            <div className="block md:hidden ">
              <TestimonialCard testimonial={testimonials[currentSlide]} highlight />
            </div>

            {/* Tablet View - 2 cards */}
            <div className="hidden md:block lg:hidden">
              <div className="flex gap-6 justify-center">
                {getVisibleCards()
                  .slice(0, 2)
                  .map((testimonial, index) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      highlight={index === 0}
                    />
                  ))}
              </div>
            </div>

            {/* Desktop View - 3 cards */}
            <div className="hidden lg:block">
              <div className="flex gap-6 justify-center items-stretch place-items-center ">
                {getVisibleCards().map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    highlight={index === 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className=" flex justify-center mt-12 gap-1 space-x-3  ">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "bg-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
