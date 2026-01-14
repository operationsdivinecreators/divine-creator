import {
    RiMailFill, RiPhoneFill, RiFacebookCircleFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiPinterestFill,
    RiThreadsFill,
    RiWhatsappFill,
    RiYoutubeFill,
} from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';
import logo from "/assets/logo/logo.png";

export default function Footer() {

    const iconClass =
        "text-white hover:text-[var(--secondaryColor)] transition-colors duration-300";

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


    return <>
        <section className="bg-black p-10">
            <div className="flex flex-col gap-10 justify-evenly md:flex-row">
                <div className="">
                    <img src={logo} alt="logo" width="100" height="100" />
                    <h1 className='font-bold'>Ready to Design Your Dream Space Together?</h1>
                    <h2 className='font-thin'>Create Inspiring Spaces with Divine Creators – Your go to team for stylish, functional, and affordable interior design in Trivandrum.</h2>
                </div>
                <div className="flex-col">
                    <div className="my-5">
                        <div className='flex gap-3 items-center'>
                            <RiPhoneFill color='#EBC34E' />
                            <p>Call Us</p>
                        </div>
                        <a className='text-(--secondaryColor)' href='tel:9895125225'>+91 9895125225</a>
                    </div>
                    <div className="my-3">
                        <div className='flex gap-3 items-center'>
                            <RiMailFill color='#EBC34E' />
                            <p>Email Us</p>
                        </div>
                        <a className='text-(--secondaryColor)' href='mailto:info@divinecreators.in<'>info@divinecreators.in</a>
                    </div>
                    <div className="my-3">
                        <div className="flex gap-3 items-center">
                            <FaLocationDot color='#EBC34E' />
                            <p>Our Location</p>
                        </div>
                        <a className='text-(--secondaryColor)' href='https://maps.app.goo.gl/V73hS4fxBoFNK5sj7' target='_blank'>GX5P+5XW, PTP Nagar RD, Vettamukku, Thirumala, Thiruvananthapuram, Kerala 695038</a>
                    </div>
                </div>
                <div className="">
                    <div>
                        <div className="input-grp flex gap-3 justify-center">
                            <input type="email" className='bg-white rounded-xl text-black p-3' placeholder='example@gmail.com' />
                            <button className='btn-primary p-2'>Submit</button>
                        </div>
                        <div className='flex gap-3 justify-center mt-10 items-center'>
                            <RiWhatsappFill color='#EBC34E' size={30} />
                            <a className='text-(--secondaryColor)' href='tel:9895125225'>+91 9895125225</a>
                        </div>

                        <div className="flex flex-row items-center gap-3 mt-10 justify-center">
                            {icons.map(({ href, Icon ,label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    className="flex items-center"
                                    aria-label={label}
                                >
                                    <Icon size={30} className={iconClass} />
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <hr className='text-neutral-400 mt-5 md:mt-0' />
            <div className='text-center font-extralight text-neutral-400 text-sm mt-2'>Crafted with ❤️ <a href="https://cloudforest.info/" target='_blank'> Cloud Forest Innovations</a></div>
        </section>


    </>
}