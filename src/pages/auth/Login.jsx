import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div data-aos="fade-up">
            <h1 className="text-3xl font-bold text-[#06211B] mb-2 text-center lg:text-left">
                Welcome to Stallion Fantasy League
            </h1>
            <p className="text-[#637381] mb-10 text-center lg:text-left">
                Create your account to start your journey
            </p>

            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-[#06211B] mb-2 pl-1">Email address</label>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full h-14 bg-[#F8FAFA] border border-[#E5E9E8] rounded-xl px-12 focus:outline-none focus:border-[#D4B47F] transition-all text-[#06211B]"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3B1AF]" size={20} />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2 pl-1">
                        <label className="block text-sm font-semibold text-[#06211B]">Password</label>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full h-14 bg-[#F8FAFA] border border-[#E5E9E8] rounded-xl px-12 focus:outline-none focus:border-[#D4B47F] transition-all text-[#06211B]"
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3B1AF]" size={20} />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3B1AF] hover:text-[#06211B] transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 rounded border-[#E5E9E8] text-[#D4B47F] focus:ring-[#D4B47F]"
                        />
                        <label htmlFor="remember" className="text-sm text-[#637381]">Remember me</label>
                    </div>
                    <Link to="/forgot-password" size="sm" className="text-sm font-semibold text-[#06211B] hover:text-[#D4B47F] transition-colors">
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full h-14 bg-[#EAD49E] hover:bg-[#D4B47F] text-[#06211B] font-bold rounded-xl shadow-lg transition-all duration-300 transform active:scale-95"
                >
                    Login
                </button>

                <div className="relative my-8 text-center text-sm">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#E5E9E8]"></div>
                    </div>
                    <span className="relative px-4 bg-white text-[#A3B1AF]">Or</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button type="button" className="flex items-center justify-center gap-3 h-14 border border-[#E5E9E8] rounded-xl hover:bg-[#F8FAFA] font-semibold text-[#06211B] transition-all">
                        Sign up with Google
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
                        
                    </button>
                    <button type="button" className="flex items-center justify-center gap-3 h-14 border border-[#E5E9E8] rounded-xl hover:bg-[#F8FAFA] font-semibold text-[#06211B] transition-all">
                        
                        
                        Sign up with Apple
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M12.6831 4.68164C14.0412 4.68182 15.4796 5.42689 16.5034 6.71094C13.1468 8.56211 13.6905 13.3848 17.0825 14.6748C16.6162 15.7143 16.3913 16.1788 15.7905 17.0996C14.9525 18.3849 13.7708 19.9852 12.3052 19.9971C11.0043 20.0112 10.6687 19.1448 8.90283 19.1553C7.13665 19.1647 6.76766 20.0139 5.46436 20.001C3.99996 19.9878 2.88049 18.5431 2.04248 17.2578C-0.302188 13.6663 -0.548909 9.45061 0.896973 7.20801C1.92553 5.61585 3.54767 4.68468 5.07178 4.68457C6.6227 4.68457 7.59893 5.53983 8.8833 5.54004C10.1293 5.54004 10.8889 4.68164 12.6831 4.68164ZM12.2905 0C12.4694 1.21478 11.975 2.40506 11.3228 3.24707C10.625 4.15013 9.42256 4.84877 8.25732 4.8125C8.04459 3.64945 8.58873 2.45107 9.25146 1.64551C9.97847 0.75649 11.2245 0.0741423 12.2905 0Z" fill="#0B0B0A" />
                        </svg></span>
                    </button>
                </div>

                <p className="text-center text-[#637381] mt-10">
                    Don't have an account? <Link to="/sign-up" className="font-bold text-[#D4B47F] hover:underline">Create Account</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
