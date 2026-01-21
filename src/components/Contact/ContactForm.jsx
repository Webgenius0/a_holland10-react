import React from 'react';
import { Button } from "@/components/ui/button";

const ContactForm = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#06211B] mb-4">
                        Feel free to contact us.
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#06211B] mb-12">
                        We'll be glad to hear from you.
                    </h3>

                    <form className="grid grid-cols-1 gap-6">
                        <div className="bg-white border border-[#F4F7F7] shadow-sm rounded-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-4 md:p-5 text-[#06211B] placeholder:text-[#6C7E7B]/50 focus:outline-none focus:bg-[#F4F7F7]/30 transition-all"
                            />
                        </div>
                        <div className="bg-white border border-[#F4F7F7] shadow-sm rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 md:p-5 text-[#06211B] placeholder:text-[#6C7E7B]/50 focus:outline-none focus:bg-[#F4F7F7]/30 transition-all"
                            />
                        </div>
                        <div className="bg-white border border-[#F4F7F7] shadow-sm rounded-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-4 md:p-5 text-[#06211B] placeholder:text-[#6C7E7B]/50 focus:outline-none focus:bg-[#F4F7F7]/30 transition-all"
                            />
                        </div>
                        <div className="bg-white border border-[#F4F7F7] shadow-sm rounded-lg overflow-hidden">
                            <textarea
                                placeholder="Enter your message here."
                                rows={6}
                                className="w-full p-4 md:p-5 text-[#06211B] placeholder:text-[#6C7E7B]/50 focus:outline-none focus:bg-[#F4F7F7]/30 transition-all resize-none"
                            />
                        </div>

                        <div className="mt-4">
                            <Button
                                className="bg-[#EDD191] text-[#06211B] hover:bg-[#e0c485] font-bold px-10 py-6 text-lg rounded-[4px] shadow-sm hover:scale-105 transition-all"
                            >
                                Submit Now
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
