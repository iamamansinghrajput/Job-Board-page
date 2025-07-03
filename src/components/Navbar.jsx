import React from 'react'

const Navbar = () => {
  return (
   <header className="bg-white border-b border-gray-300 shadow">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        <a href="/about" className="flex items-center gap-2 font-bold text-xl text-blue-600">
          💼
          <span>JobBoard</span>
        </a>

        <div className="flex items-center gap-8"> {/* Increased gap from gap-4 to gap-8 */}
          <a href="/about" className="font-bold text-gray-700 hover:text-blue-600">About Us</a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Login/Register
          </button>
        </div>
        
      </nav>
    </header>
  )
}

export default Navbar