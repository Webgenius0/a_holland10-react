import React from 'react';
import { Facebook, Twitter, Instagram, Send, Share2, Calendar } from 'lucide-react';
import Insight from '../../components/Home/Insight';
import logo from '../../assets/images/logo.png';

const BlogDetails = () => {
    // Demo data - in a real app, this would come from a CMS or state
    const blogData = {
        title: "the soul of the past with a clean energy spirit: zero labs reveals classic electric land rover",
        author: "Pratima",
        date: "09 Feb 2020",
        authorImage: "https://i.pravatar.cc/100?u=pratima",
        mainImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
        secondaryImage: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069&auto=format&fit=crop",
    };

    return (
        <div className="bg-white min-h-screen pt-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">

                {/* Hero section with Background Image */}
                <div className="relative rounded-[48px] overflow-hidden min-h-[500px] mb-16 shadow-2xl group">
                    <img
                        src={blogData.mainImage}
                        alt="Hero"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* Content over image */}
                    <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                        <div className="max-w-4xl" data-aos="fade-up">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.15] drop-shadow-lg">
                                {blogData.title}
                            </h1>

                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-2">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-[#EAD49E] p-0.5">
                                        <img src={blogData.authorImage} alt="Author" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg">{blogData.author}</p>
                                        <p className="text-white/60 text-sm font-medium">{blogData.date}</p>
                                    </div>
                                </div>

                                {/* Social Share */}
                                <div className="flex items-center gap-3">
                                    <SocialIcon icon={Facebook} bg="bg-white/10" />
                                    <SocialIcon icon={Twitter} bg="bg-white/10" />
                                    <SocialIcon icon={Instagram} bg="bg-white/10" />
                                    <SocialIcon icon={Send} bg="bg-[#25D366]" />
                                    <SocialIcon icon={Share2} bg="bg-[#22C55E]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="max-w-4xl mx-auto space-y-12 mb-24">
                    <div className="space-y-6" data-aos="fade-up">
                        <p className="text-xl md:text-2xl font-bold text-[#06211B] leading-relaxed">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className="text-[#637381] text-lg leading-[1.8] font-medium">
                            What is MTAweb Directory?
                        </p>
                        <p className="text-[#637381] text-lg leading-[1.8] font-medium">
                            So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.
                        </p>
                    </div>

                    {/* Secondary Image */}
                    <div className="rounded-[40px] overflow-hidden shadow-xl" data-aos="fade-up">
                        <img
                            src={blogData.secondaryImage}
                            alt="Secondary"
                            className="w-full h-full object-cover aspect-video"
                        />
                    </div>

                    <div className="space-y-6" data-aos="fade-up">
                        <p className="text-[#637381] text-lg leading-[1.8] font-medium">
                            It is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.
                        </p>
                    </div>
                </div>

                {/* Recent Posts Section (Using existing Insight component as a base/recent posts) */}
                <div className="border-t border-[#F1F5F5] pt-24">
                    <h2 className="text-3xl font-extrabold text-[#06211B] mb-12" data-aos="fade-up">Recent Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-[#F1F5F5] group cursor-pointer" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/photo-${1500000000000 + (i * 1000000)}?q=80&w=600&auto=format&fit=crop`}
                                        alt="Post"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg bg-[#06211B] p-1.5 flex items-center justify-center">
                                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-[#A3B1AF] text-sm font-bold mb-3 uppercase tracking-wide">09 Feb 2020</p>
                                    <h4 className="text-lg font-bold text-[#06211B] leading-tight group-hover:text-[#EAD49E] transition-colors">
                                        DMTV Milkshake: The Future of Industrial Design with ...
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SocialIcon = ({ icon: Icon, bg }) => (
    <button className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center text-white hover:scale-110 transition-all hover:shadow-lg`}>
        <Icon size={18} fill={bg === 'bg-white/10' ? "none" : "currentColor"} />
    </button>
);

export default BlogDetails;