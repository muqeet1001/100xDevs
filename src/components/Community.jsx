import React from 'react'
import community1 from '../assets/community1.png'
import community2 from '../assets/community2.png'
import community3 from '../assets/community3.png'
import community4 from '../assets/community4.png'
import community5 from '../assets/community5.png'

function Community() {
    const bottomImages = [
        community2,
        community3,
        community4,
        community5
    ]

    return (
        <section className="bg-white py-24 px-4 md:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Top Section with Navy Background */}
                <div className="bg-primary rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center relative mb-8">
                    {/* Left Side: Content */}
                    <div className="flex-1 p-10 md:p-20 text-white z-10">
                        <h2 className="text-[48px] md:text-[64px] font-black leading-[1.1] mb-12 tracking-tighter">
                            A Community That <br /> Has Your Back
                        </h2>

                        <ul className="space-y-6">
                            {[
                                "Active Discord with 24/7 community support",
                                "Collaborate on open source and build together",
                                "Weekly study groups and peer code reviews",
                                "Job referrals and opportunity sharing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-secondary text-2xl">•</span>
                                    <span className="text-[20px] font-medium opacity-90">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Sticker Image */}
                    <div className="flex-1 relative p-10 flex justify-center items-center">
                        <div className="relative group">
                            {/* Jagged Sticker Border Effect */}
                            <div className="absolute inset-[-15px] bg-white rounded-tl-[100px] rounded-br-[80px] rounded-tr-[40px] rounded-bl-[20px] rotate-[-2deg] opacity-100 -z-10 shadow-2xl"></div>
                            <img
                                src={community1}
                                alt="Community sticker"
                                className="w-[500px] h-auto rounded-tl-[100px] rounded-br-[80px] rounded-tr-[40px] rounded-bl-[20px] object-cover rotate-[-2deg] transition-transform group-hover:rotate-0 duration-500"
                            />

                            {/* Decorative Sparkles/Icons */}
                            <div className="absolute top-[-40px] right-[20px] text-white opacity-40">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-[-20px] left-[-20px] text-white opacity-40">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {bottomImages.map((img, i) => (
                        <div key={i} className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                            <img
                                src={img}
                                alt={`Community event ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Community
