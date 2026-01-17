import React from 'react'

function Podcast() {
    const episodes = [
        {
            title: "How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)",
            thumbnail: "/src/assets/hqdefault.jpg"
        },
        {
            title: "$25000 Bug Bounty, $100k Offer as a Solana Engineer",
            thumbnail: "/src/assets/hqdefault (1).jpg"
        },
        {
            title: "How He Cracked A 40Lakhs Remote Coding Job (Complete Story)",
            thumbnail: "/src/assets/hqdefault (2).jpg"
        }
    ]

    const SoundwaveIcon = ({ className }) => (
        <div className={`flex items-center gap-1.5 ${className}`}>
            <div className="w-1.5 h-6 bg-white/20 rounded-full"></div>
            <div className="w-1.5 h-10 bg-white/20 rounded-full"></div>
            <div className="w-1.5 h-16 bg-white/20 rounded-full"></div>
            <div className="w-1.5 h-10 bg-white/20 rounded-full"></div>
            <div className="w-1.5 h-6 bg-white/20 rounded-full"></div>
        </div>
    )

    const DottedWave = ({ className }) => (
        <div className={`grid grid-cols-3 gap-2 opacity-20 ${className}`}>
            {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-1.5 rounded-full bg-white ${i % 3 === 1 ? 'h-8' : i % 3 === 0 ? 'h-4' : 'h-6'}`}></div>
            ))}
        </div>
    )

    return (
        <section className="bg-primary py-24 px-4 md:px-20 relative overflow-hidden">
            {/* Background Decorative Patterns */}
            <div className="absolute left-[5%] top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col gap-12">
                    <DottedWave />
                    <SoundwaveIcon className="opacity-40" />
                </div>
            </div>

            <div className="absolute right-[5%] top-[10%] hidden lg:block">
                <DottedWave className="rotate-180" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-[56px] font-black text-white mb-6 tracking-tighter">
                        The 100xdevs Podcast
                    </h2>
                    <p className="text-white opacity-80 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                        Unfiltered discussions on engineering, startups, and career growth with industry
                        experts and successful developers
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {episodes.map((episode, index) => (
                        <div key={index} className="bg-white rounded-[32px] p-4 flex flex-col shadow-2xl transition-all duration-300 hover:translate-y-[-8px]">
                            <div className="relative aspect-video rounded-[24px] overflow-hidden mb-6">
                                <img
                                    src={episode.thumbnail}
                                    alt={episode.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-[#e11d48] rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 pb-2">
                                <h3 className="text-lg md:text-[19px] font-bold text-primary leading-snug">
                                    {episode.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Podcast
