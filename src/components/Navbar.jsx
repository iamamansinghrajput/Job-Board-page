import React, { useState, useEffect } from 'react';
import { baseurl } from '../config/path'; // Make sure path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState([]);

  
    const fetchUser = async () => {
      try {
        const response = await fetch(`${baseurl}/api/getUser`, {
            method: 'GET',
            credentials: 'include', // ✅ this sends the cookie
            headers: { 'Content-Type': 'application/json' }
          });


        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          setUser(null); 
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      }
    };
useEffect(() => {
    fetchUser();
  }, []);

  return (
    <header className="bg-white border-b border-gray-300 shadow">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href={user ? '/jobs' : '/about'} className="flex items-center gap-2 font-bold text-xl text-blue-600">
          💼 <span>JobBoard</span>
        </a>

        <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {user ? (
            <>
              <a href="/jobs" className="font-bold text-gray-700 hover:text-blue-600">Jobs</a>
              {user.role === 'admin' && (
                <a href="/admin" className="font-bold text-gray-700 hover:text-blue-600">Admin</a>
              )}
              {user.role === 'user' && (
                <a href="/myApplications" className="font-bold text-gray-700 hover:text-blue-600">My Applications</a>
              )}
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">Logout</button>
            </>
          ) : (
            <>
              <a href="/about" className="font-bold text-gray-700 hover:text-blue-600">About Us</a>
              <a href="/login" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-center">
                Login/Register
              </a>
            </>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden px-4 py-3 bg-white shadow-md">
          <div className="flex flex-col gap-3">
            {user ? (
              <>
                <a href="/jobs" className="text-gray-700 font-semibold">Jobs</a>
                {user.role === 'admin' && <a href="/admin" className="text-gray-700 font-semibold">Admin</a>}
                {user.role === 'user' && <a href="/myApplications" className="text-gray-700 font-semibold">My Applications</a>}
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Logout</button>
              </>
            ) : (
              <>
                <a href="/about" className="text-gray-700 font-semibold">About Us</a>
                <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center">
                  Login/Register
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
