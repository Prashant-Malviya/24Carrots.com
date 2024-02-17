import React from 'react';

function Navbar() {
  return (
    <nav className="top-0 w-full min-h-[131px] flex justify-center items-center z-50 bg-white transition-all duration-300 ease-in-out">
      <div className="container mx-auto p-4 md:p-8">
        <div className="text-[#1A4122FF] box-sizing[inherit] text-base leading-6 block">
          <ul className="flex justify-center space-x-4 md:space-x-8">
            <li className="nav-item dropdown relative group">
              <a href="#" className="nav-link">ABOUT</a>
              <div className="dropdown-content absolute hidden bg-white border border-gray-300 shadow-md group-hover:block transition-all duration-300">
                <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">ABOUT 24 CARROTS</a>
                <a href="/about/history" className="block px-4 py-2 hover:bg-gray-100">AWARDS & PRESS</a>
                <a href="/about/values" className="block px-4 py-2 hover:bg-gray-100">STAFFING</a>
              </div>
            </li>
            <li className="nav-item dropdown relative group">
              <a href="#" className="nav-link">SERVICES</a>
              <div className="dropdown-content absolute hidden bg-white border border-gray-300 shadow-md group-hover:block transition-all duration-300">
                <a href="/services/web" className="block px-4 py-2 hover:bg-gray-100">GOURMET CATERING</a>
                <a href="/services/mobile" className="block px-4 py-2 hover:bg-gray-100">BAR SERVICE</a>
                <a href="/services/design" className="block px-4 py-2 hover:bg-gray-100">PRODUCTION</a>
              </div>
            </li>
            <li className="nav-item dropdown relative group">
              <a href="#" className="nav-link">EVENTS</a>
              <div className="dropdown-content absolute hidden bg-white border border-gray-300 shadow-md group-hover:block transition-all duration-300">
                <a href="/events/upcoming" className="block px-4 py-2 hover:bg-gray-100">WEDDINGS</a>
                <a href="/events/past" className="block px-4 py-2 hover:bg-gray-100">SOCIAL</a>
                <a href="/events/gallery" className="block px-4 py-2 hover:bg-gray-100">CORPORATE</a>
              </div>
            </li>
            <li className="nav-item clickable">
              <a href="#" className="nav-link relative text-center">
                <h1 className="text-3xl font-bold">24 CARROTS</h1>
                <p className="text-xs">CATERING & EVENTS</p>
              </a>
            </li>
            <li className="nav-item clickable"><a href="#">VENUES</a> </li>
            <li className="nav-item clickable"><a href="#">CAREERS</a> </li>
            <li className="nav-item">
              <button className="btn bg-[#f85230] text-white px-4 py-2 rounded-md">GET IN TOUCH</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
