import React, { useState } from 'react'

function FAQ() {
    const faqs = [
        {
            question: "What makes 100xDevs different from other coding platforms?",
            answer: "We focus on hands-on open source projects, real-world systems, and mentorship from engineers who have actually scaled systems at top companies."
        },
        {
            question: "Do I need prior coding experience to join?",
            answer: "We have cohorts for beginners as well as advanced developers. Check the specific cohort details for prerequisites."
        },
        {
            question: "What kind of support can I expect?",
            answer: "You'll have access to our private Discord community, weekly live interactive sessions, and direct Q&A during mentorship sessions."
        },
        {
            question: "Are the courses self-paced or scheduled?",
            answer: "Our bootcamps usually follow a weekend schedule with live sessions, but all recordings and materials are available for lifetime access."
        },
        {
            question: "Will I get a certificate after completion?",
            answer: "Yes, you will receive a verifiable certificate after completing the course and required projects."
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="bg-[#eaebed] py-24 px-4 md:px-20 min-h-[600px] flex flex-col items-center">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-20">
                    <h2 className="text-[56px] font-black text-primary mb-2 tracking-tighter">
                        FAQs
                    </h2>
                    <p className="text-[#6b7280] text-[18px] font-medium opacity-80">
                        Get your questions answered
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left py-6 flex items-center justify-between gap-4 group cursor-pointer"
                            >
                                <span className="text-[20px] font-bold text-primary group-hover:opacity-70 transition-opacity">
                                    {faq.question}
                                </span>
                                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary opacity-60">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <div className="text-[#6b7280] text-[18px] font-medium leading-relaxed max-w-3xl">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
