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
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
                        Sign up with Google
                    </button>
                    <button type="button" className="flex items-center justify-center gap-3 h-14 border border-[#E5E9E8] rounded-xl hover:bg-[#F8FAFA] font-semibold text-[#06211B] transition-all">
                        <img src="https://www.svgrepo.com/show/330030/apple.svg" className="h-5 w-5" alt="Apple" />
                        Sign up with Apple
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
