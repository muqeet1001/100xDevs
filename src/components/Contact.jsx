import React from 'react'
import homeGlobe from '../assets/home-globe.svg'

function Contact() {
    return (
        <section className="bg-primary min-h-[600px] flex flex-col md:flex-row overflow-hidden relative">
            {/* Left Side: Globe Visual */}
            <div className="flex-1 relative min-h-[400px] md:min-h-0 flex items-center justify-center bg-[#071933]">
                <div className="absolute inset-0 opacity-40">
                    <img src={homeGlobe} alt="Globe" className="w-full h-full object-cover" />
                </div>

                {/* Floating Tags (Approximate positions from image) */}
                <div className="absolute top-[25%] left-[15%] bg-white rounded-2xl rounded-tr-none px-4 py-3 shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="text-primary font-bold text-xl">{"</>"}</span>
                </div>

                <div className="absolute top-[40%] right-[20%] bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                    <span className="text-primary font-bold text-xl">{"</>"}</span>
                </div>

                <div className="absolute bottom-[30%] left-[25%] bg-white rounded-2xl rounded-br-none px-4 py-3 shadow-2xl animate-bounce" style={{ animationDuration: '5s' }}>
                    <span className="text-primary font-bold text-xl">{"</>"}</span>
                </div>

                <div className="absolute bottom-[15%] left-[10%] bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-2xl animate-bounce" style={{ animationDuration: '3.5s' }}>
                    <span className="text-primary font-bold text-xl">{"</>"}</span>
                </div>

                <div className="absolute top-[10%] right-[10%] bg-white rounded-2xl rounded-tr-none px-3 py-2 shadow-2xl opacity-50">
                    <span className="text-primary font-bold text-sm">{"</>"}</span>
                </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="flex-1 p-10 md:p-24 flex flex-col justify-center relative z-10">
                <div className="max-w-lg">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                        Having doubts? Let's get in touch!
                    </h2>
                    <p className="text-white/70 text-lg font-medium mb-12">
                        Send us your queries and we'll get back to you soon.
                    </p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all placeholder:text-white/40"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all placeholder:text-white/40"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Your contact number"
                                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all placeholder:text-white/40"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Type your query here..."
                                rows="5"
                                className="w-full bg-white/5 border border-white/20 rounded-3xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all placeholder:text-white/40 resize-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button className="bg-secondary text-primary px-12 py-4 rounded-2xl font-black text-lg hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-secondary/20">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
        </section>
    )
}

export default Contact
