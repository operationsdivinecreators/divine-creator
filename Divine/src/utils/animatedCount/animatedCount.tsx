import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCount() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const countersRef = useRef<HTMLHeadingElement[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            countersRef.current.forEach((el) => {
                const endValue = Number(el.dataset.end);
                const suffix = el.dataset.suffix ?? "";

                const obj = { value: 0 };

                gsap.fromTo(
                    obj,
                    { value: 0 },
                    {
                        value: endValue,
                        duration: 2,
                        ease: "power1.out",
                        onUpdate: () => {
                            el.textContent = `${Math.floor(obj.value)}${suffix}`;
                        },
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            once: true, 
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex flex-col md:flex-row text-center gap-20 justify-between my-40"
        >
            <div className="flex flex-col">
                <h1
                    ref={(el) => {
                        if (el) countersRef.current.push(el);
                    }}
                    data-end="10"
                    data-suffix="+"
                    className="text-(--secondaryColor) font-bold text-7xl md:text-8xl"
                >
                    0+
                </h1>
                <h2>YEARS OF EXPERIENCE</h2>
            </div>

            <div className="flex flex-col">
                <h1
                    ref={(el) => {
                        if (el) countersRef.current.push(el);
                    }}

                    data-end="35"
                    data-suffix="+"
                    className="text-(--secondaryColor) font-bold text-7xl md:text-8xl"
                >
                    0+
                </h1>
                <h2>WORK IN PROGRESS</h2>
            </div>

            <div className="flex flex-col">
                <h1
                    ref={(el) => {
                        if (el) countersRef.current.push(el);
                    }}

                    data-end="250"
                    data-suffix="+"
                    className="text-(--secondaryColor) font-bold text-7xl md:text-8xl"
                >
                    0+
                </h1>
                <h2>SPACES TRANSFORMED</h2>
            </div>
        </section>
    );
}
