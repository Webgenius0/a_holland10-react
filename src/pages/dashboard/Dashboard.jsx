import React, { useState } from 'react';
import {
    Trophy,
    Star,
    RefreshCcw,
    MoreHorizontal,
    TrendingUp,
    TrendingDown,
    Clock,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const Dashboard = () => {
    const [showOverall, setShowOverall] = useState(false);

    const deadlineData = [
        { date: "Sunday, January 12, 2026", time: "12:00 PM EST", remaining: "1 day 14 hours", color: "text-red-500", bg: "bg-red-50" },
        { date: "Sunday, January 12, 2026", time: "12:00 PM EST", remaining: "1 day 20 hours", color: "text-red-500", bg: "bg-red-50" },
        { date: "Sunday, January 12, 2026", time: "12:00 PM EST", remaining: "5 day 09 hours", color: "text-green-500", bg: "bg-green-50" },
    ];

    const gameweekTable = [
        { captain: "Meraj", points: "156", transfers: "3", deadline: "1 day 14 hours", status: "red" },
        { captain: "Frankel", points: "15328", transfers: "6", deadline: "1 day 06 hours", status: "red" },
        { captain: "Frankel", points: "15328", transfers: "6", deadline: "3 day 14 hours", status: "green" },
        { captain: "Frankel", points: "15328", transfers: "6", deadline: "3 day 16 hours", status: "green" },
    ];

    return (
        <div className="space-y-8" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column (Main Content) */}
                <div className="flex-1 space-y-8">
                    {/* Top Section Row */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        {/* Welcome Banner */}
                        <div className="xl:col-span-2 bg-[#FCF7ED] rounded-[32px] p-10 flex items-center justify-between relative overflow-hidden h-64 shadow-sm border border-[#F1F5F5]">
                            <div className="relative z-10">
                                <h1 className="text-3xl font-bold text-[#06211B] mb-2 leading-tight">
                                    Welcome back <br /> Stallion Fantasy League !
                                </h1>
                                <p className="text-[#6C7E7B] text-sm mb-8 leading-relaxed max-w-[320px]">
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                </p>
                                <button className="bg-[#EAD49E] text-[#06211B] px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#D4B47F] transition-all shadow-sm">
                                    Go Now
                                </button>
                            </div>
                            <div className="absolute right-0 bottom-0 h-[85%]">
                                <img
                                    src="https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg?w=826"
                                    alt="Illustration"
                                    className="h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Featured App Card */}
                        <div className="bg-[#2D1616] rounded-[32px] p-8 text-white relative overflow-hidden h-64 flex flex-col justify-between group shadow-lg">
                            {/* Navigation Arrows */}
                            <div className="absolute top-6 right-6 flex items-center gap-2">
                                <button className="text-white/40 hover:text-white transition-colors">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="text-white/40 hover:text-white transition-colors">
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* Background Image right side */}
                            <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden pointer-events-none opacity-40">
                                <img
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                                    alt="Yoga"
                                    className="h-full w-full object-cover object-left"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-end h-full">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] text-white/50 mb-1 uppercase tracking-widest font-bold">Featured App</p>
                                        <h4 className="text-xl font-bold leading-tight">Strike a yogi pose</h4>
                                    </div>

                                    {/* Pagination Dots */}
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                    </div>

                                    <p className="text-xs text-white/60 max-w-[180px] leading-relaxed">
                                        Get fit with Pocket Yoga's customisable routines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gameweek Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#FFF9EA] flex items-center justify-center text-[#EAD49E] shadow-sm border border-[#EAD49E]/10">
                                    <Trophy size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#06211B] leading-none mb-1">Gameweek</h3>
                                    <p className="text-xs text-[#6C7E7B] font-medium">Dubai World Cup Weekend</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowOverall(!showOverall)}
                                className="text-[11px] font-bold text-[#637381] bg-white border border-[#E5E9EB] px-5 py-2 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
                            >
                                {showOverall ? "Show Gameweek" : "Overall Rank"}
                            </button>
                        </div>

                        {/* Stats Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[#F1F5F5]">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold text-[#637381]">
                                        {showOverall ? "Total Points" : "Weekly Points"}
                                    </span>
                                    <div className="flex items-center gap-1 text-[#22C55E] text-[10px] font-bold bg-[#E7F9F0] px-2.5 py-1 rounded-full">
                                        <TrendingUp size={14} />
                                        <span>+2.6%</span>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between">
                                    <span className="text-4xl font-bold text-[#06211B]">18,765</span>
                                    <div className="flex items-end gap-1 px-1">
                                        {[4, 6, 3, 7, 5, 8, 5].map((h, i) => (
                                            <div key={i} className="w-1.5 bg-[#22C55E] rounded-full" style={{ height: `${h * 3}px` }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[#F1F5F5]">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold text-[#637381]">
                                        {showOverall ? "Overall Rank" : "Weekly Rank"}
                                    </span>
                                    <div className="flex items-center gap-1 text-red-500 text-[10px] font-bold bg-[#FFF1F1] px-2.5 py-1 rounded-full">
                                        <TrendingDown size={14} />
                                        <span>-0.08%</span>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between">
                                    <span className="text-4xl font-bold text-[#06211B]">#847</span>
                                    <div className="flex items-end gap-1 px-1">
                                        {[3, 5, 4, 6, 8, 4, 6].map((h, i) => (
                                            <div key={i} className="w-1.5 bg-[#4F9CF9] rounded-full" style={{ height: `${h * 3}px` }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5]">
                        <h3 className="text-lg font-bold text-[#06211B] mb-8">This Gameweek</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="text-[11px] uppercase tracking-widest text-[#B4BEC8] font-bold border-b border-[#F8FAFA]">
                                    <tr>
                                        <th className="pb-5">Captain</th>
                                        <th className="pb-5">Points this GW</th>
                                        <th className="pb-5">Transfers Left</th>
                                        <th className="pb-5">Deadline</th>
                                        <th className="pb-5 text-right w-10"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gameweekTable.map((row, idx) => (
                                        <tr key={idx} className="border-b border-[#F8FAFA] last:border-0 hover:bg-[#F8FAFA] transition-colors">
                                            <td className="py-5">
                                                <div className="flex items-center gap-2">
                                                    <Star size={14} className="text-[#EAD49E] fill-current" />
                                                    <span className="text-[13px] font-bold text-[#637381]">{row.captain}</span>
                                                </div>
                                            </td>
                                            <td className="py-5">
                                                <div className="flex items-center gap-2">
                                                    <Trophy size={14} className="text-[#EAD49E]" />
                                                    <span className="text-[13px] font-bold text-[#1F2937]">{row.points}</span>
                                                </div>
                                            </td>
                                            <td className="py-5">
                                                <div className="flex items-center gap-2">
                                                    <RefreshCcw size={14} className="text-[#EAD49E]" />
                                                    <span className="text-[13px] font-bold text-[#1F2937]">{row.transfers}</span>
                                                </div>
                                            </td>
                                            <td className="py-5">
                                                <div className={`flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full w-fit ${row.status === 'red' ? 'bg-[#FFF1F1] text-red-500' : 'bg-[#E7F9F0] text-[#16A34A]'
                                                    }`}>
                                                    <Clock size={12} />
                                                    {row.deadline}
                                                </div>
                                            </td>
                                            <td className="py-5 text-right">
                                                <button className="text-[#B4BEC8] hover:text-[#06211B]"><MoreHorizontal size={20} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column (Deadline Tracker) */}
                <div className="w-full lg:w-[320px]">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5] h-full">
                        <h4 className="text-lg font-bold text-[#06211B] mb-8">Next Deadline</h4>

                        <div className="space-y-10 relative">
                            {deadlineData.map((item, idx) => (
                                <div key={idx} className="pb-8 last:pb-0 border-b border-[#F1F5F5] last:border-0">
                                    <div className="flex justify-between gap-6 mb-4">
                                        <div className="space-y-1.5">
                                            <p className="text-[11px] text-[#B4BEC8] font-bold uppercase tracking-tight leading-none">Date & Time</p>
                                            <p className="text-[11px] text-[#637381] font-bold leading-none">{item.date}</p>
                                            <p className="text-lg font-bold text-[#06211B] leading-none">{item.time}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <p className="text-[11px] text-[#B4BEC8] font-bold uppercase tracking-tight leading-none">Time Remaining</p>
                                            <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap leading-none ${idx === 2 ? 'bg-[#E7F9F0] text-[#16A34A]' : 'bg-[#FFF1F1] text-red-500'
                                                }`}>
                                                {item.remaining}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
