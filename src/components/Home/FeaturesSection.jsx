import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/howtoplay.png'
import img2 from '../../assets/images/Overly.png'

const FeaturesSection = () => {
    // Mock data for the images - replace with your actual paths
    const cardImages = [
        img1,
        img2,
        img1,
        img2
    ];

    // Container variants to stagger the children (images)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each image appearing
            },
        },
    };

    // Individual image animation variants
    const itemVariants = {
        hidden: { y: 40, opacity: 0, rotate: -5 },
        visible: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: { type: 'spring', stiffness: 100 }
        },
    };

    return (
        <section className="relative min-h-screen bg-[#121212] text-white flex items-center overflow-hidden px-8 lg:px-20">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Content */}
                <div className="z-10">
                    <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                        Our Features
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        Experience a seamless workflow with our intuitive design and
                        powerful backend tools built for scale.
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
                        Get Started <span>→</span>
                    </button>
                </div>

                {/* Right Side: Animated Image Stack */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative h-[500px] flex items-center justify-center"
                >
                    {cardImages.map((src, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, zIndex: 50, rotate: 2 }}
                            className="absolute w-64 md:w-80 rounded-2xl shadow-2xl border border-white/10 overflow-hidden bg-[#1e1e1e]"
                            style={{
                                // Manually offset images to create the stacked perspective look
                                top: `${index * 30}px`,
                                left: `${index * 40}px`,
                                zIndex: index,
                                // Optional: Adds a gentle floating effect after they appear
                                animation: `float 6s ease-in-out infinite ${index * 0.5}s`
                            }}
                        >
                            <img
                                src={src}
                                alt={`Feature ${index}`}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Tailwind Custom Animation for floating effect */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
        </section>
    );
};

export default FeaturesSection;