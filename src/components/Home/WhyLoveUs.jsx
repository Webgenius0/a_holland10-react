import React from 'react';
import { BarChart3, Zap, Smartphone } from 'lucide-react';


const WhyLoveUs = () => {
    const features = [
        {
            icon: <BarChart3 size={32} className="text-[#FBBF24]" />,
            title: "Live Stats & Analytics",
            description: "Real-time race updates, detailed stallion stats, and performance analytics to help you make informed decisions."
        },
        {
            icon: <Zap size={32} className="text-[#3B82F6]" />,
            title: "Instant Updates",
            description: "Get notified immediately when your stallions race. Never miss a moment of the action.",
            featured: true
        },
        {
            icon: <Smartphone size={32} className="text-[#22C55E]" />,
            title: "Play Anywhere",
            description: "Fully responsive design. Manage your team, track races, and compete from any device, anytime."
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFA]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#06211B] mb-6">
                        Why Players Love Us
                    </h2>
                    <p className="text-[#637381] text-lg max-w-2xl mx-auto leading-relaxed">
                        Four simple steps to start competing in the most exciting fantasy racing game
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-delay={idx * 100}
                            className={`relative bg-white rounded-[32px] p-10 flex flex-col items-center text-center transition-all duration-500 ${feature.featured
                                ? "shadow-[0_40px_80px_rgba(0,0,0,0.1)] scale-105 z-10 py-16"
                                : "shadow-[0_10px_40px_rgba(0,0,0,0.03)] opacity-90"
                                }`}
                        >
                            {/* Icon Container */}
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-[#F8FAFA]">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[#06211B] mb-4">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#637381] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyLoveUs;