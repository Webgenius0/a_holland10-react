import React, { useState } from 'react';
import { User, Bell, Lock, ChevronDown, Camera, Info } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'password', label: 'Change Password', icon: Lock },
    ];

    const [notifSettings, setNotifSettings] = useState({
        deadlineReminders: true,
        weeklySummary: true,
        captainPerformance: false,
        transferUpdates: true,
        weeklyData: false,
        announcements: true
    });

    const toggleNotif = (key) => {
        setNotifSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-8" data-aos="fade-up">
            <div>
                <h1 className="text-2xl font-bold text-[#06211B] mb-1">Account</h1>
                <div className="flex items-center gap-2 text-xs text-[#6C7E7B] font-medium">
                    <span>Dashboard</span>
                    <span>•</span>
                    <span>Setting</span>
                    <span>•</span>
                    <span className="text-[#06211B]">
                        {activeTab === 'general' ? 'Account Settings' : activeTab === 'notifications' ? 'Notifications' : 'Change Password'}
                    </span>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex gap-8 border-b border-[#F1F5F5]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 pb-4 text-xs font-bold transition-all relative ${activeTab === tab.id
                                ? "text-[#06211B]"
                                : "text-[#A3B1AF] hover:text-[#6C7E7B]"
                            }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EAD49E]"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="pt-4">
                {activeTab === 'general' && (
                    <div className="flex flex-col xl:flex-row gap-8">
                        {/* Profile Image card */}
                        <div className="w-full xl:w-1/3">
                            <div className="bg-white rounded-[32px] p-12 shadow-sm border border-[#F1F5F5] flex flex-col items-center justify-center text-center h-full">
                                <div className="relative group cursor-pointer mb-6">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#EAD49E]">
                                        <img src="https://i.pravatar.cc/200?u=carlota" alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera className="text-white" size={24} />
                                    </div>
                                </div>
                                <p className="text-[10px] text-[#A3B1AF] font-bold leading-relaxed max-w-[140px]">
                                    Allowed *.jpeg, *.jpg, *.png, *.gif <br /> max size of 3.0 MB
                                </p>
                            </div>
                        </div>

                        {/* Form card */}
                        <div className="flex-1">
                            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#F1F5F5] space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField label="First Name" value="Carlota" />
                                    <InputField label="Last Name" value="Monteiro" />
                                    <InputField label="Email Address" value="carlota_monte@yahoo.com" />
                                    <InputField label="Phone Number" value="+01 4328 15357" />
                                    <div className="md:col-span-2">
                                        <InputField label="Address" value="Cecilia Chapman 711-2880 Nulla St." />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] text-[#A3B1AF] font-bold uppercase ml-1">Country</label>
                                        <div className="relative">
                                            <select className="w-full h-11 bg-white border border-[#E5E9E8] rounded-xl px-4 text-sm appearance-none focus:outline-none">
                                                <option>USA</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3B1AF]" size={16} />
                                        </div>
                                    </div>
                                    <InputField label="State/Region" value="Mississippi" />
                                    <InputField label="City" value="Mankato" />
                                    <InputField label="Zip Code" value="96522" />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button className="bg-[#EAD49E] text-[#06211B] px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#D4B47F] transition-all shadow-sm">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'notifications' && (
                    <div className="bg-white rounded-[32px] p-10 shadow-sm border border-[#F1F5F5] max-w-4xl">
                        <div className="space-y-10">
                            {/* Activity Section */}
                            <div className="space-y-6">
                                <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-widest">Activity</p>
                                <div className="space-y-4">
                                    <ToggleSetting
                                        label="Nationwide deadline reminders"
                                        active={notifSettings.deadlineReminders}
                                        onToggle={() => toggleNotif('deadlineReminders')}
                                    />
                                    <ToggleSetting
                                        label="Weekly Team Summary"
                                        active={notifSettings.weeklySummary}
                                        onToggle={() => toggleNotif('weeklySummary')}
                                    />
                                    <ToggleSetting
                                        label="Captain Performance Summary"
                                        active={notifSettings.captainPerformance}
                                        onToggle={() => toggleNotif('captainPerformance')}
                                    />
                                </div>
                            </div>

                            {/* Application Section */}
                            <div className="space-y-6">
                                <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-widest">Application</p>
                                <div className="space-y-4">
                                    <ToggleSetting
                                        label="Transfer Availability Update"
                                        active={notifSettings.transferUpdates}
                                        onToggle={() => toggleNotif('transferUpdates')}
                                    />
                                    <ToggleSetting
                                        label="Weekly data update"
                                        active={notifSettings.weeklyData}
                                        onToggle={() => toggleNotif('weeklyData')}
                                    />
                                    <ToggleSetting
                                        label="New Announcements"
                                        active={notifSettings.announcements}
                                        onToggle={() => toggleNotif('announcements')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-12">
                            <button className="bg-[#EAD49E] text-[#06211B] px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#D4B47F] transition-all shadow-sm">
                                Save changes
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'password' && (
                    <div className="bg-white rounded-[32px] p-10 shadow-sm border border-[#F1F5F5] max-w-4xl">
                        <div className="space-y-6">
                            <InputField label="Old Password" type="password" value="••••••••" />
                            <div className="space-y-2">
                                <InputField label="New Password" type="password" />
                                <div className="flex items-center gap-1.5 text-[10px] text-[#A3B1AF] font-bold">
                                    <Info size={14} />
                                    <span>Password must be minimum 8 characters</span>
                                </div>
                            </div>
                            <InputField label="Confirm New Password" type="password" />
                        </div>
                        <div className="flex justify-end mt-10">
                            <button className="bg-[#EAD49E] text-[#06211B] px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-[#D4B47F] transition-all shadow-sm">
                                Save changes
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const InputField = ({ label, value, type = 'text' }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] text-[#A3B1AF] font-bold uppercase ml-1">{label}</label>
        <input
            type={type}
            defaultValue={value}
            className="w-full h-11 bg-white border border-[#E5E9E8] rounded-xl px-4 text-sm focus:outline-none focus:border-[#D4B47F] transition-all"
        />
    </div>
);

const ToggleSetting = ({ label, active, onToggle }) => (
    <div className="flex items-center justify-between group cursor-pointer" onClick={onToggle}>
        <span className="text-sm font-bold text-[#06211B]">{label}</span>
        <div className={`w-10 h-5 rounded-full transition-all relative ${active ? 'bg-[#EAD49E]' : 'bg-[#e5e9e8]'}`}>
            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${active ? 'left-6' : 'left-1'}`}></div>
        </div>
    </div>
);

export default Settings;
