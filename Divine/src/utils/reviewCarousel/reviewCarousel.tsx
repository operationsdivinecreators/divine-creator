import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';




interface Review {
    reviewId: string;
    author: string;
    text: string;
    rating: number;
    profilePhoto: string;
    time: string;
    googleMapsUri: string;
    flagContentUri: string;
}



export default function ReviewCarousel() {

    const [review, setReview] = useState<Review[]>([]);
    useEffect(() => {
        async function fetchReviews() {
            const res = await fetch("/.netlify/functions/googleReview");
            const data = await res.json();

            const mappedReviews = data.data.reviews?.map((r: any, index: number) => ({
                reviewId: String(index),
                author: r.authorAttribution?.displayName || "Anonymous",
                text: r.text?.text || "",
                rating: r.rating || 0,
                profilePhoto: r.authorAttribution?.photoUri || "",
                time: "",
                googleMapsUri: "",
                flagContentUri: "",
            }));

            setReview(mappedReviews || []);
        }

        fetchReviews();
    }, []);


    return <>

        <Swiper
            spaceBetween={30}
            freeMode={true}
            navigation
            loop={true}
            speed={6000}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper my-20 review-swiper"
            breakpoints={{
                0: { slidesPerView: 1, loop: review.length > 1 },
                768: { slidesPerView: 2, loop: review.length > 2 },
                1024: { slidesPerView: 3, loop: review.length > 3 },
            }}

        >


            {review.map((data, index) => (
                <SwiperSlide key={index}>
                    <div className="border-2 bg-black border-(--secondaryColor) rounded-2xl overflow-hidden flex flex-col p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                        <div className='flex justify-start items-center'>
                            <img
                                src={data.profilePhoto}
                                alt={data.author}
                                className="w-12 h-12 object-cover rounded-full"
                            />



                            <h1 className="p-5 text-center text-xl font-semibold text-(--secondaryColor)">{data.author}</h1>
                        </div>
                        <p className="text-start text-sm md:text-base my-3">
                            {data.text.slice(0, 100)}...
                        </p>


                        <p className="place-content-center mb-3 flex">
                            {[...Array(data.rating)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            ))}
                        </p>



                    </div>

                </SwiperSlide>
            ))}
        </Swiper>


    </>
}