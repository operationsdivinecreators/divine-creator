import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import GoogleMaps from "../gmaps/gmaps";
import { FaLocationDot } from "react-icons/fa6";

export default function FindOffice() {

    return <> 
    <GoogleMaps />
        <div className="justify-items-center my-20">
            <h1 className="text-(--secondaryColor) text-3xl md:text-5xl font-bold text-center">TRUST AND RECOMMEND</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mx-10">

            {/* Contact */}
            <div className="w-[320px] h-50 border-2 rounded-2xl p-6 bg-[#C58D2E]
                  flex transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                <div className="flex flex-col justify-center items-center text-center gap-3 w-full h-full">
                    <div className="flex items-center gap-3">
                        <RiPhoneFill className="text-black text-xl" />
                        <h1 className="font-semibold text-lg text-black">Contact Number</h1>
                    </div>
                    <p className="text-base font-light text-black">+91 9895125225</p>
                </div>
            </div>

            {/* Email */}
            <div className="w-[320px] h-50 border-2 rounded-2xl p-6 bg-[#C58D2E]
                  flex transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                <div className="flex flex-col justify-center items-center text-center gap-3 w-full h-full">
                    <div className="flex items-center gap-3">
                        <RiMailFill className="text-black text-xl" />
                        <h1 className="font-semibold text-lg text-black">Email Address</h1>
                    </div>
                    <p className="text-base font-light break-all text-black">
                        info@divinecreators.in
                    </p>
                </div>
            </div>

            {/* Address */}
            <div className="w-[320px] h-50 border-2 rounded-2xl p-6 bg-[#C58D2E]
                  flex transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,97,0.6)]">
                <div className="flex flex-col justify-center items-center text-center gap-3 w-full h-full">
                    <div className="flex items-center gap-3">
                        <FaLocationDot className="text-black text-2xl" />
                        <h1 className="font-semibold text-lg text-black">Address</h1>
                    </div>
                    <p className="text-sm leading-relaxed font-light text-black">
                        GX5P+5XW, PTP Nagar RD,<br />
                        Thiruvananthapuram,<br />
                        Kerala 695038
                    </p>
                </div>
            </div>

        </div>




    </>
}