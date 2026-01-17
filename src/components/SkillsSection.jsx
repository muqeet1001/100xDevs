import React from 'react'

function SkillsSection() {
    const techPills = [
        "Full Stack Development", "Real-World Projects",
        "Open Source Contributions", "Production Ready",
        "DevOps & Deployment", "Job Ready Portfolio"
    ]

    return (
        <section className="bg-white py-12 px-4 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Green Card - Asymmetric Rounding */}
                <div className="bg-secondary p-10 md:p-14 rounded-[40px] rounded-bl-[100px] md:rounded-bl-[150px] relative overflow-hidden bg-brick min-h-[400px] flex flex-col justify-between group shadow-xl">
                    <div>
                        <h2 className="text-3xl md:text-[44px] font-black text-white mb-4 tracking-tight leading-tight">
                            Job ready skills that matter
                        </h2>
                        <p className="text-white/90 text-[15px] md:text-[17px] mb-10 font-medium">
                            Master development through real-world applications, not tutorials
                        </p>
                        <div className="flex flex-wrap gap-3 relative z-10">
                            {techPills.map((skill, index) => (
                                <div key={index} className="bg-white text-secondary px-6 py-2.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-default whitespace-nowrap">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navy Card - Asymmetric Rounding */}
                <div className="bg-primary p-10 md:p-14 rounded-[40px] rounded-br-[100px] md:rounded-br-[150px] relative overflow-hidden bg-brick min-h-[400px] flex flex-col justify-between group shadow-xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-[44px] font-black text-white mb-4 tracking-tight leading-tight">
                            Personally mentoring <br /> India's next 100x engineers
                        </h2>
                        <p className="text-white/70 text-[15px] md:text-[17px] mb-8 font-medium">
                            Taking you from 1x to 100x through practical projects and real-world open source
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10"></div>
                </div>

            </div>
        </section>
    )
}

export default SkillsSection
