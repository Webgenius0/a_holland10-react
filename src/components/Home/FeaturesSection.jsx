import React from 'react';
import { motion } from 'framer-motion';
import video from '../../assets/Videos/book2.mp4'
import img from '../../assets/images/book.png'

const FeaturesSection = () => {
    return (
        <section className="relative py-24 md:py-32 bg-white text-[#06211B] overflow-hidden px-6 md:px-12 lg:px-24">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="z-10"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold mb-10 tracking-tight text-[#162C28] leading-[1.1]">
                        Our Features
                    </h2>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-[#06211B] px-8 py-4 rounded-[16px] font-bold flex items-center gap-3 shadow-[0_8px_25px_rgba(145,158,171,0.15)] border border-[#F4F6F8] hover:shadow-[0_15px_35px_rgba(145,158,171,0.25)] transition-all duration-300"
                    >
                        Get Started <span className="text-xl">→</span>
                    </motion.button>
                </motion.div>

                {/* Right Side: Video */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center w-full"
                >
                    <div className="relative w-full max-w-[650px] aspect-[4/3] rounded-[32px] overflow-hidden">
                        <img src={img} alt="" srcset="" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;