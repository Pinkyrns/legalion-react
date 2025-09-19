import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import attorney1 from "../../assets/images/attorney1.jpg";
import attorney2 from "../../assets/images/attorney2.png";
import attorney3 from "../../assets/images/attorney3.png";
import attorney4 from "../../assets/images/attorney4.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Team.css";
// custom CSS for desktop image sliding

const teamMembers = [
  { name: "Srittam Das", role: "Founder", image: attorney1 },
  { name: "Charles Caleb", role: "Family Lawyer", image: attorney2 },
  { name: "Anthony Dylan", role: "Criminal Lawyer", image: attorney3 },
  { name: "Ezra Gabriel", role: "Drug Offense Lawyer", image: attorney4 },
];

export default function TeamSlider() {
  const location = useLocation();
  const isTeamPage = location.pathname === "/team";
  return (
    <div className=" w-screen h-140    flex flex-col justify-center items-center box-border">
      <h2
        className="text-4xl font-bold mb-10 text-yellow-600 team-section-title"
        style={{ marginTop: isTeamPage ? "80px" : "0px" }}
      >
        Meet Our Team
      </h2>
      <div className="py-20 px-5 text-center w-[88%]  h-120      flex flex-row justify-center items-center">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={4000}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".banner3-next",
            prevEl: ".banner3-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-xl overflow-hidden  h-96 shadow-lg group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-slide-img w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-5 text-center">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm opacity-80 mb-3">{member.role}</p>
                  <ul className="flex justify-center gap-3 opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <li>
                      <a
                        href="https://facebook.com"
                        className="w-9 h-9 flex items-center justify-center bg-orange-500 rounded-full text-white hover:bg-gray-800"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        className="w-9 h-9 flex items-center justify-center bg-orange-500 rounded-full text-white hover:bg-gray-800"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        className="w-9 h-9 flex items-center justify-center bg-orange-500 rounded-full text-white hover:bg-gray-800"
                      >
                        <FaInstagramSquare />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com"
                        className="w-9 h-9 flex items-center justify-center bg-orange-500 rounded-full text-white hover:bg-gray-800"
                      >
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
