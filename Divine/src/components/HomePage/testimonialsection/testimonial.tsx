import ReviewCarousel from "../../../utils/reviewCarousel/reviewCarousel";
import YoutubeCarousel from "../../../utils/youtubeCarousel/youtubeCarousel";


export default function TestimonialSection() {

    

    return <>
        <section id="testimonial">
            <div className="text-center my-30">
                <h1 className="font-bold text-4xl md:text-5xl text-(--secondaryColor)">Testimonials</h1>
            </div>
            <div>
                <ReviewCarousel/>
            </div>
            <div>
                <YoutubeCarousel/>
            </div>
        </section>
    </>
}