import { useEffect, useRef } from "react";
import gsap from "gsap";

import SocialMediaIcons from "../../../utils/socialmedia/socialMedia";
import HeroCarousel from "../../../utils/carousel/heroCarousel";

const HeroSection: React.FC = () => {
    const textBlockRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = textBlockRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.from(el.children, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.25,
                willChange: "transform, opacity",
            });
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section className="container mx-auto px-4" id="home">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                <div className="flex gap-4">
                    <SocialMediaIcons />
                </div>
                
                <div
                    ref={textBlockRef}
                    className="flex flex-col gap-6 text-center md:text-left max-w-xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Shape Your Living <br />
                        Space With <br />
                        <span className="text-(--secondaryColor)">Signature Style </span>
                        and <br />
                        <span className="text-(--secondaryColor)">Perfection</span>
                    </h1>

                    <h2 className="text-lg md:text-xl font-shadow">
                        “Where Ideas Take Shape”
                    </h2>

                    <div>
                        <button className="btn-primary">Explore More</button>
                    </div>
                </div>

                <div className=" max-w-md flex justify-center">
                    <div
                        className="w-full max-w-[320px] md:max-w-none object-contain will-change-transform"
                    >
                    <HeroCarousel/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
