import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const ForgotPassword = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col  p-6">
            {/* Logo */}
            <div className="mb-10">
                <img src={logo} alt="Stallion Logo" className="h-12 w-auto" />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full flex-grow ">
                <div className="max-w-md w-full " data-aos="zoom-in">


                    <div className="text-center mb-10">
                        <h1 className="text-2xl font-bold text-[#06211B] mb-3">
                            Forgot your password?
                        </h1>
                        <p className="text-[#637381] text-sm leading-relaxed">
                            Please enter the email address associated with your account, and we'll send you a link to reset your password.
                        </p>
                    </div>

                    <form className="space-y-8">
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

                        <button
                            type="submit"
                            className="w-full h-14 bg-[#EAD49E] hover:bg-[#D4B47F] text-[#06211B] font-bold rounded-xl shadow-lg transition-all duration-300 transform active:scale-95"
                        >
                            Reset Password
                        </button>

                        <div className="text-center">
                            <Link to="/login" className="inline-flex items-center gap-2 text-[#EDD191]  text-[15px] not-italic font-bold leading-[26px]hover:text-[#D4B47F] transition-colors">
                                <ArrowLeft size={16} />
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ForgotPassword;
