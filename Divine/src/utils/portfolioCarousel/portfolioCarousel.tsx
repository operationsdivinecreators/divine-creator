import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface PortfolioCarouselProps {
  images: string[];
}

export default function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      {/* Main Carousel */}
      <Swiper
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-96 rounded-xl px-5"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Carousel */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Thumb ${index}`}
              loading="lazy"
              className=" cursor-pointer rounded-lg opacity-70 hover:opacity-100 h-20 w-full object-cover"
            />
          </SwiperSlide>

        ))}
      </Swiper>
    </>
  );
}
