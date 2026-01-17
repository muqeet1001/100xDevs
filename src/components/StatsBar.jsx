import React from 'react'

function StatsBar() {
    const stats = [
        {
            value: "27",
            label: "Students cracked GSoC 2025",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            )
        },
        {
            value: "$150K",
            label: "Highest International package",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125v3.375m9 0h-9M8.25 4.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                </svg>
            )
        },
        {
            value: "200+",
            label: "High paying internships confirmed",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75v-4.25m16.5 0a3 3 0 0 0-3-3H7.5a3 3 0 0 0-3 3m16.5 0V10.5c0-.414-.336-.75-.75-.75H4.5a.75.75 0 0 0-.75.75v3.65m16.5 0a3 3 0 0 1-3 3H7.5a3 3 0 0 1-3-3m12-9.75h-6v1.5h6v-1.5Z" />
                </svg>
            )
        }
    ]

    return (
        <div className="px-4 md:px-20 mb-6">
            <div className="bg-primary text-white rounded-tr-full md: rounded-tr-full flex flex-col md:flex-row items-center py-10 px-8 gap-8 md:gap-0">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <div className="flex-1 flex items-center gap-6 px-4">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-inner">
                                {stat.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl md:text-5xl font-black tracking-tight">{stat.value}</span>
                                <span className="text-sm md:text-base font-medium opacity-60 leading-tight">{stat.label}</span>
                            </div>
                        </div>
                        {index < stats.length - 1 && (
                            <div className="hidden md:block w-[1px] h-16 bg-white/10"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default StatsBar
