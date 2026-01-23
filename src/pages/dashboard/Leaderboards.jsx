import React, { useState } from 'react';
import { Trophy, ChevronDown, Lock, X } from 'lucide-react';

const Leaderboards = () => {
    const [view, setView] = useState('public'); // 'public' or 'private'
    const [showUnlockModal, setShowUnlockModal] = useState(false);
    const [showJoinModal, setShowJoinModal] = useState(false);

    const publicWinners = [
        { rank: 1, team: "Galileo Team", manager: "Bertha Moore", points: "2,540" },
        { rank: 2, team: "Sea Bird", manager: "Bertha Moore", points: "2,350" },
        { rank: 3, team: "Secretariat", manager: "Bertha Moore", points: "2,210" },
        { rank: 4, team: "Man o' War", manager: "Bertha Moore", points: "2,045" },
        { rank: 4687, team: "Goodbye Stallions", manager: "You", points: "1,120", isUser: true },
    ];

    const getRankIcon = (rank) => {
        if (rank === 1) return <div className="w-8 h-8 rounded-full bg-[#FFF9EA] flex items-center justify-center text-[#EAD49E] ring-2 ring-[#EAD49E]/20"><Trophy size={14} /></div>;
        if (rank === 2) return <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 ring-2 ring-slate-200"><Trophy size={14} /></div>;
        if (rank === 3) return <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-400 ring-2 ring-orange-100"><Trophy size={14} /></div>;
        return <span className="text-xs font-bold text-[#A3B1AF] w-8 text-center">{rank}</span>;
    };

    return (
        <div className="space-y-8" data-aos="fade-up">
            {/* Header Banner */}
            <div className="bg-white rounded-[32px] p-10 flex items-center justify-between relative overflow-hidden border border-[#F1F5F5] shadow-sm">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-[#06211B] mb-2">Leaderboards</h1>
                    <p className="text-[#637381] text-sm max-w-[320px] leading-relaxed">
                        The best and most competitive fantasy stallions league in the world.
                    </p>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] pointer-events-none pr-8">
                    <img
                        src="https://img.freepik.com/free-vector/trophy-concept-illustration_114360-6395.jpg?w=826"
                        alt="Trophy Illustration"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5]">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-[#06211B] mb-1">Winner List</h3>
                        <p className="text-xs text-[#A3B1AF] font-bold">The list of top performing managers</p>
                    </div>
                    <div className="relative">
                        <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-[#F1F5F5] rounded-lg text-[10px] font-bold text-[#06211B] hover:bg-gray-50 transition-all">
                            Managed <ChevronDown size={14} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-[10px] uppercase tracking-widest text-[#A3B1AF] font-bold border-b border-[#F8FAFA]">
                            <tr>
                                <th className="pb-5 pl-4">Rank</th>
                                <th className="pb-5">Stallions</th>
                                <th className="pb-5">Manager</th>
                                <th className="pb-5">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {publicWinners.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className={`group transition-all ${row.isUser ? 'bg-[#FFF9EA]' : 'border-b border-[#F8FAFA] hover:bg-[#F8FAFA]'}`}
                                >
                                    <td className="py-5 pl-4">
                                        {getRankIcon(row.rank)}
                                    </td>
                                    <td className="py-5">
                                        <span className="text-xs font-bold text-[#06211B]">{row.team}</span>
                                    </td>
                                    <td className="py-5">
                                        <span className="text-xs font-bold text-[#637381]">{row.manager}</span>
                                    </td>
                                    <td className="py-5">
                                        <span className="text-xs font-bold text-[#06211B]">{row.points}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals for Private League - Logic can be triggered from sidebar or a toggle */}
            {showUnlockModal && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowUnlockModal(false)}></div>
                    <div className="relative bg-white rounded-[40px] w-full max-w-lg p-12 text-center shadow-2xl animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-[#FFF9EA] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-sm">
                            <Lock className="text-[#EAD49E]" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#06211B] mb-4">Unlock Private League</h2>
                        <p className="text-sm text-[#637381] mb-10 max-w-[320px] mx-auto leading-relaxed">
                            The best and most competitive Private stallions league in the world.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="h-14 bg-[#EAD49E] text-[#06211B] font-bold rounded-2xl hover:bg-[#D4B47F] transition-all" onClick={() => { setShowUnlockModal(false); setShowJoinModal(true); }}>
                                Join League
                            </button>
                            <button className="h-14 border-2 border-[#F1F5F5] text-[#06211B] font-bold rounded-2xl hover:bg-gray-50 transition-all">
                                Create League
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showJoinModal && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowJoinModal(false)}></div>
                    <div className="relative bg-white rounded-[40px] w-full max-w-lg p-12 text-center shadow-2xl animate-in zoom-in-95 duration-300">
                        <button className="absolute top-8 right-8 text-[#A3B1AF] hover:text-[#06211B]" onClick={() => setShowJoinModal(false)}>
                            <X size={24} />
                        </button>
                        <div className="w-20 h-20 bg-[#FFF9EA] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-sm">
                            <Lock className="text-[#EAD49E]" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#06211B] mb-4">Unlock Private League</h2>
                        <p className="text-sm text-[#637381] mb-8 leading-relaxed">
                            The best and most competitive Private stallions league in the world.
                        </p>
                        <div className="space-y-4 max-w-sm mx-auto">
                            <input
                                type="text"
                                placeholder="Enter your code"
                                className="w-full h-14 bg-[#F8FAFA] border border-[#E5E9EB] rounded-2xl px-6 text-center text-sm focus:outline-none focus:border-[#EAD49E] transition-all font-bold placeholder:text-[#A3B1AF]"
                            />
                            <button className="w-full h-14 bg-[#EAD49E] text-[#06211B] font-bold rounded-2xl hover:bg-[#D4B47F] transition-all">
                                Submit
                            </button>
                            <button className="text-xs font-bold text-[#637381] hover:text-[#06211B]" onClick={() => setShowJoinModal(false)}>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating button to trigger modals representing the Private League flow */}
            <div className="fixed bottom-10 right-10 flex flex-col gap-3">
                <button
                    onClick={() => setShowUnlockModal(true)}
                    className="bg-[#06211B] text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <Lock size={16} /> Private League Preview
                </button>
            </div>
        </div>
    );
};

export default Leaderboards;
