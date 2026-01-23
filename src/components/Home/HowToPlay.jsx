import React from 'react';
import { Users, Calendar, TrendingUp, Trophy } from 'lucide-react';
import howtoplaybg from '../../assets/images/howtoplay.png'

const HowToPlay = () => {
    const steps = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" >
  <path d="M20.6663 14.6667C20.6663 12.0893 18.577 10 15.9997 10C13.4223 10 11.333 12.0893 11.333 14.6667C11.333 17.244 13.4223 19.3333 15.9997 19.3333C18.577 19.3333 20.6663 17.244 20.6663 14.6667Z" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.6436 15.1332C21.073 15.2633 21.5283 15.3333 22 15.3333C24.5774 15.3333 26.6667 13.244 26.6667 10.6667C26.6667 8.08933 24.5774 6 22 6C19.5802 6 17.5904 7.84187 17.3564 10.2002" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.6433 10.2002C14.4093 7.84187 12.4196 6 9.99967 6C7.42234 6 5.33301 8.08933 5.33301 10.6667C5.33301 13.244 7.42234 15.3333 9.99967 15.3333C10.4714 15.3333 10.9268 15.2633 11.356 15.1332" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M29.3333 22C29.3333 18.3182 26.0501 15.3334 22 15.3334" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.3337 26C23.3337 22.3182 20.0505 19.3334 16.0003 19.3334C11.9502 19.3334 8.66699 22.3182 8.66699 26" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.0003 15.3334C5.95023 15.3334 2.66699 18.3182 2.66699 22" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg >
            ),
            title: "Build Your Team",
            description: "Select 7 stallions from our roster. Each stallion has unique stats and racing history."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M21.3337 2.66663V7.99996M10.667 2.66663V7.99996" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17.3333 5.33337H14.6667C9.63835 5.33337 7.1242 5.33337 5.56209 6.89547C4 8.45757 4 10.9717 4 16V18.6667C4 23.695 4 26.2092 5.56209 27.7712C7.1242 29.3334 9.63835 29.3334 14.6667 29.3334H17.3333C22.3616 29.3334 24.8759 29.3334 26.4379 27.7712C28 26.2092 28 23.695 28 18.6667V16C28 10.9717 28 8.45757 26.4379 6.89547C24.8759 5.33337 22.3616 5.33337 17.3333 5.33337Z" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 13.3334H28" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.9943 18.6666H16.0063M15.9943 24H16.0063M21.3217 18.6666H21.3337M10.667 18.6666H10.679M10.667 24H10.679" stroke="#0B392C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ),
            title: "Track Real Races",
            description: "Your stallions compete in real-world races. Watch them race live or check results."
        },
        {
            icon:
             (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                 <path d="M28.0004 9.33333C28.013 9.24043 28.013 9.14624 28.0004 9.05333C27.9888 8.97505 27.9664 8.89877 27.9337 8.82667C27.8985 8.7615 27.8584 8.6991 27.8137 8.64C27.763 8.55567 27.7001 8.47929 27.6271 8.41333L27.4671 8.32C27.3901 8.26261 27.3046 8.21762 27.2137 8.18667H26.9471C26.8658 8.10799 26.7709 8.04474 26.6671 8H20.0004C19.264 8 18.6671 8.59695 18.6671 9.33333C18.6671 10.0697 19.264 10.6667 20.0004 10.6667H23.7737L18.4404 16.9467L12.6804 13.52C12.1168 13.1848 11.3931 13.3092 10.9737 13.8133L4.30706 21.8133C4.08032 22.0854 3.97116 22.4366 4.00368 22.7893C4.0362 23.142 4.20772 23.4673 4.4804 23.6933C4.72028 23.8921 5.02219 24.0006 5.33373 24C5.73031 24.0006 6.10659 23.8247 6.3604 23.52L12.2937 16.4L17.9871 19.8133C18.5445 20.144 19.259 20.0258 19.6804 19.5333L25.3337 12.9333V16C25.3337 16.7364 25.9307 17.3333 26.6671 17.3333C27.4034 17.3333 28.0004 16.7364 28.0004 16V9.33333Z" fill="#0B392C" />
             </svg>),
            title: "Earn Points",
            description: "Score points based on race placements, wins, and performance. Top performers get bonus points."
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16.2002 25.8C15.6535 25.8 15.2002 25.3467 15.2002 24.8V22C15.2002 21.4533 15.6535 21 16.2002 21C16.7469 21 17.2002 21.4533 17.2002 22V24.8C17.2002 25.3467 16.7469 25.8 16.2002 25.8Z" fill="#0B392C" />
                <path d="M23.8665 30.3334H8.5332V28C8.5332 25.9734 10.1732 24.3334 12.1999 24.3334H20.1999C22.2265 24.3334 23.8665 25.9734 23.8665 28V30.3334ZM10.5332 28.3334H21.8665V28C21.8665 27.08 21.1199 26.3334 20.1999 26.3334H12.1999C11.2799 26.3334 10.5332 27.08 10.5332 28V28.3334V28.3334Z" fill="#0B392C" />
                <path d="M24.2002 30.3334H8.2002C7.65353 30.3334 7.2002 29.88 7.2002 29.3334C7.2002 28.7867 7.65353 28.3334 8.2002 28.3334H24.2002C24.7469 28.3334 25.2002 28.7867 25.2002 29.3334C25.2002 29.88 24.7469 30.3334 24.2002 30.3334Z" fill="#0B392C" />
                <path d="M24.573 16.5867C24.293 16.5867 24.013 16.4667 23.813 16.24C23.5596 15.9467 23.493 15.5334 23.653 15.1867C24.1063 14.1467 24.333 13.04 24.333 11.88V7.88004C24.333 7.41337 24.253 6.96004 24.093 6.48004C24.0796 6.44004 24.0663 6.3867 24.053 6.33337C24.013 6.13337 23.9996 5.93337 23.9996 5.7467C23.9996 5.20004 24.453 4.7467 24.9996 4.7467H25.7996C28.1863 4.7467 30.133 6.7467 30.133 9.21337C30.133 11.2534 29.293 13.2667 27.8396 14.72C27.813 14.7467 27.733 14.8134 27.7196 14.8267C26.933 15.48 26.0396 16.2134 24.8396 16.5467C24.7463 16.5734 24.6663 16.5867 24.573 16.5867ZM26.2396 6.7867C26.3063 7.1467 26.333 7.52004 26.333 7.88004V11.88C26.333 12.4267 26.293 12.9467 26.213 13.48C26.293 13.4134 26.3596 13.36 26.4396 13.2934C27.5063 12.2267 28.133 10.7334 28.133 9.21337C28.133 8.01337 27.3196 7.00004 26.2396 6.7867Z" fill="#0B392C" />
                <path d="M7.43954 16.5334C7.33288 16.5334 7.23954 16.52 7.13288 16.48C6.03954 16.1334 5.01288 15.4934 4.15954 14.64C2.62621 12.9467 1.86621 11.0934 1.86621 9.13338C1.86621 6.70672 3.77288 4.80005 6.19954 4.80005H7.06621C7.39954 4.80005 7.71954 4.97338 7.90621 5.25338C8.09288 5.53338 8.11954 5.89338 7.98621 6.20005C7.77288 6.68005 7.66621 7.22672 7.66621 7.80005V11.8C7.66621 12.9467 7.89288 14.0667 8.35954 15.1334C8.51954 15.4934 8.43954 15.9067 8.18621 16.2C7.98621 16.4134 7.71954 16.5334 7.43954 16.5334ZM5.73288 6.84005C4.65288 7.05338 3.86621 7.98672 3.86621 9.13338C3.86621 10.5867 4.45288 11.9867 5.61288 13.2667C5.66621 13.3334 5.73288 13.3867 5.79954 13.44C5.70621 12.8934 5.66621 12.3467 5.66621 11.8V7.80005C5.66621 7.48005 5.69288 7.16005 5.73288 6.84005Z" fill="#0B392C" />
                <path d="M16.0003 22.3333C10.307 22.3333 5.66699 17.6933 5.66699 12V7.99996C5.66699 4.50663 8.50699 1.66663 12.0003 1.66663H20.0003C23.4937 1.66663 26.3337 4.50663 26.3337 7.99996V12C26.3337 17.6933 21.6937 22.3333 16.0003 22.3333ZM12.0003 3.66663C9.61366 3.66663 7.66699 5.61329 7.66699 7.99996V12C7.66699 16.6 11.4003 20.3333 16.0003 20.3333C20.6003 20.3333 24.3337 16.6 24.3337 12V7.99996C24.3337 5.61329 22.387 3.66663 20.0003 3.66663H12.0003Z" fill="#0B392C" />
            </svg>),
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
                        <h2 className="text-[#0B392C] text-[20px] sm:text-[24px] md:text-[38px] lg:text-[48px] not-italic font-semibold md:leading-[54px] lg:leading-[64px] mb-2 md:mb-4">
                            How to Play
                        </h2>
                        <p className="text-[#637381] not-italic font-semibold leading-[28px] max-w-md mb-16 text-[15px] sm:text-[16px] md:text-[18px]">
                            Four simple steps to start competing in the most exciting fantasy racing game
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex flex-col gap-4 items-center">
                                    <div className="w-14 h-14 border-[2px] border-[#DFE3E8]  rounded-full flex items-center justify-center mb-2">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-[#1F5B5B] text-center text-[17px] md:text-[20px] not-italic font-medium leading-[30px]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#99A1AF] text-center text-[14px] not-italic font-normal leading-[22px]">
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
