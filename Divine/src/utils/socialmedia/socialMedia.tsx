import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiThreadsFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { PiLineVerticalBold } from "react-icons/pi";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const icons = [
  {
    href: "https://www.facebook.com/Divinecreatorss/",
    Icon: RiFacebookCircleFill,
    label: "Facebook"
  },
  {
    href: "https://www.instagram.com/divinecreators_interiors/",
    Icon: RiInstagramFill,
    label: "Instagram"
  },
  {
    href: "https://wa.me/919895125225",
    Icon: RiWhatsappFill,
    label: "Whatsapp"
  },
  {
    href: "https://www.linkedin.com/company/divinecreators/",
    Icon: RiLinkedinBoxFill,
    label: "Linkedin"
  },
  {
    href: "https://www.threads.com/@divinecreators_interiors",
    Icon: RiThreadsFill,
    label: "Threads"
  },
  {
    href: "https://pin.it/2LFbUMy50",
    Icon: RiPinterestFill,
    label: "Pinterest"
  },
  {
    href: "https://www.youtube.com/@divinecreators4752",
    Icon: RiYoutubeFill,
    label: "Youtube"
  },
];

const SocialMediaIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.08,
        willChange: "transform, opacity",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const iconClass =
    "text-white hover:text-[var(--secondaryColor)] transition-colors duration-300";

  return (
    <div
      ref={containerRef}
      className="
        hidden items-center gap-4
        md:flex flex-col
      "
    >
      <div className="hidden md:flex">
        <PiLineVerticalBold color="#EBC34E" size={80} />
      </div>

      {icons.map(({ href, Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          aria-label={label}
        >
          <Icon size={40} className={iconClass} />
        </a>
      ))}

      <div className="hidden md:flex">
        <PiLineVerticalBold color="#EBC34E" size={80} />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
