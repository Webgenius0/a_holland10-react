import React from 'react';
import { Users, Calendar, TrendingUp, Trophy } from 'lucide-react';
import howtoplaybg from '../../assets/images/howtoplay.png'

const HowToPlay = () => {
    const steps = [
        {
            icon: <Users size={24} className="text-[#06211B]" />,
            title: "Build Your Team",
            description: "Select 7 stallions from our roster. Each stallion has unique stats and racing history."
        },
        {
            icon: <Calendar size={24} className="text-[#06211B]" />,
            title: "Track Real Races",
            description: "Your stallions compete in real-world races. Watch them race live or check results."
        },
        {
            icon: <TrendingUp size={24} className="text-[#06211B]" />,
            title: "Earn Points",
            description: "Score points based on race placements, wins, and performance. Top performers get bonus points."
        },
        {
            icon: <Trophy size={24} className="text-[#06211B]" />,
            title: "Win Prizes",
            description: "Compete against others all season. Top teams win cash prizes and exclusive rewards."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <div data-aos="fade-right">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#06211B] mb-6 tracking-tight">
                            How to Play
                        </h2>
                        <p className="text-[#6C7E7B] text-lg max-w-md mb-16 leading-relaxed">
                            Four simple steps to start competing in the most exciting fantasy racing game
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <div className="w-14 h-14 bg-[#F1F5F5] rounded-full flex items-center justify-center mb-2">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#06211B]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#6C7E7B] text-sm leading-loose">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visuals */}
                    <div className="relative" data-aos="fade-left">
                        <div className="relative rounded-[40px] overflow-hidden">
                            <img
                                src={howtoplaybg}
                                alt="How to Play"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowToPlay;
