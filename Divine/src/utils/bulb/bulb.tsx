"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"

export default function Bulb() {
  const [isGlowing, setIsGlowing] = useState(false)
  const bulbRef = useRef<HTMLDivElement>(null)
  const flickerRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (bulbRef.current) {
      gsap.to(bulbRef.current, {
        rotation: 5,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "50% -120px",
      })
    }
  }, [])

  useEffect(() => {
    let flickerInterval: any
    if (isGlowing) {
      const flicker = () => {
        if (flickerRef.current) {
          const opacity = 0.3 + Math.random() * 0.7
          gsap.to(flickerRef.current, {
            opacity,
            duration: 0.05 + Math.random() * 0.1,
            onComplete: () => {
              flickerInterval = setTimeout(flicker, Math.random() * 200)
            },
          })
        }
      }
      flicker()
    } else {
      gsap.to(flickerRef.current, { opacity: 0, duration: 0.2 })
    }
    return () => clearTimeout(flickerInterval)
  }, [isGlowing])

  return (

    <>

      <div
        ref={bulbRef}
        className="absolute flex-col items-start -mt-3 hidden md:inline"
      >
        <button
          onClick={() => setIsGlowing(!isGlowing)}
          className="group relative cursor-pointer focus:outline-none"
          aria-label="Toggle hanging light"
        >
          {/* Wire */}
          <svg
            width="4"
            height="120"
            viewBox="0 0 4 120"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-30 left-1/2 -translate-x-1/2"
          >
            <path
              d="M2 0V120"
              stroke="#444"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <svg
            width="80"
            height="120"
            viewBox="0 0 80 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >

            {/* Socket */}
            <path d="M30 0H50V25C50 27.7614 47.7614 30 45 30H35C32.2386 30 30 27.7614 30 25V0Z" fill="#333" />
            <rect x="30" y="5" width="20" height="2" fill="#444" />
            <rect x="30" y="10" width="20" height="2" fill="#444" />
            <rect x="30" y="15" width="20" height="2" fill="#444" />

            {/* Glass Bulb */}
            <path
              d="M40 115C20.67 115 5 99.33 5 80C5 65.66 14.15 54.21 27 49.33V30H53V49.33C65.85 54.21 75 65.66 75 80C75 99.33 59.33 115 40 115Z"
              fill={isGlowing ? "rgba(253, 224, 71, 0.15)" : "rgba(255, 255, 255, 0.05)"}
              stroke={isGlowing ? "rgba(253, 224, 71, 0.5)" : "rgba(255, 255, 255, 0.1)"}
              strokeWidth="1.5"
            />

            {/* Filament (The glowing part) */}
            <path
              ref={flickerRef}
              d="M35 55L40 65L45 55L40 75L35 65L40 55"
              stroke={isGlowing ? "#FDBA47" : "#444"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300"
              style={{ filter: isGlowing ? "blur(1px) drop-shadow(0 0 8px #FDBA47)" : "none" }}
            />

          </svg>

          <div
            className={`
              absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full blur-[140px] pointer-events-none transition-opacity duration-700
              ${isGlowing ? "opacity-30 bg-(--secondaryColor)" : "opacity-0"}
            `}
          />
        </button>
      </div>
    </>
  )
}
