import React from 'react'

function Navigation() {
  return (
    <nav className='w-full bg-white border-b border-gray-100 h-16 flex items-center justify-between px-4 md:px-20 sticky top-0 z-50'>
      <div className="logo flex items-center gap-8">
        <a className="font-bold text-[20px] tracking-tight cursor-pointer text-primary" href="/">
          100<span className="text-accent">x</span>Devs
        </a>
        <div className='hidden md:flex gap-6 font-medium text-gray-500 text-sm'>
          <a href="/" className='hover:text-primary transition-colors'>Home</a>
          <a href="/courses" className='hover:text-primary transition-colors'>Courses</a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className='relative hidden lg:block'>
          <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
          <input
            placeholder='Type to search'
            className='border border-gray-200 w-64 text-sm text-gray-800 rounded-[10px] py-[8px] pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-primary/10 transition-all'
          />
        </div>
        <button className='h-[40px] px-6 rounded-[10px] border border-gray-200 text-primary font-bold hover:bg-gray-50 transition-all text-sm hidden sm:block'>
          Sign up
        </button>
        <button className='h-[40px] px-6 rounded-[10px] bg-primary text-white font-bold hover:bg-primary/95 transition-all text-sm'>
          Log in
        </button>
      </div>
    </nav>
  )
}

export default Navigation