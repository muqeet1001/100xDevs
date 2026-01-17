import React from 'react'

function Body() {
    return (
        <section className="bg-white py-12 md:py-24 px-4 md:px-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-30 -z-10 pointer-events-none">
                <img src="/src/assets/home-globe.svg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center mb-8 gap-3 px-4 py-1.5 
            border border-dotted border-gray-300 
            rounded-full bg-white/80 backdrop-blur-sm text-gray-800 text-sm font-semibold">
                        <span className="w-3 h-3 rounded-full bg-secondary"></span>
                        <span>Join 100,000+ enrolled students today</span>
                    </div>
                    <h1 className='text-5xl md:text-[80px] text-primary font-black leading-[1.1] mb-8 tracking-tighter'>
                        Master Full <br /> Stack <br /> Development
                    </h1>
                    <p className='text-[20px] text-body-text mb-10 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed opacity-80'>
                        Master Full Stack Development through hands-on open source projects. Join a community of developers transforming their careers with practical, real-world programming skills.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className='px-10 py-4 rounded-[10px] bg-primary text-white font-bold hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 text-lg'>
                            Explore Courses
                        </button>
                        <button className='px-10 py-4 rounded-[10px] border border-gray-200 text-primary font-bold hover:bg-gray-50 transition-all text-lg'>
                            Learn more
                        </button>
                    </div>
                </div>
                <div className="flex-1 relative mt-12 md:mt-0">
                    <div className="relative w-full max-w-lg mx-auto">
                        {/* The decorative tilted frame from original site */}
                        <div className="absolute inset-0 border-[2px] border-primary/20 rounded-[4rem] rotate-6 scale-105 -z-10"></div>
                        <div className="absolute inset-0 border-[2px] border-primary/10 rounded-[4rem] -rotate-3 scale-110 -z-20"></div>

                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-primary">
                            <img
                                src="/src/assets/hero-img.webp"
                                alt="Hero"
                                className='w-full h-auto object-cover'
                            />
                        </div>

                        {/* Floating icons */}
                        <div className="absolute -left-6 top-1/4 bg-white p-2 rounded-full shadow-xl z-20 border border-gray-100 hidden lg:block">
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xs uppercase tracking-tighter">
                                &lt;/&gt;
                            </div>
                        </div>
                        <div className="absolute -right-6 bottom-1/4 bg-white p-2 rounded-full shadow-xl z-20 border border-gray-100 hidden lg:block">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase tracking-tighter">
                                {'{ }'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body
