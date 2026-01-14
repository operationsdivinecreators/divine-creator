import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';


export default function YoutubeCarousel() {



    return <>

        <Swiper
            spaceBetween={30}
            freeMode={false}
            loop={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper my-20 review-swiper"
            breakpoints={{
                0: { slidesPerView: 1},
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3,},
            }}

        >


            <SwiperSlide>
                <div className="border-2 bg-black border-(--secondaryColor) rounded-2xl overflow-hidden flex flex-col p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                    <div className="aspect-video w-full">
                        <iframe
                            className="w-full h-full rounded-xl"
                            src="https://www.youtube.com/embed/hnWAi5BeVhw"
                            allowFullScreen
                        />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="border-2 bg-black border-(--secondaryColor) rounded-2xl overflow-hidden flex flex-col p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                    <div className="aspect-video w-full">
                        <iframe
                            className="w-full h-full rounded-xl"
                            src="https://www.youtube.com/embed/xg-jMFxDUJU?si=A05gmOxCjgCvpkg1"
                            allowFullScreen
                        />
                    </div>
                </div>
            </SwiperSlide>


        </Swiper>


    </>
}