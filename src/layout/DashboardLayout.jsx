import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    List,
    Calendar,
    Trophy,
    Headphones,
    Settings,
    LogOut,
    Search,
    Bell
} from 'lucide-react';
import logo from '../assets/images/logo.png';
import Notification from '../components/Dashboard/Shared/Notification';

const SidebarItem = ({ icon: Icon, label, path, active }) => (
    <Link
        to={path}
        className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${active
            ? "bg-[#EAD49E] text-[#06211B] font-bold shadow-md"
            : "text-[#6C7E7B] hover:bg-[#F8FAFA] hover:text-[#06211B]"
            }`}
    >
        <Icon size={20} />
        <span className="text-sm">{label}</span>
    </Link>
);

const DashboardLayout = () => {
    const location = useLocation();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: Users, label: "Team Builder", path: "/dashboard/team-builder" },
        { icon: List, label: "Stallions List", path: "/dashboard/stallions" },
        { icon: Calendar, label: "Gameweeks", path: "/dashboard/gameweeks" },
        { icon: Calendar, label: "Transfers", path: "/dashboard/transfers" },
        { icon: Trophy, label: "Leaderboards", path: "/dashboard/leaderboards" },
    ];

    const managementItems = [
        { icon: Headphones, label: "Support", path: "/dashboard/support" },
        { icon: Settings, label: "Setting", path: "/dashboard/settings" },
        { icon: LogOut, label: "Log Out", path: "/login" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFA] flex">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-[#F1F5F5] fixed h-full overflow-y-auto hidden lg:block z-20">
                <div className="p-8">
                    <img src={logo} alt="Stallion Logo" className="h-10 w-auto mb-10" />

                    {/* User Profile Card */}
                    <div className="bg-[#F8FAFA] rounded-2xl p-4 mb-10 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#EAD49E] overflow-hidden border-2 border-white">
                            <img src="https://i.pravatar.cc/100?u=carlota" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-[#06211B]">Carlota Monteiro</h4>
                            <p className="text-[10px] text-[#A3B1AF]">monte@gmail.com</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-widest mb-4 px-2">General</p>
                        {menuItems.map((item, idx) => (
                            <SidebarItem
                                key={idx}
                                {...item}
                                active={location.pathname === item.path || (item.path === "/dashboard" && location.pathname === "/dashboard")}
                            />
                        ))}

                        <p className="text-[10px] font-bold text-[#A3B1AF] uppercase tracking-widest mt-10 mb-4 px-2">Management</p>
                        {managementItems.map((item, idx) => (
                            <SidebarItem
                                key={idx}
                                {...item}
                            />
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-72 flex flex-col min-h-screen">
                {/* Header */}
                <header className="h-20 bg-white border-b border-[#F1F5F5] flex items-center justify-between px-10 sticky top-0 z-50">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3B1AF]" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full h-11 bg-[#F8FAFA] border border-[#E5E9E8] rounded-full pl-12 pr-4 text-sm focus:outline-none focus:border-[#D4B47F] transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-6 relative">
                        <button
                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                            className={`relative p-2 transition-colors rounded-full ${isNotificationOpen ? 'bg-[#F8FAFA] text-[#06211B]' : 'text-[#6C7E7B] hover:text-[#06211B]'}`}
                        >
                            <Bell size={22} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>

                        {/* Notification Dropdown */}
                        <Notification isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#EAD49E]">
                                <img src="https://i.pravatar.cc/100?u=carlota" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-8 flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

