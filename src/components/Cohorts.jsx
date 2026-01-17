import React from 'react'

function Cohorts() {
    const cohorts = [
        {
            title: "100xSchool Combined Bootcamp",
            description: "Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI (Every Saturday) Web3 (Every Sunday) DSA (Every Thursday)",
            price: "5,999",
            originalPrice: "8,999",
            image: "/src/assets/2025-12-21-0_2662284761741538.jpg",
            link: "/new-courses/24"
        },
        {
            title: "Web Dev + Devops Bootcamp",
            description: "Web dev Devops",
            price: "3,999",
            originalPrice: "5,999",
            image: "/src/assets/webdev.jpg",
            link: "/new-courses/21"
        },
        {
            title: "Web3 Bootcamp",
            description: "Complete Solana and Web3 Bootcamp",
            price: "3,999",
            originalPrice: "5,999",
            image: "/src/assets/2025-12-21-0_03044769464934871.jpg",
            link: "/new-courses/22"
        },
        {
            title: "AI and ML Bootcamp",
            description: "AI and ML Syllabus",
            price: "3,999",
            originalPrice: "5,999",
            image: "/src/assets/2025-12-21-0_8185946727813729.jpg",
            link: "/new-courses/23"
        }
    ]

    return (
        <section className="w-full bg-primary py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 space-y-2 px-0 md:px-5">
                    <h2 className="text-4xl text-center sm:text-start font-bold text-white md:text-5xl">Featured Cohorts</h2>
                    <p className="text-sm text-center sm:text-start text-gray-300 md:text-lg">Continue From Where You Left Off</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-5">
                    {cohorts.map((cohort, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl border border-gray-400 bg-white p-4 flex flex-col">
                            <div className="overflow-hidden rounded-xl mb-4 w-full">
                                <img
                                    src={cohort.image}
                                    alt={cohort.title}
                                    className="object-cover aspect-video w-full"
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900 min-h-15">{cohort.title}</h3>
                                    <p className="mb-4 line-clamp-2 text-base text-gray-600">{cohort.description}</p>
                                </div>
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold">₹{cohort.price}</span>
                                        <span className="text-lg text-gray-400 line-through">₹{cohort.originalPrice}</span>
                                    </div>
                                    <button
                                        type="button"
                                        className="h-9 flex w-fit items-center justify-between gap-2 rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-sm outline-none cursor-pointer"
                                    >
                                        <span>INR</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 opacity-50">
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </button>
                                </div>
                                <a href={cohort.link} className="w-full">
                                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold bg-primary text-white shadow-sm hover:bg-primary/90 h-9 px-6 w-full py-5 cursor-pointer transition-all">
                                        View Details
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cohorts
