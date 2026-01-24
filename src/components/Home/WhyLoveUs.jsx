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
            description: "Get notified immediately when your stallions race. Never miss a moment of the action."
        },
        {
            icon: <Smartphone size={32} className="text-[#22C55E]" />,
            title: "Play Anywhere",
            description: "Fully responsive design. Manage your team, track races, and compete from any device, anytime."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#06211B] mb-6">
                        Why Players Love Us
                    </h2>
                    <p className="text-[#637381] text-lg max-w-2xl mx-auto leading-relaxed">
                        Four simple steps to start competing in the most exciting fantasy racing game
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-[32px] bg-[#F4F6F8] p-10 flex flex-col items-center text-center 
                                       border-[8px] border-transparent
                                       transition-all duration-500 ease-in-out
                                       hover:bg-white hover:-translate-y-4 
                                       hover:border-white
                                       hover:shadow-[0_40px_80px_rgba(145,158,171,0.25)]
                                       min-h-[420px] h-full"
                        >
                            {/* Icon Container */}
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-10 bg-white transition-colors duration-500 group-hover:bg-[#F8FAFA]">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[#06211B] mb-5">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#637381] text-[17px] leading-relaxed">
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