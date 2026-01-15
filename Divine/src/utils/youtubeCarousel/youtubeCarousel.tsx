import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';


export default function YoutubeCarousel() {



    return <>

        <Swiper
            spaceBetween={30}
            autoplay={true}
            freeMode={true}
            loop={true}
            speed={6000}
            modules={[FreeMode, Autoplay]}
            className="mySwiper my-20 review-swiper"
            breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3, },
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

            <SwiperSlide>
                <div className="border-2 bg-black border-(--secondaryColor) rounded-2xl overflow-hidden flex flex-col p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                    <div className="aspect-video w-full">
                        <iframe
                            className="w-full h-full rounded-xl"
                            src="https://www.youtube.com/embed/QKP7HqrgB3g?si=sR4dR-hsOuge83fr"
                            allowFullScreen
                        />
                    </div>
                </div>
            </SwiperSlide>

            <div className="my-10">
                <p className='text-center text-gray-500'>To view more, <a href="https://www.youtube.com/@divinecreators4752" target='_blank' className='text-gray-400'>click me</a> </p>
            </div>

        </Swiper>




    </>
}