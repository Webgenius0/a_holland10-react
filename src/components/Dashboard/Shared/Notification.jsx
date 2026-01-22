import React from 'react';
import { Clock, CheckCheck, Bell, User, Calendar, Mail, TrendingUp } from 'lucide-react';

const NotificationItem = ({ icon: Icon, iconBg, title, description, time, isNew }) => (
    <div className={`p-4 flex gap-4 hover:bg-[#F8FAFA] transition-colors cursor-pointer ${isNew ? 'bg-white' : ''}`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
            <Icon size={18} className={iconBg.includes('blue') ? 'text-blue-500' : iconBg.includes('green') ? 'text-green-500' : iconBg.includes('orange') ? 'text-orange-500' : iconBg.includes('red') ? 'text-red-400' : 'text-[#A3B1AF]'} />
        </div>
        <div className="flex-1">
            <p className="text-[13px] leading-tight mb-1">
                <span className="font-bold text-[#06211B]">{title}</span>
                <span className="text-[#6C7E7B] ml-1">{description}</span>
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-[#A3B1AF] font-bold">
                <Clock size={12} />
                <span>{time}</span>
            </div>
        </div>
    </div>
);

const Notification = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute top-16 right-0 w-80 md:w-96 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#F1F5F5] overflow-hidden z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Header */}
            <div className="p-6 border-b border-[#F1F5F5]">
                <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-bold text-[#06211B]">Notifications</h3>
                    <button className="text-[#EAD49E] hover:text-[#D4B47F] transition-colors" title="Mark all as read">
                        <CheckCheck size={20} />
                    </button>
                </div>
                <p className="text-xs text-[#6C7E7B]">You have 4 unread messages</p>
            </div>

            {/* Scrollable Content */}
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                {/* New Section */}
                <div className="px-6 py-4 bg-[#F8FAFA]/50 border-b border-[#F1F5F5]">
                    <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-widest">New</p>
                </div>
                <NotificationItem
                    icon={Bell}
                    iconBg="bg-blue-50"
                    title="Sadou Mokaté"
                    description="Your captain scored 36 points (18 x2)."
                    time="3 hours ago"
                    isNew={true}
                />
                <NotificationItem
                    icon={CheckCheck}
                    iconBg="bg-green-50"
                    title="Your Team Build"
                    description="successfully."
                    time="07 Sep 2020"
                    isNew={true}
                />

                {/* Earlier Section */}
                <div className="px-6 py-4 bg-[#F8FAFA]/50 border-b border-[#F1F5F5]">
                    <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-widest">Before That</p>
                </div>
                <NotificationItem
                    icon={Calendar}
                    iconBg="bg-orange-50"
                    title="Gameweek Deadline"
                    description="tomorrow at 12:00 PM"
                    time="07 Sep 2020"
                />
                <NotificationItem
                    icon={Mail}
                    iconBg="bg-red-50"
                    title="You have new mail"
                    description="sent from guido padberg"
                    time="07 Sep 2020"
                />
                <NotificationItem
                    icon={TrendingUp}
                    iconBg="bg-green-50"
                    title="Top Points Scorer Today:"
                    description="Frankel - 18 pts"
                    time="3 hours ago"
                />
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-[#F1F5F5] text-center">
                <button className="text-sm font-bold text-[#EAD49E] hover:text-[#D4B47F] transition-colors">
                    View All
                </button>
            </div>
        </div>
    );
};

export default Notification;