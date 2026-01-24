import React from 'react';
import { Phone } from 'lucide-react';
import horseRiderImg from '../../assets/images/horseRider.png';
import joinNowBg from '../../assets/images/howtoplay.png'; // Using a placeholder background from existing assets
import joinbg from '../../assets/images/joinbg.png';

const JoinNow = () => {
    return (
        <section className="relative mt-32 mb-20 min-h-[492px]">
            <div className=" mx-auto px-6 md:px-12 lg:px-24">
                <div className="relative rounded-[40px] overflow-visible bg-[#06211B]  flex items-center">

                    {/* Background Overlay with Image */}
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden opacity-30">
                        <img
                            src={joinbg}
                            alt="Background"
                            className="w-full h-full object-cover "
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#06211B] via-[#06211B]/80 to-transparent"></div> */}
                    </div>

                    <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 px-10 md:px-20 min-h-[592px] ">

                        {/* Text Content */}
                        <div data-aos="fade-right flex flex-col justify-end  h-full">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                                Join Today And Get
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#D4B47F] mb-8">
                                15% Discount
                            </h3>
                            <p className="text-white/70 text-lg max-w-md mb-12 font-medium">
                                Pick 7 stallions, earn points from real racing, and compete all season.
                            </p>

                            <button className="bg-[#EAD49E] hover:bg-[#D4B47F] text-[#06211B] px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
                                <Phone size={20} className="fill-current" />
                                Contact us
                            </button>
                        </div>

                        {/* Image Content - Popping Out */}
                        <div className="relative hidden lg:static lg:flex justify-center lg:justify-end">
                            <div
                                className="lg:absolute lg:bottom-[2px] lg:right-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] pointer-events-none"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <img
                                    src={horseRiderImg}
                                    alt="Horse Rider"
                                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                // style={{
                                //     transform: 'translateY(-0%)' // This makes it pop out from the top
                                // }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinNow;