import React, { useState } from 'react'



export default function Menu() {

  const [show, setShow] = useState(false);

  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-work h-20">
      <h2 className="text-3xl font-extrabold">
            LAWYER AI
          </h2>

        <nav>
          <ul className="text-md flex justify-center gap-8 items-center">
            <li><a href="/" className="text-blue-50 font-semibold">Prices</a></li>
            <li><a href="#tokenomics" className="text-blue-50 font-semibold">Tokenomics</a></li>
            <li><a href="/" className="text-blue-50 font-semibold">Charts</a></li>
            <li><a href="#partners" className="text-blue-50 font-semibold">Resources</a></li>
             </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-nutino-sans">
        <a href="/" className="logo w-1/2">
          <h2 className="text-3xl font-extrabold">
            LAWYER AI
          </h2>
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>

      {show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto transition-all duration-300 text-center font-work font-semibold bg-seagreen-100 z-20" style={{ left: "0" }}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <a href="/" className="logo">
              <h2 className="text-2xl font-extrabold">
                LAWYER AI
              </h2>
            </a>
          </div>
        </div>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="/" className="text-lg ml-4 text-blue-100 font-semibold">Prices</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="/about" className="text-lg ml-4 text-blue-100 font-semibold">Whitepaper</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-zinc-700 text-white">
          <a href="/destination" className="text-lg ml-4 text-blue-100 font-semibold">Charts</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href="/contact" className="text-lg ml-4 text-blue-100 font-semibold">Resources</a>
        </button>
        <button onClick={() => setShow(!show)} className="py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer bg-zinc-700 text-white">
          <a href="/blog" className="text-lg ml-4 text-blue-100 font-semibold">Sign In</a>
        </button>
      </div> : null
      }


    </header >
  )
}
