

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//   {
//     id: 1,
//     name: "Jenny Wilson",
//     location: "New York, America",
//     image: "https://i.pravatar.cc/150?img=1",
//     text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted and made me feel so comfortable."
//   },
//   {
//     id: 2,
//     name: "Esther Howard",
//     location: "New York, America",
//     image: "https://i.pravatar.cc/150?img=2",
//     text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted and made me feel so comfortable."
//   },
//   {
//     id: 3,
//     name: "Wade Warren",
//     location: "New York, America",
//     image: "https://i.pravatar.cc/150?img=3",
//     text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted and made me feel so comfortable."
//   },
//   {
//     id: 4,
//     name: "Cody Fisher",
//     location: "Los Angeles, USA",
//     image: "https://i.pravatar.cc/150?img=4",
//     text: "Such a wonderful experience! Everyone was super friendly and made me feel valued as a client."
//   },
//   {
//     id: 5,
//     name: "Jane Cooper",
//     location: "Chicago, USA",
//     image: "https://i.pravatar.cc/150?img=5",
//     text: "Amazing service and great atmosphere. I’ll definitely be coming back again!"
//   }
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-16 bg-gray-900 text-center  h-[356px] ">
//       {/* Section Title */}
//       <h5 className="text-gray-500 uppercase tracking-widest">Testimonials</h5>
//       <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">
//         What Our Client Say!
//       </h2>
//    <div className="paging bg-amber-200  h-[88%] w-[90%]  rounded-2xl p-8 ">
//       {/* Swiper */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 1 }, // Mobile
//           768: { slidesPerView: 2 }, // Tablet
//           1024: { slidesPerView: 3 } // Desktop
//         }}
//       >
//         {testimonials.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="bg-white shadow-lg rounded-2xl p-6 h-full flex flex-col justify-between">
//               <FaQuoteLeft className="text-purple-500 text-3xl mb-4" />
//               <p className="text-gray-600 text-sm mb-6 flex-grow">{item.text}</p>

//               <div className="flex items-center gap-6 mt-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full border"
//                 />
//                 <div className="text-left">
//                   <h4 className="font-semibold">{item.name}</h4>
//                   <p className="text-gray-500 text-sm">{item.location}</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const testimonials = [
//   {
//     id: 1,
//     text: 'I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.',
//     name: 'Jenny Wilson',
//     location: 'New York, America',
//     avatar: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?w=500&auto=format&fit=crop',
//   },
//   {
//     id: 2,
//     text: 'I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.',
//     name: 'Esther Howard',
//     location: 'New York, America',
//     avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd86?w=500&auto=format&fit=crop',
//   },
//   {
//     id: 3,
//     text: 'I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.',
//     name: 'Wade Warren',
//     location: 'New York, America',
//     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop',
//   },
//   {
//     id: 4,
//     text: 'I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.',
//     name: 'Jane Doe',
//     location: 'California, USA',
//     avatar: 'https://images.unsplash.com/photo-1521572072828-1b6e4e5491f2?w=500&auto=format&fit=crop',
//   },
// ];

// const TestimonialCarousel = () => {
//   return (
//     <div className="bg-white py-12 px-4 font-sans max-w-7xl mx-auto">
//       <div className="text-center mb-10">
//         <h3 className="text-gray-500 uppercase tracking-widest text-sm font-semibold">TESTIMONIALS</h3>
//         <h2 className="text-4xl md:text-5xl font-serif mt-2 text-gray-800">What Our Client Say!</h2>
//       </div>
//       <div className="relative">
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           centeredSlides={true}
//           loop={true}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           pagination={{ clickable: true, el: '.swiper-pagination' }}
//           className="mySwiper !pb-12"
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//           onSlideChange={(swiper) => {
//             // This is for handling the opacity and scale
//             const slides = swiper.slides;
//             slides.forEach((slide) => {
//               slide.style.opacity = '0.5';
//               slide.style.transform = 'scale(0.9)';
//             });
//             const activeSlide = slides[swiper.activeIndex];
//             if (activeSlide) {
//               activeSlide.style.opacity = '1';
//               activeSlide.style.transform = 'scale(1)';
//             }
//           }}
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               {({ isActive }) => (
//                 <div
//                   className={`bg-white p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 transform ${
//                     isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
//                   }`}
//                 >
//                   <svg
//                     className="w-10 h-10 text-purple-600 mb-4"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M11 11.233c0-3.155-2.585-5.742-5.74-5.742C2.107 5.491.01 7.587.01 11.233h3.587c0-1.78.966-2.924 2.155-3.053 1.189-.129 2.053 1.258 2.053 3.053H5.74c0 3.155 2.585 5.74 5.74 5.74s5.74-2.585 5.74-5.74h-3.587zm9.648-5.742c-3.155 0-5.742 2.587-5.742 5.742h3.587c0-1.78.966-2.924 2.155-3.053 1.189-.129 2.053 1.258 2.053 3.053h-3.587c0 3.155 2.585 5.74 5.74 5.74s5.74-2.585 5.74-5.74z"></path>
//                   </svg>
//                   <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-serif">
//                     {testimonial.text}
//                   </p>
//                   <div className="flex items-center">
//                     <img
//                       src={testimonial.avatar}
//                       alt={testimonial.name}
//                       className="w-12 h-12 rounded-full mr-4 object-cover"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
//                       <p className="text-sm text-gray-500">{testimonial.location}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md cursor-pointer transition-colors duration-300 hover:bg-gray-100 flex items-center justify-center -ml-4 md:-ml-8">
//           <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//           </svg>
//         </div>
//         <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md cursor-pointer transition-colors duration-300 hover:bg-gray-100 flex items-center justify-center -mr-4 md:-mr-8">
//           <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//           </svg>
//         </div>
//         <div className="swiper-pagination flex justify-center mt-8 space-x-2"></div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;



// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const TestimonialCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.",
//       name: "Jenny Wilson",
//       location: "New York, America",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
//     },
//     {
//       id: 2,
//       text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.",
//       name: "Esther Howard",
//       location: "New York, America",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
//     },
//     {
//       id: 3,
//       text: "I absolutely love this salon! From the warm welcome to the final look, everything was perfect. The staff really listened to what I wanted feel so comfortable.",
//       name: "Wade Warren",
//       location: "New York, America",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
//     },
//     {
//       id: 4,
//       text: "Amazing experience from start to finish! The attention to detail and personalized service exceeded my expectations. I'll definitely be coming back!",
//       name: "Sarah Johnson",
//       location: "Los Angeles, America",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
//     },
//     {
//       id: 5,
//       text: "Professional service with a personal touch. The team here really knows how to make you feel special and valued as a client.",
//       name: "Michael Brown",
//       location: "Chicago, America",
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format&q=80"
//     }
//   ];

//   // Auto-slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const getVisibleCards = () => {
//     const cards = [];
//     for (let i = 0; i < 3; i++) {
//       const index = (currentSlide + i) % testimonials.length;
//       cards.push(testimonials[index]);
//     }
//     return cards;
//   };

//   return (
//     <div className="w-screen bg-blue-500 py-16 px-4 h-[24rem]">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-4">
//             TESTIMONIALS
//           </p>
//           <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
//             What Our Client Say!
//           </h2>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative text-center max-w-6xl h-[18rem] bg-amber-500 left-20 right-20">
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//             style={{ marginLeft: '-20px' }}
//           >
//             <ChevronLeft className="w-9 h-9 text-gray-600" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//             style={{ marginRight: '-20px' }}
//           >
//             <ChevronRight className="w-9 h-9 text-gray-600" />
//           </button>

//           {/* Cards Container */}
//           <div className="overflow-hidden">
//             {/* Mobile View - 1 card */}
//             <div className="block md:hidden">
//               <div className="bg-white rounded-2xl p-8 shadow-lg mx-4 transition-all duration-500">
//                 <Quote className="w-8 h-8 text-purple-400 mb-6" />
//                 <p className="text-gray-700 text-lg leading-relaxed mb-8">
//                   {testimonials[currentSlide].text}
//                 </p>
//                 <div className="flex items-center">
//                   <img
//                     src={testimonials[currentSlide].avatar}
//                     alt={testimonials[currentSlide].name}
//                     className="w-16 h-16 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-900 text-lg">
//                       {testimonials[currentSlide].name}
//                     </h4>
//                     <p className="text-gray-500 text-sm">
//                       {testimonials[currentSlide].location}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tablet View - 2 cards */}
//             <div className="hidden md:block lg:hidden">
//               <div className="flex gap-6 justify-center">
//                 {getVisibleCards().slice(0, 2).map((testimonial, index) => (
//                   <div
//                     key={testimonial.id}
//                     className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 flex-1 max-w-md ${
//                       index === 0 ? 'scale-100 opacity-100' : 'scale-95 opacity-75'
//                     }`}
//                   >
//                     <Quote className="w-8 h-8 text-purple-400 mb-6" />
//                     <p className="text-gray-700 text-lg leading-relaxed mb-8">
//                       {testimonial.text}
//                     </p>
//                     <div className="flex items-center">
//                       <img
//                         src={testimonial.avatar}
//                         alt={testimonial.name}
//                         className="w-16 h-16 rounded-full object-cover mr-4"
//                       />
//                       <div>
//                         <h4 className="font-semibold text-gray-900 text-lg">
//                           {testimonial.name}
//                         </h4>
//                         <p className="text-gray-500 text-sm">
//                           {testimonial.location}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Desktop View - 3 cards */}
//             <div className="hidden lg:block">
//               <div className="flex gap-6 justify-center items-stretch">
//                 {getVisibleCards().map((testimonial, index) => (
//                   <div
//                     key={testimonial.id}
//                     className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 flex-1 max-w-sm ${
//                       index === 1
//                         ? 'scale-105 opacity-100 shadow-xl'
//                         : 'scale-95 opacity-75'
//                     }`}
//                   >
//                     <Quote className="w-8 h-8 text-purple-400 mb-6" />
//                     <p className="text-gray-700 text-lg leading-relaxed mb-8">
//                       {testimonial.text}
//                     </p>
//                     <div className="flex items-center">
//                       <img
//                         src={testimonial.avatar}
//                         alt={testimonial.name}
//                         className="w-16 h-16 rounded-full object-cover mr-4"
//                       />
//                       <div>
//                         <h4 className="font-semibold text-gray-900 text-lg">
//                           {testimonial.name}
//                         </h4>
//                         <p className="text-gray-500 text-sm">
//                           {testimonial.location}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-12 space-x-3">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentSlide
//                     ? 'bg-purple-500 scale-125'
//                     : 'bg-gray-300 hover:bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;



import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight,  } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import './testimonial.css'  


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
