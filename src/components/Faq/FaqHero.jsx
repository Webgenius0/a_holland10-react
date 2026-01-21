import React from 'react';
import { Search } from 'lucide-react';
import faqOverlay from '../../assets/images/faqOverlay.png'

const FaqHero = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 bg-[#06211B] overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
                <img src={faqOverlay} alt="FAQ Overlay" className="w-full h-full object-cover" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-2xl w-full flex flex-col gap-8">
                <div className="flex flex-col gap-2" data-aos="fade-right">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#EDD191] leading-[1.1]">
                        How <br />
                        <span className="text-white">can we help you?</span>
                    </h1>
                </div>

                <div
                    className="relative w-full max-w-md group mt-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                    <input
                        type="text"
                        placeholder="Search support"
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-5 pl-14 pr-6 text-white placeholder:text-white/30 focus:outline-none focus:border-[#EDD191] focus:bg-white/10 transition-all text-base"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 md:left-24 -translate-x-1/2 md:translate-x-0 opacity-60">
                <div className="w-[26px] h-[40px] border-2 border-white rounded-full flex justify-center p-1.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-dot" />
                </div>
            </div>
        </section>
    );
};

export default FaqHero;
