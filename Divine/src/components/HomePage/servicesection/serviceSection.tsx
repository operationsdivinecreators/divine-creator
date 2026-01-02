import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSection() {

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".card",
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.25,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);






    return <>
        <section id="services" ref={sectionRef}>
            <h1 className="text-(--secondaryColor) text-4xl md:text-5xl my-30 font-bold text-center">
                Our Services
            </h1>
            <div
                className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <div className="border-2 rounded-2xl overflow-hidden flex flex-col p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                    <div className='card'>
                        <img
                            src="https://res.cloudinary.com/dez4snjqf/image/upload/f_auto,q_auto/v1767332616/servicecard1_ujq3wn.png"
                            alt="Basic Package"
                            className="w-full aspect-4/3 object-cover rounded-2xl"
                            loading="lazy"
                        />


                        <h1 className="p-5 text-center text-xl font-semibold text-(--secondaryColor)">BASIC</h1>
                        <p className="text-center text-sm md:text-base">
                            This package includes two 3-door wardrobes, kitchen base and wall
                            cabinets with 6 accessories, and a TV unit.
                        </p>
                    </div>


                </div>

                <div className="border-2 rounded-2xl overflow-hidden flex flex-col p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                    <div className="card">
                        <img
                            src="https://res.cloudinary.com/dez4snjqf/image/upload/f_auto,q_auto/v1767332616/servicecard2_euonsw.png"
                            alt="Standard Package"
                            className="w-full aspect-4/3 object-cover rounded-2xl"
                            loading="lazy"
                        />
                        <h1 className="p-5 text-center font-semibold text-(--secondaryColor)">BASIC WITH FURNITURE</h1>
                        <p className="text-center text-sm md:text-base">
                            This Package includes basic units and furniture including two numbers of queen size bed, dining set & sofa set
                        </p>
                    </div>

                </div>

                <div className="border-2 rounded-2xl overflow-hidden flex flex-col p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                    <div className="card">
                        <img
                            src="https://res.cloudinary.com/dez4snjqf/image/upload/f_auto,q_auto/v1767332617/servicecard3_ljk5rc.png"
                            alt="Premium Package"
                            className="w-full aspect-4/3 object-cover rounded-2xl"
                            loading="lazy"
                        />
                        <h1 className="p-5 text-center font-semibold text-(--secondaryColor)">LUXURY</h1>
                        <p className="text-center text-sm md:text-base">
                            This Package includes basic units, furniture and the decor pieces that elevate your interior spaces
                        </p>
                    </div>
                </div>
            </div>

        </section>
    </>
}