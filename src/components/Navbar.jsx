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
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-sm">

        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer"></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, idx) => (
            <li key={idx} className="hover:underline cursor-pointer">{item}</li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Simple Hamburger Icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="self-end mb-4 text-2xl"
          >
            &times;
          </button>

          {/* Nav Items */}
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
        </div>
      </div>

      {/* Overlay behind drawer */}
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