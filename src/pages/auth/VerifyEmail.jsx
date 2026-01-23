import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const VerifyEmail = () => {
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col p-6">
            {/* Logo */}
            <div className="mb-10">
                <img src={logo} alt="Stallion Logo" className="h-12 w-auto" />
            </div>

            <div className="flex flex-col justify-center items-center h-full w-full flex-grow">
                <div className="max-w-md w-full" data-aos="zoom-in">
                    <div className="text-center mb-10">
                        <h1 className="text-2xl font-bold text-[#06211B] mb-3">
                            Please check your email!
                        </h1>
                        <p className="text-[#637381] text-sm leading-relaxed mb-10">
                            We've emailed a 5-digit confirmation code to u.s@arabian.com, please enter the code in below box to verify your email.
                        </p>
                    </div>

                    <form className="space-y-10">
                        <div className="flex justify-center gap-3">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className="w-14 h-14 bg-[#F8FAFA] border border-[#E5E9E8] rounded-xl text-center text-xl font-bold text-[#06211B] focus:outline-none focus:border-[#D4B47F] transition-all"
                                    value={data}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="w-full h-14 bg-[#EAD49E] hover:bg-[#D4B47F] text-[#06211B] font-bold rounded-xl shadow-lg transition-all duration-300 transform active:scale-95"
                        >
                            Verify
                        </button>

                        <div className="text-center space-y-4">
                            <p className="text-sm text-[#637381]">
                                Didn't receive code? <button type="button" className="font-bold text-[#D4B47F] hover:underline">Resend code</button>
                            </p>
                            <div>
                                <Link to="/sign-up" className="inline-flex items-center gap-2 text-[#EDD191] text-[15px] font-bold hover:text-[#D4B47F] transition-colors leading-[26px]">
                                    <ArrowLeft size={16} />
                                    Back
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
