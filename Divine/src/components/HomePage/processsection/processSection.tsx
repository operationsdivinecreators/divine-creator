import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const steps = [
    {
        id: "01",
        title: "CONSULT WITH OUR DESIGN TEAM",
        description:
            "Every successful interior begins with understanding you. Our journey starts with a detailed consultation where our designers learn about your lifestyle, preferences, space requirements, and budget. Through discussions, mood boards, and initial 2D layouts, we align your vision with practical design solutions that reflect your personality and daily needs.",
        icon: '/assets/logo/process1.svg',
    },
    {
        id: "02",
        title: "FREE COST ESTIMATION",
        description:
            "Once the concept and layout are defined, we provide a clear and transparent cost estimate completely free of obligation. This helps you understand the budget from the start and allows you to make informed decisions with confidence. We ensure complete clarity so there are no hidden costs at any stage.",
        icon: '/assets/logo/process2.svg',
    },
    {
        id: "03",
        title: "DESIGN FINALIZATION & APPROVAL",
        description:
            "Your space comes to life with detailed 3D visualizations. From material selections and color schemes to finishes and fittings, every detail is carefully curated and presented for your approval. Execution begins only after your complete sign-off, ensuring the final outcome matches your expectations perfectly.",
        icon: '/assets/logo/process3.svg',
    },
    {
        id: "04",
        title: "EXECUTION & INSTALLATION",
        description:
            "With designs finalized, our expert team begins execution. From modular furniture and lighting to fittings and final finishes, every element is installed with precision and craftsmanship. Our project managers ensure seamless coordination, quality control, and timely progress throughout this phase.",
        icon: '/assets/logo/process4.svg',
    },
    {
        id: "05",
        title: "HANDOVER & MOVE-IN (45–90 DAYS)",
        description:
            "The final and most rewarding step moving into your beautifully designed home. Within 45–90 days, your interiors are completed with final styling touches to enhance both aesthetics and functionality. This marks the successful transformation of your vision into a living, breathing space crafted by Divine Creators.",
        icon: '/assets/logo/process5.svg',
    },
];

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".card",
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.3,
                    duration: 1,
                    ease: "sine3.out",
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
        <section className="px-4 md:px-16" ref={sectionRef} id="process">
            {/* Heading */}
            <div className="text-center font-bold mt-30 mb-30">
                <h1 className="text-[#c4a661] text-4xl md:text-5xl">Our Process</h1>
                <h2 className="text-2xl text-gray-300 mt-2">
                    Our Step by Step Interior Design Process
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-40 md:gap-y-0 relative">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`flex flex-col ${index % 2 === 0 ? "md:mb-32" : "md:mt-32"
                            } relative z-10`}
                    >
                        <div className="bg-[#0f0f0f] border-2 border-[#c4a661] rounded-xl p-8 relative group transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)] ">
                            <div className="flex justify-between items-start mb-6 card">
                                <img
                                    src={step.icon}
                                    alt={`Step ${step.id}`}
                                    className="w-20 h-20"
                                />
                                <div className="flex flex-col text-right ml-4">
                                    <span className="text-white/60 text-sm font-medium">
                                        Step :
                                    </span>
                                    <div className="text-white text-5xl font-bold leading-none">
                                        {step.id}
                                    </div>
                                    <h1 className="text-[#c4a661] text-xl font-bold mt-2 tracking-wide uppercase">
                                        {step.title}
                                    </h1>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-white/80 leading-relaxed text-sm card">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
