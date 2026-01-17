import React from 'react'

function Why100x() {
    const features = [
        {
            title: "Live Interactive Sessions",
            description: "Learn in real-time with weekend live sessions, interactive Q&A, and direct mentorship from industry experts.",
            icon: "< />",
            variant: "white"
        },
        {
            title: "Real Engineer, Real Experience",
            description: "Learn from Harkirat Singh who has built & scaled real-world systems at top tech companies.",
            icon: "< />",
            variant: "navy"
        },
        {
            title: "Learn by Doing",
            description: "Hands-on projects, open-source contributions & practical coding. Build payment systems, automation tools & end-to-end applications.",
            icon: "< />",
            variant: "white"
        }
    ]

    return (
        <section className="bg-[#f0f2f5] py-24 px-4 md:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-[48px] md:text-[64px] font-black text-primary mb-4 tracking-tighter">
                    Why 100xDevs?
                </h2>
                <p className="text-[#6b7280] text-[20px] font-medium opacity-80">
                    Our most comprehensive and impactful learning experiences
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Navigation Arrows */}
                <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-500/50 text-white rounded-full flex items-center justify-center z-20 hover:bg-gray-700 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-500/50 text-white rounded-full flex items-center justify-center z-20 hover:bg-gray-700 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                <div className="flex gap-6 justify-center">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex-1 min-w-[350px] max-w-[400px] p-10 rounded-[32px] shadow-sm flex flex-col items-start text-left transition-all duration-500 ${feature.variant === 'navy'
                                    ? 'bg-primary text-white scale-105 z-10 shadow-2xl'
                                    : 'bg-white text-primary'
                                }`}
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 font-bold text-lg ${feature.variant === 'navy'
                                    ? 'bg-white text-primary'
                                    : 'bg-secondary/20 text-secondary'
                                }`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-[24px] font-black mb-3 pr-4 leading-tight">
                                {feature.title}
                            </h3>

                            {/* The teal underscore */}
                            <div className="w-12 h-0.5 bg-secondary mb-8"></div>

                            <p className={`text-[16px] leading-relaxed font-medium ${feature.variant === 'navy' ? 'opacity-80' : 'text-[#6b7280]'
                                }`}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Why100x
