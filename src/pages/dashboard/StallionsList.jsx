import React, { useState } from 'react';
import { Search, ChevronDown, Eye, X, TrendingUp, Filter } from 'lucide-react';

const StallionsList = () => {
    const [selectedStallion, setSelectedStallion] = useState(null);

    const stallions = [
        { id: "#120", name: "Marquise Kennedy", type: "Colt", nationality: "Dubai", points: "152 pts", reliability: "87%" },
        { id: "#121", name: "Margaret Donnelly", type: "Filly", nationality: "USA", points: "128 pts", reliability: "92%" },
        { id: "#122", name: "Marquise Kennedy", type: "Colt", nationality: "UK", points: "190 pts", reliability: "78%" },
        { id: "#123", name: "Marquise Kennedy", type: "Filly", nationality: "Dubai", points: "145 pts", reliability: "84%" },
        { id: "#124", name: "Marquise Kennedy", type: "Colt", nationality: "Dubai", points: "167 pts", reliability: "91%" },
    ];

    return (
        <div className="space-y-8" data-aos="fade-up">
            <div>
                <h1 className="text-2xl font-bold text-[#06211B] mb-1">Stallion List</h1>
                <p className="text-sm text-[#6C7E7B]">Browse all available stallions and view their performance</p>
            </div>

            {/* Filter Bar */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F1F5F5] flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-xs">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3B1AF]" size={18} />
                    <input
                        type="text"
                        placeholder="Search stallions..."
                        className="w-full h-11 bg-[#F8FAFA] border border-[#E5E9E8] rounded-xl pl-12 pr-4 text-sm focus:outline-none focus:border-[#D4B47F]"
                    />
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex items-center gap-2 h-11 px-6 bg-[#F8FAFA] border border-[#E5E9E8] rounded-xl text-sm font-bold text-[#06211B] hover:bg-[#EAD49E] transition-all">
                        <Filter size={16} />
                        All Filters
                    </button>
                    <div className="relative min-w-[120px] hidden md:block">
                        <select className="w-full h-11 bg-[#F8FAFA] border border-[#E5E9E8] rounded-xl px-4 text-sm appearance-none focus:outline-none focus:border-[#D4B47F]">
                            <option>Dubai</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3B1AF] pointer-events-none" size={16} />
                    </div>
                </div>
            </div>

            {/* Stallion Table */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-[10px] uppercase tracking-widest text-[#A3B1AF] font-bold">
                            <tr>
                                <th className="pb-6 w-12"><input type="checkbox" className="rounded" /></th>
                                <th className="pb-6">Stallion Name</th>
                                <th className="pb-6">Type</th>
                                <th className="pb-6">Nationality</th>
                                <th className="pb-6">Reliability</th>
                                <th className="pb-6">Points</th>
                                <th className="pb-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F8FAFA]">
                            {stallions.map((stallion, idx) => (
                                <tr key={idx} className="group hover:bg-[#F8FAFA] transition-all">
                                    <td className="py-5"><input type="checkbox" className="rounded" /></td>
                                    <td className="py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-[#FFF9EA] text-[#EAD49E] flex items-center justify-center font-bold text-xs uppercase">
                                                {stallion.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#06211B]">{stallion.name}</h4>
                                                <p className="text-[10px] text-[#A3B1AF] font-bold">{stallion.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-5">
                                        <span className="text-xs font-bold text-[#6C7E7B] px-3 py-1 rounded-lg bg-[#F8FAFA]">{stallion.type}</span>
                                    </td>
                                    <td className="py-5 text-sm font-bold text-[#6C7E7B]">{stallion.nationality}</td>
                                    <td className="py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-1.5 bg-[#F1F5F5] rounded-full overflow-hidden">
                                                <div className="bg-[#22C55E] h-full" style={{ width: stallion.reliability }}></div>
                                            </div>
                                            <span className="text-xs font-bold text-[#06211B]">{stallion.reliability}</span>
                                        </div>
                                    </td>
                                    <td className="py-5 text-sm font-bold text-[#06211B]">{stallion.points}</td>
                                    <td className="py-5 text-center">
                                        <button
                                            onClick={() => setSelectedStallion(stallion)}
                                            className="h-10 px-4 flex items-center gap-2 mx-auto bg-[#FFF9EA] text-[#EAD49E] rounded-xl text-xs font-bold hover:bg-[#EAD49E] hover:text-[#06211B] transition-all"
                                        >
                                            <Eye size={14} />
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal - Stallion Details */}
            {selectedStallion && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedStallion(null)}></div>
                    <div className="relative bg-white rounded-[40px] w-full max-w-lg p-10 shadow-2xl overflow-hidden" data-aos="zoom-in">
                        <button
                            onClick={() => setSelectedStallion(null)}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={20} className="text-[#6C7E7B]" />
                        </button>

                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-2xl bg-[#06211B] text-white flex items-center justify-center text-xl font-bold">
                                    {selectedStallion.name.charAt(0)}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#06211B]">{selectedStallion.name}</h2>
                                    <p className="text-[#6C7E7B] font-bold text-sm tracking-widest uppercase">{selectedStallion.type} • {selectedStallion.nationality}</p>
                                </div>
                            </div>
                        </div>

                        {/* Top Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            <div className="p-4 rounded-2xl bg-[#FFF9EA] text-center border border-[#EAD49E]/20">
                                <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-wider mb-1">Price</p>
                                <p className="text-xl font-bold text-[#06211B]">$12.5M</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-[#E0F2FE] text-center border border-[#BAE6FD]/20">
                                <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-wider mb-1">Mean Pts</p>
                                <p className="text-xl font-bold text-[#0369A1]">234</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-[#DCFCE7] text-center border border-[#BBF7D0]/20">
                                <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-wider mb-1">Reliability</p>
                                <p className="text-xl font-bold text-[#16A34A]">{selectedStallion.reliability}</p>
                            </div>
                        </div>

                        {/* Recent Results */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-[#06211B] mb-4">Recent Form: Last 5 Games</h4>
                                <div className="flex gap-2">
                                    {[20, 15, 45, 12, 30].map((pts, i) => (
                                        <div key={i} className={`flex-1 p-3 rounded-xl border text-center ${pts > 20 ? "bg-green-50 border-green-100 text-green-600" : "bg-red-50 border-red-100 text-red-500"
                                            }`}>
                                            <span className="text-xs font-bold">{pts} pts</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-[#F8FAFA] rounded-3xl border border-[#F1F5F5]">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-sm font-bold text-[#06211B]">Performance History</h4>
                                    <TrendingUp size={16} className="text-[#22C55E]" />
                                </div>
                                <div className="h-20 flex items-end gap-1.5">
                                    {[40, 60, 45, 30, 80, 50, 65, 90, 40, 70].map((h, i) => (
                                        <div key={i} className="flex-1 bg-[#EAD49E]/40 rounded-t-sm hover:bg-[#EAD49E] transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StallionsList;
