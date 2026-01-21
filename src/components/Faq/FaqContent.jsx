import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FaqContent = () => {
    const faqs = [
        { id: "item-1", question: "Questions 1", answer: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in," },
        { id: "item-2", question: "Questions 2", answer: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in," },
        { id: "item-3", question: "Questions 3", answer: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in," },
        { id: "item-4", question: "Questions 4", answer: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in," },
        { id: "item-5", question: "Questions 5", answer: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in," },
        { id: "item-6", question: "Questions 6", answer: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in," },
        { id: "item-7", question: "Questions 7", answer: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in," },
        { id: "item-8", question: "Questions 8", answer: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in," },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col gap-12">
                    <h2 className="text-4xl font-bold text-[#06211B] tracking-tight">
                        Frequently asked questions
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* FAQ Column */}
                        <div className="lg:col-span-7">
                            <Accordion type="single" collapsible className="w-full flex flex-col gap-0">
                                {faqs.map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border-b border-[#F4F7F7] last:border-b-0 py-2"
                                    >
                                        <AccordionTrigger className="text-[#06211B] font-bold text-lg hover:no-underline py-6">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[#6C7E7B] text-base leading-relaxed pb-6">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Contact Form Column */}
                        <div className="lg:col-span-5">
                            <div className="bg-white border border-[#F4F7F7] rounded-[24px] p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] h-fit">
                                <h3 className="text-2xl font-bold text-[#06211B] mb-8 leading-tight">
                                    Haven't found the right help?
                                </h3>
                                <form className="flex flex-col gap-5">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-[#F4F7F7] border-none rounded-lg p-5 text-[#06211B] placeholder:text-[#6C7E7B]/50 transition-all text-base outline-none focus:bg-[#EBF1F1]"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-[#F4F7F7] border-none rounded-lg p-5 text-[#06211B] placeholder:text-[#6C7E7B]/50 transition-all text-base outline-none focus:bg-[#EBF1F1]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full bg-[#F4F7F7] border-none rounded-lg p-5 text-[#06211B] placeholder:text-[#6C7E7B]/50 transition-all text-base outline-none focus:bg-[#EBF1F1]"
                                    />
                                    <textarea
                                        placeholder="Enter your message here."
                                        rows={5}
                                        className="w-full bg-[#F4F7F7] border-none rounded-lg p-5 text-[#06211B] placeholder:text-[#6C7E7B]/50 transition-all text-base outline-none resize-none focus:bg-[#EBF1F1]"
                                    />
                                    <div className="mt-2">
                                        <Button
                                            className="bg-[#EDD191] text-[#06211B] hover:bg-[#e0c485] font-bold px-10 py-6 text-lg rounded-[6px]"
                                        >
                                            Submit Now
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};


export default FaqContent;
