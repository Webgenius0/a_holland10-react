import React, { useState } from 'react';
import { Search, Plus, X, Info, ChevronDown, Star, AlertCircle } from 'lucide-react';

const TeamBuilder = () => {
    const [selectedStallions, setSelectedStallions] = useState([]);
    const [captainId, setCaptainId] = useState(null);

    const availableStallions = [
        { id: 1, name: "Arlene McCoy", type: "Colt", points: "198 pts", price: "$11M", isFirstSeason: false },
        { id: 2, name: "Kathryn Murphy", type: "Filly", points: "198 pts", price: "$11M", isFirstSeason: false },
        { id: 3, name: "Galileo", type: "Stallion", points: "198 pts", price: "$11M", isFirstSeason: true },
        { id: 4, name: "Guy Hawkins", type: "Colt", points: "198 pts", price: "$11M", isFirstSeason: false },
        { id: 5, name: "Ralph Edwards", type: "Filly", points: "198 pts", price: "$11M", isFirstSeason: false },
    ];

    const toggleStallion = (stallion) => {
        if (selectedStallions.find(s => s.id === stallion.id)) {
            const newList = selectedStallions.filter(s => s.id !== stallion.id);
            setSelectedStallions(newList);
            if (captainId === stallion.id) setCaptainId(null);
        } else if (selectedStallions.length < 7) {
            setSelectedStallions([...selectedStallions, stallion]);
        }
    };

    const firstSeasonCount = selectedStallions.filter(s => s.isFirstSeason).length;
    const isTeamComplete = selectedStallions.length === 7 && firstSeasonCount >= 1 && captainId !== null;

    return (
        <div className="space-y-6" data-aos="fade-up">
            <div>
                <h1 className="text-2xl font-bold text-[#06211B] mb-1">Team Builder</h1>
                <p className="text-sm text-[#637381]">Select 7 stallions for your team</p>
            </div>

            {/* Alert Info Bar */}
            <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6 text-[#0369A1] text-xs font-bold">
                    <div className="flex items-center gap-2">
                        <Info size={16} />
                        <span>Alert Info</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <UserIcon size={14} className="opacity-60" />
                        <span>7 Stallions Required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star size={14} className="opacity-60" />
                        <span>1 First Season Sire Required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star size={14} className="opacity-60" />
                        <span>Captain Required</span>
                    </div>
                </div>
                <div className="bg-[#BAE6FD] text-[#0369A1] px-4 py-2 rounded-xl text-xs font-bold">
                    Budget: $70.0M remaining
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Available Stallions */}
                <div className="flex-1 space-y-6">
                    <h3 className="text-lg font-bold text-[#06211B]">Available Stallions</h3>
                    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#F1F5F5]">
                        {/* Search and Filters */}
                        <div className="space-y-4 mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3B1AF]" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-11 bg-[#F8FAFA] border border-[#E5E9E8] rounded-xl pl-12 pr-4 text-sm focus:outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] text-[#A3B1AF] font-bold uppercase ml-1">Price</span>
                                    <div className="relative">
                                        <select className="w-full h-11 bg-white border border-[#E5E9E8] rounded-xl px-4 text-sm appearance-none focus:outline-none">
                                            <option>High to Low</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3B1AF]" size={16} />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] text-[#A3B1AF] font-bold uppercase ml-1">Season</span>
                                    <div className="relative">
                                        <select className="w-full h-11 bg-white border border-[#E5E9E8] rounded-xl px-4 text-sm appearance-none focus:outline-none">
                                            <option>1st Season</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3B1AF]" size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="space-y-3">
                            {availableStallions.map((stallion) => (
                                <div key={stallion.id} className="p-4 rounded-2xl border border-[#F1F5F5] flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-sm font-bold text-[#06211B]">{stallion.name}</h4>
                                            {stallion.isFirstSeason && (
                                                <span className="px-2 py-0.5 bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold rounded-lg flex items-center gap-1">
                                                    <Star size={10} className="fill-current" /> 1st Season
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-[#A3B1AF] mt-1 font-medium">{stallion.price} • {stallion.points}</p>
                                    </div>
                                    <button
                                        onClick={() => toggleStallion(stallion)}
                                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${selectedStallions.find(s => s.id === stallion.id)
                                            ? "bg-[#EAD49E] text-white"
                                            : "bg-[#FFF9EA] text-[#EAD49E] hover:bg-[#EAD49E] hover:text-[#06211B]"
                                            }`}
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* My Team Summary */}
                <div className="w-full lg:w-96 space-y-6">
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5]">
                        <h3 className="text-lg font-bold text-[#06211B] mb-6">My Team ({selectedStallions.length}/7)</h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-[#637381] font-medium">Budget Used:</span>
                                <span className="text-[#06211B] font-bold">$49.5M / $100M</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-[#637381] font-medium">Budget Remaining:</span>
                                <span className="text-[#06211B] font-bold">$0.5M</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-[#637381] font-medium">First Season Sires:</span>
                                <span className="text-[#22C55E] font-bold">{firstSeasonCount} / 2</span>
                            </div>
                        </div>

                        {/* Captain Alert */}
                        {selectedStallions.length > 0 && captainId === null && (
                            <div className="bg-red-50 text-red-500 p-4 rounded-2xl flex items-center gap-3 text-xs font-bold mb-6">
                                <AlertCircle size={18} />
                                <span>You must choose a captain</span>
                            </div>
                        )}

                        {/* Selected Stallions List */}
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {selectedStallions.map((stallion) => (
                                <div key={stallion.id} className="p-4 rounded-2xl border border-[#F1F5F5] relative bg-white group">
                                    <button
                                        onClick={() => toggleStallion(stallion)}
                                        className="absolute top-2 right-2 text-[#A3B1AF] hover:text-red-500"
                                    >
                                        <X size={14} />
                                    </button>
                                    <div className="flex justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-sm font-bold text-[#06211B]">{stallion.name}</h4>
                                                {captainId === stallion.id && <Star size={14} className="text-[#EAD49E] fill-current" />}
                                            </div>
                                            <p className="text-xs text-[#A3B1AF] font-bold mt-1">$11M</p>
                                        </div>
                                    </div>
                                    {captainId === stallion.id ? (
                                        <div className="w-full h-10 bg-[#FFF9EA] text-[#EAD49E] rounded-xl flex items-center justify-center gap-2 text-xs font-bold">
                                            ✓ Captain
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setCaptainId(stallion.id)}
                                            className="w-full h-10 border border-[#F1F5F5] text-[#06211B] rounded-xl flex items-center justify-center text-xs font-bold hover:bg-[#F8FAFA]"
                                        >
                                            Make Captain
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            className={`w-full h-14 font-bold rounded-xl mt-8 transition-all shadow-lg ${isTeamComplete
                                ? "bg-[#22C55E] text-white hover:bg-[#16A34A]"
                                : "bg-[#E5E9E8] text-[#A3B1AF] cursor-not-allowed"
                                }`}
                        >
                            Save Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Icon for Stallions count in alert bar
const UserIcon = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
);

export default TeamBuilder;
