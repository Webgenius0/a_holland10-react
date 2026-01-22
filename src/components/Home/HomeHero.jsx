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
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M22.2282 20.625L22.9375 16H18.5V13C18.5 11.7344 19.1188 10.5 21.1063 10.5H23.125V6.5625C23.125 6.5625 21.2938 6.25 19.5438 6.25C15.8876 6.25 13.5 8.4656 13.5 12.475V16H9.4375V20.625H13.5V31.8063C14.3156 31.9344 15.15 32 16 32C16.85 32 17.6844 31.9344 18.5 31.8063V20.625H22.2282Z" fill="white" />
                </svg>
            ), link: "#"
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.2033 1.875H17.9599L11.9374 8.75833L19.0224 18.125H13.4749L9.12992 12.4442L4.15826 18.125H1.39992L7.84159 10.7625L1.04492 1.875H6.73326L10.6608 7.0675L15.2033 1.875ZM14.2358 16.475H15.7633L5.90326 3.43833H4.26409L14.2358 16.475Z" fill="white" />
            </svg>), link: "#"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0009 0C8.74184 0 8.33284 0.0142502 7.05282 0.0725002C5.77531 0.131 4.9033 0.33325 4.14029 0.63C3.35104 0.9365 2.68153 1.3465 2.01452 2.01375C1.34701 2.68075 0.93701 3.35025 0.629506 4.13925C0.332003 4.9025 0.129501 5.77475 0.0720008 7.05175C0.0150002 8.33175 0 8.741 0 12C0 15.259 0.0145004 15.6668 0.072501 16.9468C0.131252 18.2243 0.333504 19.0963 0.630007 19.8593C0.93676 20.6485 1.34676 21.318 2.01402 21.985C2.68078 22.6525 3.35029 23.0635 4.13904 23.37C4.90255 23.6667 5.77481 23.869 7.05207 23.9275C8.33209 23.9858 8.74084 24 11.9996 24C15.2589 24 15.6667 23.9858 16.9467 23.9275C18.2242 23.869 19.0972 23.6667 19.8607 23.37C20.6497 23.0635 21.3182 22.6525 21.985 21.985C22.6525 21.318 23.0625 20.6485 23.37 19.8595C23.665 19.0963 23.8675 18.224 23.9275 16.947C23.985 15.667 24 15.259 24 12C24 8.741 23.985 8.332 23.9275 7.052C23.8675 5.7745 23.665 4.9025 23.37 4.1395C23.0625 3.35025 22.6525 2.68075 21.985 2.01375C21.3175 1.34625 20.65 0.93625 19.86 0.63C19.095 0.33325 18.2224 0.131 16.9449 0.0725002C15.6649 0.0142502 15.2574 0 11.9974 0H12.0009ZM10.9244 2.1625C11.2439 2.162 11.6004 2.1625 12.0009 2.1625C15.2049 2.1625 15.5847 2.174 16.8499 2.2315C18.0199 2.285 18.6549 2.4805 19.0779 2.64475C19.638 2.86225 20.0372 3.12225 20.457 3.54225C20.877 3.96225 21.137 4.36225 21.355 4.92225C21.5192 5.34475 21.715 5.97975 21.7682 7.14975C21.8257 8.41475 21.8382 8.79475 21.8382 11.9972C21.8382 15.1997 21.8257 15.5798 21.7682 16.8448C21.7147 18.0148 21.5192 18.6497 21.355 19.0723C21.1375 19.6322 20.877 20.031 20.457 20.4508C20.037 20.8708 19.6382 21.1307 19.0779 21.3482C18.6554 21.5133 18.0199 21.7083 16.8499 21.7617C15.5849 21.8193 15.2049 21.8318 12.0009 21.8318C8.79659 21.8318 8.41684 21.8193 7.15182 21.7617C5.98181 21.7077 5.34681 21.5122 4.92355 21.348C4.36355 21.1305 3.96354 20.8705 3.54354 20.4505C3.12353 20.0305 2.86353 19.6315 2.64553 19.0713C2.48128 18.6488 2.28552 18.0138 2.23227 16.8438C2.17477 15.5787 2.16327 15.1988 2.16327 11.9943C2.16327 8.78975 2.17477 8.41175 2.23227 7.14675C2.28577 5.97675 2.48128 5.34175 2.64553 4.91875C2.86303 4.35875 3.12353 3.95875 3.54354 3.53875C3.96354 3.11875 4.36355 2.85875 4.92355 2.64075C5.34656 2.47575 5.98181 2.28075 7.15182 2.227C8.25884 2.177 8.68784 2.162 10.9244 2.1595V2.1625Z" fill="white" />
                    <path d="M18.3806 4.12552C18.0958 4.12552 17.8174 4.20999 17.5806 4.36824C17.3437 4.52649 17.1592 4.75142 17.0502 5.01457C16.9412 5.27773 16.9127 5.56729 16.9683 5.84664C17.0239 6.12598 17.1611 6.38257 17.3626 6.58393C17.564 6.7853 17.8206 6.92241 18.1 6.97791C18.3794 7.03342 18.6689 7.00483 18.9321 6.89577C19.1952 6.7867 19.42 6.60205 19.5782 6.36518C19.7364 6.12831 19.8208 5.84985 19.8207 5.56502C19.8207 4.77002 19.1756 4.12552 18.3806 4.12552Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9751 5.80802C8.57178 5.80802 5.81251 8.56727 5.81251 11.9705C5.81251 15.3738 8.57178 18.1318 11.9751 18.1318C15.3784 18.1318 18.1369 15.3738 18.1369 11.9705C18.1369 8.56727 15.3784 5.80802 11.9751 5.80802ZM12 15.9375C14.1746 15.9375 15.9375 14.1746 15.9375 12C15.9375 9.8254 14.1746 8.06252 12 8.06252C9.82538 8.06252 8.06251 9.8254 8.06251 12C8.06251 14.1746 9.82538 15.9375 12 15.9375Z" fill="white" />
                </svg>
            ), link: "#"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66493 17.596L0 23.675L6.22101 22.0437C7.93518 22.9785 9.86495 23.4711 11.8288 23.4719H11.8339C18.3015 23.4719 23.5664 18.2085 23.5692 11.7405C23.5703 8.60555 22.3505 5.65813 20.1352 3.44064C17.9193 1.22315 14.9729 0.00153117 11.8339 0C5.36514 0 0.101099 5.2625 0.098467 11.731C0.0978082 13.7986 0.638059 15.817 1.66493 17.596ZM2.07991 11.7316C2.08188 6.35549 6.45732 1.98164 11.8376 1.98164C14.443 1.98274 16.8918 2.99815 18.7334 4.84112C20.575 6.68408 21.5886 9.13411 21.5876 11.7395C21.5854 17.1161 17.21 21.4904 11.8338 21.4904H11.8301C10.0795 21.4895 8.3629 21.0197 6.86567 20.131L6.50919 19.9198L2.8175 20.8877L3.80311 17.2898L3.57101 16.9209C2.59469 15.3683 2.07911 13.5739 2.07991 11.7316Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.90095 6.82654C8.68116 6.33838 8.44994 6.32849 8.24114 6.31991C8.07014 6.31266 7.87452 6.3131 7.67913 6.3131C7.48351 6.3131 7.16591 6.38651 6.89733 6.67993C6.62852 6.97336 5.8709 7.68263 5.8709 9.12535C5.8709 10.5681 6.92172 11.962 7.0681 12.1578C7.21471 12.3534 9.09657 15.4086 12.0772 16.5838C14.554 17.5606 15.058 17.3663 15.5958 17.3175C16.1334 17.2687 17.3307 16.6082 17.5748 15.9235C17.8193 15.2389 17.8193 14.6523 17.7461 14.5296C17.6727 14.4072 17.4773 14.334 17.1838 14.1874C16.8906 14.0408 15.449 13.3313 15.1802 13.2335C14.9114 13.1357 14.716 13.0869 14.5204 13.3803C14.325 13.6737 13.7634 14.334 13.5922 14.5296C13.4212 14.7254 13.2502 14.7498 12.9568 14.6032C12.6636 14.4562 11.7191 14.147 10.5989 13.148C9.72716 12.3708 9.13877 11.411 8.96755 11.1176C8.79655 10.8241 8.94931 10.6654 9.09635 10.5193C9.228 10.3878 9.38955 10.1768 9.53638 10.0056C9.68254 9.8344 9.73155 9.7122 9.82914 9.5168C9.92695 9.32097 9.87815 9.14975 9.80474 9.00314C9.73155 8.85654 9.16163 7.40635 8.90095 6.82654Z" fill="white" />
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
                className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-8 z-20"
                data-aos="fade-left"
                data-aos-delay="1000"
            >
                {socialIcons.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.link}
                        className="text-white  transition-all transform hover:scale-110"
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
