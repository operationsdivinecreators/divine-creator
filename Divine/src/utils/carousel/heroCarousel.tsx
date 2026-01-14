"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";


const HeroCarousel: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      
      modules={[Navigation, Autoplay]}
      className="w-full h-full absolute inset-0"
    >
      {[1, 2, 3].map((_, i) => (
        <SwiperSlide key={i}>
          <img
            src="https://res.cloudinary.com/dez4snjqf/image/upload/f_auto,q_auto/v1767332626/heroImg_n0zg4n.png"
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover rounded-2xl"
            loading="eager"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
