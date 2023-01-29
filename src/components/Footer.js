import React from 'react'



export default function Footer() {
  return (
    <footer className='container mx-auto lg:px-12 px-5'>

      <div className="lg:flex items-center justify-between font-work h-20">
        <a href="/" className="logo">
          <h2 className="text-2xl font-extrabold">
            LAWYER AI
          </h2>
        </a>

        <nav>
          <ul className="text-md lg:flex lg:pt-0 pt-5 justify-center gap-8 items-center">
            <li><a href="/" className="text-blue-100 font-semibold">Products</a></li>
            <li><a href="/" className="text-blue-100 font-semibold">Learn</a></li>
            <li><a href="/" className="text-blue-100 font-semibold">Company</a></li>
            <li><a href="/" className="text-blue-100 font-semibold">Help</a></li>
            <li><a href="/" className="text-blue-100 font-semibold">Legal</a></li>
          </ul>
        </nav>

        <div className="flex justify-between items-center py-5 px-2">
          <p> &#169; Lawyer-Ai {new Date().getFullYear()}. All rights reserved</p>
        </div>
      </div>

    </footer>
  )
}
