// components/Navbar.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white-200  dark:invert">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative ">
          <div className="flex items-center">
            <Link href="/"
               className="text-blue-600 text-3xl font-bold">Eldoret Achivers
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? 'block absolute top-full w-full z-50 bg-slate-950 ' : 'hidden'} md:flex md:items-center md:ml-6`}>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <Link href="/"
                 className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                
              </Link>
              <Link href="/about"
                 className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                
              </Link>
              <Link href="/curriculum"
                 className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Curriculum
                
              </Link>
             
              <Link href="/schoolfees"
                 className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  School Fees
                
              </Link>
            
              <Link href="/gallery"
                 className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Gallery
                
              </Link>
              <Link href="/contact"
                 className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                
              </Link>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;