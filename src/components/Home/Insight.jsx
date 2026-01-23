import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

// Import Swiper styles
import 'swiper/css';

const Insight = () => {
    const insights = [
        {
            date: "09 Feb 2020",
            title: "DMTV Milkshake: The Future of Industrial Design with ...",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2070&auto=format&fit=crop",
            logo: logo
        },
        {
            date: "09 Feb 2020",
            title: "DMTV Milkshake: The Future of Industrial Design with ...",
            image: "https://images.unsplash.com/photo-1510511459019-5dee997dd0df?q=80&w=2070&auto=format&fit=crop",
            logo: logo
        },
        {
            date: "09 Feb 2020",
            title: "DMTV Milkshake: The Future of Industrial Design with ...",
            image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=2070&auto=format&fit=crop",
            logo: logo
        },
        {
            date: "09 Feb 2020",
            title: "DMTV Milkshake: The Future of Industrial Design with ...",
            image: "https://images.unsplash.com/photo-1518349662322-c4573f48aa2c?q=80&w=2070&auto=format&fit=crop",
            logo: logo
        },
        {
            date: "09 Feb 2020",
            title: "DMTV Milkshake: The Future of Industrial Design with ...",
            image: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=2070&auto=format&fit=crop",
            logo: logo
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#06211B] mb-6">
                        Insight from the experts
                    </h2>
                    <p className="text-[#637381] text-lg max-w-2xl mx-auto leading-relaxed">
                        Four simple steps to start competing in the most exciting fantasy racing game
                    </p>
                </div>

                {/* Slider */}
                <div data-aos="fade-up" data-delay="100">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        className="!overflow-visible"
                    >
                        {insights.map((item, idx) => (
                            <SwiperSlide key={idx} className="h-auto">
                                <Link to="/blog/1" className="block h-full">
                                    <div className="bg-white rounded-[32px] flex flex-col shadow-[0_4px_25px_rgba(0,0,0,0.06)] h-full overflow-hidden border border-[#F1F5F5] group">
                                        {/* Image Container with specific scoop */}
                                        <div className="relative aspect-[16/11]">
                                            <div
                                                className="w-full h-full overflow-hidden"
                                                // style={{
                                                //     maskImage: 'radial-gradient(circle 50px at 18% 100%, transparent 98%, black 100%)',
                                                //     WebkitMaskImage: 'radial-gradient(circle 40px at 22% 100%, transparent 98%, black 100%)'
                                                // }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className='absolute bottom-[-15px] left-[12px] w-[80px] h-[34.348px]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="35" viewBox="0 0 80 35" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8556 13.2295C55.9556 7.43467 51.5778 0 40.3333 0H39.6667C28.4222 0 24.0444 7.43467 18.1444 13.2295C13.8556 18.5701 7.34444 19.7334 0 19.944V34.3479H80V19.944C72.6556 19.7334 66.1444 18.5701 61.8556 13.2295Z" fill="white" />
                                                </svg>
                                            </div>

                                            {/* Logo container - positioned to fill the mask notch */}
                                            <div className="absolute bottom-[-27px] left-[51px] -translate-x-1/2 w-[42px] h-[42px]  rounded-full flex items-center justify-center z-10 ">
                                                <div className="w-full h-full rounded-full bg-[#06211B] flex items-center justify-center overflow-hidden border border-white/10">
                                                    <img
                                                        src={item.logo}
                                                        alt="Logo"
                                                        className="w-full h-full object-contain p-2.5"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 pt-12 flex flex-col flex-grow">
                                            <span className="text-[#9BA9A6] text-lg font-medium mb-4 block">
                                                {item.date}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-[#06211B] leading-tight line-clamp-2 group-hover:text-[#EAD49E] transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Insight;
