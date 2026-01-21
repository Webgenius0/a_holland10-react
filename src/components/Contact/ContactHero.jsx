import React from 'react';
import { Facebook, Instagram, X } from "lucide-react";
import heroBg from "../../assets/images/Overly.png";

const ContactHero = () => {
    const socialIcons = [
        { icon: <Facebook size={22} />, link: "#" },
        { icon: <X size={20} />, link: "#" },
        { icon: <Instagram size={22} />, link: "#" },
        {
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.412c-1.935 0-3.83-.527-5.444-1.527l-.391-.233-4.053 1.063 1.085-3.953-.255-.406c-1.096-1.745-1.674-3.77-1.674-5.856 0-6.07 4.931-11.002 11.002-11.002 2.94 0 5.704 1.144 7.781 3.222 2.078 2.078 3.222 4.842 3.222 7.78 0 6.071-4.931 11.003-11.002 11.003m11.52-16.126c-2.314-2.313-5.391-3.587-8.66-3.587-6.746 0-12.235 5.489-12.235 12.235 0 2.156.562 4.262 1.63 6.108l-1.734 6.326 6.471-1.698c1.78.97 3.791 1.483 5.86 1.483 6.748 0 12.237-5.489 12.237-12.235 0-3.268-1.274-6.345-3.588-8.659" />
                </svg>
            ),
            link: "#"
        },
    ];

    return (
        <section className="relative w-full min-h-[500px] h-[70vh] flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${heroBg})`,
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl w-full flex flex-col gap-6">
                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#EDD191] leading-tight"
                    data-aos="fade-up"
                >
                    Contact Us
                </h1>
            </div>

            {/* Social Icons - Floating Right */}
            <div
                className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 z-20"
                data-aos="fade-left"
                data-aos-delay="500"
            >
                {socialIcons.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.link}
                        className="text-white opacity-70 hover:opacity-100 transition-all transform hover:scale-110"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <div className="w-[26px] h-[42px] border-2 border-white rounded-full flex justify-center p-1.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-dot" />
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
