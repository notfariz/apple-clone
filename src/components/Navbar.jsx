import { useState } from 'react';

function Navbar() {
  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch',
    'AirPods', 'TV & Home', 'Entertainment',
    'Accessories', 'Support'
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-black text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-sm">

        {/* Left: Apple logo */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <div className="text-xl font-bold cursor-pointer"></div>
        </div>

        {/* Center: Nav links */}
        <ul className="hidden lg:flex gap-6 flex-1 justify-center">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:underline cursor-pointer">{item}</li>
          ))}
        </ul>

        {/* Right: Search & Cart */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <span role="img" aria-label="search" className="text-xl cursor-pointer">🔍</span>
          <span role="img" aria-label="cart" className="text-xl cursor-pointer">🛒</span>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Side Drawer (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-6 flex flex-col space-y-6">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="self-end mb-4 text-2xl"
          >
            &times;
          </button>

          {/* Mobile Nav Links */}
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:underline cursor-pointer text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="flex gap-4 mt-8 text-xl">
            <span className="cursor-pointer">🔍</span>
            <span className="cursor-pointer">🛒</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;