import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';


export default function YoutubeCarousel() {



    return <>

        <Swiper
            spaceBetween={30}
            freeMode={false}
            navigation
            loop={true}
            speed={6000}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper my-20 review-swiper"


        >


            <SwiperSlide>
                <div className="border-2 bg-black border-(--secondaryColor)s rounded-2xl p-4">
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
                <div className="border-2 bg-black border-(--secondaryColor)s rounded-2xl p-4">
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