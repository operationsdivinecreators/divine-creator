import { useState } from "react";
import logo from "/assets/logo/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-6xl
        rounded-2xl
        backdrop-blur
        border border-white/20
        shadow-lg
        bg-black/70
      "
    >
      <div className="flex items-center justify-between px-5 py-4">
        <img
          src={logo}
          alt="Divine Logo"
          className=""
          width="70"
          height="70"
        />

        <ul className="hidden md:flex gap-8 text-lg text-white">
          <li>
            <a
              className="hover:bg-amber-300 rounded p-2 hover:text-black transition cursor-pointer" href="/"
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="hover:bg-amber-300 rounded p-2 hover:text-black  transition cursor-pointer" href="/#process"
            >
              Our Process
            </a>
          </li>

          <li> <a
            className="hover:bg-amber-300 rounded p-2 hover:text-black  transition cursor-pointer" href="/#testimonial"
          >
            Testimonials
          </a></li>

          <li><Link
            className="hover:bg-amber-300 rounded p-2 hover:text-black transition cursor-pointer" to="/portfolio"
          >
            Portfolio
          </Link></li>

          <li><Link
            className="hover:bg-amber-300 rounded p-2 hover:text-black transition cursor-pointer" to="/contact"
          >
            Contact Us
          </Link></li>


        </ul>

        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          <RxHamburgerMenu color="white" size={40} />
        </button>
      </div>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-4 px-6 pb-6 text-white text-lg">
          <Link
            className="hover:text-amber-300 transition cursor-pointer"
            onClick={() => setOpen(false)} to="/"
          >
            Home
          </Link>
          <a
            className="hover:text-amber-300 transition cursor-pointer"
            onClick={() => setOpen(false)} href="/#process"
          >
            Our Process
          </a>
          <a
            className="hover:text-amber-300 transition cursor-pointer"
            onClick={() => setOpen(false)} href="/#testimonial"
          >
            Testimonials
          </a>
          <Link
            className="hover:text-amber-300 transition cursor-pointer"
            onClick={() => setOpen(false)} to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-amber-300 transition cursor-pointer"
            onClick={() => setOpen(false)} to="/contact"
          >
            Contact Us
          </Link>


        </ul>
      </div>
    </nav>
  );
}
