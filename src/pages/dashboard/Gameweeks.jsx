import React from 'react';
import { Calendar, Clock, Trophy, MapPin, Star } from 'lucide-react';

const Gameweeks = () => {
    const raceSchedule = [
        {
            date: "March 29, 2026",
            races: [
                { id: 1, title: "Godolphin Mile", location: "Meydan Racecourse", time: "2:00 PM" },
                { id: 2, title: "Godolphin Mile", location: "Meydan Racecourse", time: "2:00 PM" },
            ]
        },
        {
            date: "March 30, 2026",
            races: [
                { id: 3, title: "Godolphin Mile", location: "Meydan Racecourse", time: "2:00 PM" },
                { id: 4, title: "Godolphin Mile", location: "Meydan Racecourse", time: "2:00 PM" },
            ]
        }
    ];

    const topPerformers = [
        { name: "Frankel", event: "Dubai World Cup", points: "30 pts", color: "bg-green-500" },
        { name: "Galileo", event: "Dubai Sheema Classic", points: "22 pts", color: "bg-blue-500" },
        { name: "Dubawi", event: "Dubai Turf", points: "15 pts", color: "bg-red-500" },
    ];

    const myTeamPerformance = [
        { name: "Frankel", isCaptain: true, event: "Dubai World Cup: 22 pts", points: "44 pts", multiplier: "(22 x2)" },
        { name: "Frankel", isCaptain: false, event: "Dubai World Cup: 22 pts", points: "44 pts", multiplier: "(22 x2)" },
        { name: "Frankel", isCaptain: false, event: "Dubai World Cup: 22 pts", points: "44 pts", multiplier: "(22 x2)" },
        { name: "Frankel", isCaptain: false, event: "Dubai World Cup: 22 pts", points: "44 pts", multiplier: "(22 x2)" },
        { name: "Frankel", isCaptain: false, event: "Dubai World Cup: 22 pts", points: "44 pts", multiplier: "(22 x2)" },
        { name: "Frankel", isCaptain: false, event: "Dubai World Cup: 22 pts", points: "44 pts", multiplier: "(22 x2)" },
        { name: "Frankel", isCaptain: false, event: "Dubai World Cup: 22 pts", points: "44 pts", multiplier: "(22 x2)" },
    ];

    return (
        <div className="space-y-8" data-aos="fade-up">
            <div>
                <h1 className="text-2xl font-bold text-[#06211B] mb-1">Gameweek Overview</h1>
                <p className="text-sm text-[#6C7E7B]">Select 7 stallions for your team</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Columns - Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Top Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F1F5F5] flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F8FAFA] flex items-center justify-center text-[#6C7E7B]">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-[#A3B1AF] font-bold uppercase tracking-widest mb-1">Date Range</p>
                                <p className="text-lg font-bold text-[#06211B]">March 29 - March 31, 2026</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F1F5F5] flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F8FAFA] flex items-center justify-center text-[#6C7E7B]">
                                <Clock size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-[10px] text-[#A3B1AF] font-bold uppercase tracking-widest">Deadline</p>
                                    <p className="text-[10px] text-[#EAD49E] font-bold">12:00 PM EST</p>
                                </div>
                                <p className="text-lg font-bold text-[#06211B]">Sunday, January 12, 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* Race Schedule */}
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5]">
                        <h3 className="text-lg font-bold text-[#06211B] mb-8">Race Schedule</h3>
                        <div className="space-y-10">
                            {raceSchedule.map((day, idx) => (
                                <div key={idx} className="space-y-6">
                                    <div className="flex items-center gap-2 text-sm font-bold text-[#06211B]">
                                        <Calendar size={18} className="text-[#A3B1AF]" />
                                        {day.date}
                                    </div>
                                    <div className="space-y-3">
                                        {day.races.map((race) => (
                                            <div key={race.id} className="p-5 rounded-2xl border border-[#F1F5F5] flex items-center justify-between hover:bg-[#F8FAFA] transition-all cursor-pointer">
                                                <div>
                                                    <h4 className="text-sm font-bold text-[#06211B] mb-1">{race.title}</h4>
                                                    <p className="text-[11px] text-[#A3B1AF] font-bold">{race.location}</p>
                                                </div>
                                                <div className="flex items-center gap-2 bg-[#FFF9EA] text-[#EAD49E] px-4 py-2 rounded-xl text-[10px] font-bold">
                                                    <Clock size={14} />
                                                    {race.time}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Top Performers */}
                <div className="space-y-8">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5]">
                        <h3 className="text-lg font-bold text-[#06211B] mb-8">Top Performers</h3>
                        <div className="space-y-8">
                            {topPerformers.map((performer, idx) => (
                                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm ${performer.color}`}>
                                            <Trophy size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[#06211B] mb-0.5 group-hover:text-[#EAD49E] transition-colors">{performer.name}</h4>
                                            <div className="flex items-center gap-1 text-[10px] text-[#A3B1AF] font-bold">
                                                <MapPin size={10} />
                                                {performer.event}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-[#06211B]">{performer.points}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - My Team Performance */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5]">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-[#06211B]">My Team Performance</h3>
                    <div className="bg-[#F8FAFA] px-4 py-1.5 rounded-lg text-xs font-bold text-[#06211B] border border-[#F1F5F5]">
                        122 pts
                    </div>
                </div>

                <div className="divide-y divide-[#F1F5F5]">
                    {myTeamPerformance.map((stallion, idx) => (
                        <div key={idx} className="py-6 first:pt-0 last:pb-0 flex items-center justify-between">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="text-sm font-bold text-[#06211B]">{stallion.name}</h4>
                                    {stallion.isCaptain && (
                                        <div className="flex items-center gap-1.5 bg-[#FFF9EA] text-[#EAD49E] px-2 py-0.5 rounded-md text-[10px] font-bold">
                                            <Star size={10} className="fill-current" />
                                            Captain
                                        </div>
                                    )}
                                </div>
                                <p className="text-[11px] text-[#A3B1AF] font-bold">{stallion.event}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-[#06211B] mb-0.5">{stallion.points}</p>
                                <p className="text-[10px] text-[#A3B1AF] font-bold">{stallion.multiplier}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gameweeks;
