import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCount from "../../../utils/animatedCount/animatedCount";

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const imageLeftRef = useRef<HTMLImageElement | null>(null);
    const imageRightRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageLeftRef.current,
                { y: -120, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "sine.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
            gsap.fromTo(
                imageRightRef.current,
                { y: 120, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "sine.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>

            <section id="about">
                <div className="my-32" ref={sectionRef}>
                    <h1 className="text-(--secondaryColor) text-4xl md:text-5xl mb-12 font-bold text-center md:text-start">
                        About us
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 items-center text-center">
                        <img
                            src="https://res.cloudinary.com/dez4snjqf/image/upload/f_auto,q_auto/v1767332626/contactimg_u3rf6c.png"
                            alt="About image 1"
                            className="aspect-3/4 w-full object-cover rounded-2xl"
                            ref={imageLeftRef}
                            loading="lazy"
                        />


                        <div
                            className="aspect-3/4 flex items-center px-4 md:px-0"
                        >
                            <p className="text-xl font-bold leading-relaxed">
                                Welcome to
                                <span className="text-(--secondaryColor)"> Divine Creators</span>, the
                                premier interior design studio renowned for the best interior
                                designing in Trivandrum. We specialize in transforming your vision
                                into beautifully crafted spaces that reflect your style and
                                personality.
                            </p>
                        </div>

                        <div className="md:translate-y-24">
                            <img
                                src="https://res.cloudinary.com/dez4snjqf/image/upload/f_auto,q_auto/v1767332616/aboutimg2_pd4hwh.png"
                                alt="About image 2"
                                className="aspect-3/4 w-full object-cover rounded-2xl"
                                ref={imageRightRef}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <AnimatedCount />
            </section>
        </>

    );
};

export default AboutSection;
