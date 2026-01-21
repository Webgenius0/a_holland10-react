import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, X } from "lucide-react";
import heroBg from "../../assets/images/Overly.png";

/**
 * Custom Counter Component for "countdown/countup" style stats.
 */
const Counter = ({ target, duration = 2000, suffix = "", prefix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const targetValue = parseInt(target.replace(/[^0-9]/g, ''));

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const currentCount = Math.min(Math.floor((progress / duration) * targetValue), targetValue);

            setCount(currentCount);

            if (progress < duration) {
                window.requestAnimationFrame(animate);
            }
        };

        window.requestAnimationFrame(animate);
    }, [target, duration]);

    return (
        <span>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

/**
 * HomeHero component for the landing page.
 * Features a cinematic background, animated text, stats, and social icons.
 */
const HomeHero = () => {
    const stats = [
        { label: "Active Players", value: "10K+", target: "10", suffix: "K+" },
        { label: "Stallions", value: "500+", target: "500", suffix: "+" },
        { label: "Prize Pool", value: "$100K", target: "100", prefix: "$", suffix: "K" },
    ];

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
        <section className="relative w-full min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: ` url(${heroBg})`,
                }}
            />

            {/* Inner Glow Overlay */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" /> */}

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl w-full flex flex-col gap-6">
                <p
                    className="text-white opacity-80 font-medium tracking-widest uppercase text-sm md:text-base"
                    data-aos="fade-right"
                >
                    Welcome To Stallion
                </p>

                <h1
                    className="text-4xl md:text-6xl lg:text-[76px] font-bold text-[#EDD191] leading-[1.1]"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Build Your Stallion <br />
                    Fantasy League. Score <br />
                    From Real Races.
                </h1>

                <p
                    className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mt-2"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Pick 7 stallions, earn points from real racing, and compete all season.
                </p>

                <div
                    className="flex flex-wrap gap-4 mt-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <Button
                        size="lg"
                        className="bg-[#EDD191] text-black hover:bg-[#e0c485] font-bold px-8 py-6 text-lg rounded-[4px] transition-all hover:scale-105"
                    >
                        Create Account
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-[4px] transition-all hover:scale-105"
                    >
                        Login
                    </Button>
                </div>

                {/* Stats Section */}
                <div
                    className="flex flex-wrap gap-12 mt-16 pt-8 border-t border-white/10"
                    data-aos="fade-up"
                    data-aos-delay="800"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                            <span className="text-4xl md:text-5xl font-bold text-[#EDD191] mb-2 tracking-tight">
                                <Counter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                            </span>
                            <span className="text-white opacity-60 text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Icons - Floating Right */}
            <div
                className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 z-20"
                data-aos="fade-left"
                data-aos-delay="1000"
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

export default HomeHero;
