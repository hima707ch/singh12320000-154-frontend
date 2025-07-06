import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    // API call can be implemented here
    console.log('Searching for:', searchQuery);
  };

  const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Properties', route: '/propertylistingpage' },
    { name: 'Profile', route: '/userprofilepage' },
    { name: 'Contact', route: '/contactpage' }
  ];

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div id="Header_2" className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src={images[0]}
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-white">RealEstate</span>
            </Link>
          </div>

          <div id="Header_3" className="hidden md:block">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-64"
                placeholder="Search properties..."
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-300"
              >
                Search
              </button>
            </form>
          </div>

          <nav id="Header_4" className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className={`${location.pathname === link.route ? 'bg-blue-700' : 'hover:bg-blue-700'} text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/loginpage"
              className="bg-white text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/registerpage"
              className="bg-blue-500 text-white hover:bg-blue-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Register
            </Link>
          </nav>

          <div id="Header_5" className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-blue-700 p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="Header_6" className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Search properties..."
              />
            </form>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.route}
                  className={`${location.pathname === link.route ? 'bg-blue-700' : 'hover:bg-blue-700'} text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/loginpage"
                className="bg-white text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium text-center transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="bg-blue-500 text-white hover:bg-blue-400 px-3 py-2 rounded-md text-sm font-medium text-center transition duration-300"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;