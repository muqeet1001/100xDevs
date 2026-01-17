import React from 'react'

function Mentorship() {
    return (
        <section className="bg-white py-24 px-4 md:px-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 order-2 md:order-1">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-secondary/20 rounded-[4rem] blur-2xl group-hover:bg-secondary/30 transition-all duration-700 -z-10"></div>
                        <img
                            src="/src/assets/harkirat.png"
                            alt="Harkirat Singh"
                            className="w-full max-w-sm mx-auto md:mx-0 rounded-[3rem] shadow-2xl relative z-10 hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 hidden lg:block border border-gray-100">
                            <p className="text-primary font-black text-2xl mb-1 mt-[-4px]">100x</p>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Engineer Mindset</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 order-1 md:order-2">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 tracking-tight leading-tight">
                        Personally mentoring India's next 100x engineers
                    </h2>
                    <p className="text-body-text text-lg mb-8 leading-relaxed font-medium">
                        Join Harkirat Singh on a journey to master the art of engineering. This isn't just about learning to code—it's about understanding how to build, scale, and maintain massive systems.
                    </p>
                    <div className="space-y-6">
                        {[
                            { title: "Real World experience", text: "Learn what actually happens in production environments." },
                            { title: "Practical projects", text: "Build systems that solve real problems, not toy projects." },
                            { title: "Direct mentorship", text: "Get your doubts resolved in live sessions with Harkirat." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex-shrink-0 flex items-center justify-center text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mentorship
