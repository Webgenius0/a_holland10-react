import React from 'react';
import { Outlet } from 'react-router-dom';
import horseRider from '../assets/images/horseRider.png';
import logo from '../assets/images/logo.png';

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            {/* Left Side: Form Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                <div className="max-w-md w-full mx-auto">
                    {/* Logo */}
                    <div className="mb-12">
                        <img src={logo} alt="Stallion Logo" className="h-12 w-auto" />
                    </div>

                    {/* Page Content */}
                    <Outlet />
                </div>
            </div>

            {/* Right Side: Decorative Image Section */}
            <div className="hidden lg:flex w-1/2 bg-[#06211B] relative overflow-hidden items-center justify-center p-20">
                {/* Background Pattern/Circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4B47F]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4B47F]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                <div className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center">
                    {/* Concentric Circles Decor */}
                    <div className="absolute inset-0 border border-white/5 rounded-full scale-125"></div>
                    <div className="absolute inset-0 border border-white/10 rounded-full scale-110"></div>

                    {/* Main Image in a circle or decorative frame */}
                    <div className="relative w-full h-full rounded-full bg-[#D4B47F]/20 flex items-center justify-center overflow-hidden border-8 border-white/10 shadow-2xl">
                        <img
                            src={horseRider}
                            alt="Horse Racing"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Stats/Info Cards */}
                    <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl max-w-[180px]" data-aos="fade-left">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#D4B47F] flex items-center justify-center">
                                <span className="text-white text-xs font-bold">1</span>
                            </div>
                            <span className="text-white text-xs font-bold uppercase tracking-wider">Top Stallions</span>
                        </div>
                        <p className="text-white/80 text-[10px] leading-relaxed">
                            Select 7 stallions from our roster. Each stallion has unique stats.
                        </p>
                    </div>

                    <div className="absolute bottom-12 -left-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl max-w-[180px]" data-aos="fade-right">
                        <div className="flex -space-x-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-blue-400 border border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-green-400 border border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-red-400 border border-white"></div>
                        </div>
                        <h4 className="text-white text-xs font-bold mb-1">Creating stallions</h4>
                        <p className="text-white/80 text-[10px] leading-relaxed">
                            Draft a team that will shine in the races.
                        </p>
                        <span className="text-white/40 text-[8px] mt-2 block">10am on 20 March 2021</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
