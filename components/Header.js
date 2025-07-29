import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#0d0d0d] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <img
          src="virtlens_logo.png"
          alt="Logo"
          className="h-9 w-auto transition-all duration-200"
          style={{ minWidth: 100 }}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide text-white">
          <a href="#home" className="hover:text-cyan-400 transition">HOME</a>
          <a href="#games" className="hover:text-cyan-400 transition">GAMES</a>
          <a href="#about" className="hover:text-cyan-400 transition">ABOUT</a>
          <a href="#contact" className="hover:text-cyan-400 transition">CONTACT US</a>
        </nav>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="ml-6 hidden md:inline-flex items-center 
            bg-transparent border border-cyan-400 text-cyan-200 font-semibold text-sm
            py-2 px-5 rounded-md hover:bg-cyan-900 hover:text-white transition shadow-none"
          style={{
            boxShadow: "0 2px 10px 0 rgba(12,245,245,0.02)",
            letterSpacing: "0.04em",
          }}
        >
          CONTACT US
        </a>

        {/* Burger icon for mobile */}
        <button
          className="md:hidden ml-4 p-1"
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="#f6f6fa" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="#f6f6fa" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="#f6f6fa" />
          </svg>
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`
          fixed inset-y-0 right-0 w-80 max-w-full bg-[#141417] z-[999] 
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
          shadow-lg
        `}
        style={{ boxShadow: open ? '-8px 0 40px 0 rgba(0,0,0,0.5)' : 'none' }}
      >
        {/* Top row: logo + close */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#26262a]">
          <img
            src="virtlens_logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
          <button
            className="p-2"
            aria-label="Close Menu"
            onClick={() => setOpen(false)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24">
              <line x1="6" y1="6" x2="18" y2="18" stroke="#fff" strokeWidth="2" />
              <line x1="6" y1="18" x2="18" y2="6" stroke="#fff" strokeWidth="2" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <nav className="flex flex-col py-4">
          <a
            href="#home"
            className="px-6 py-4 text-base font-semibold text-white border-b border-[#26262a] hover:text-cyan-400 transition"
            onClick={() => setOpen(false)}
          >HOME</a>
          <a
            href="#games"
            className="px-6 py-4 text-base font-semibold text-white border-b border-[#26262a] hover:text-cyan-400 transition"
            onClick={() => setOpen(false)}
          >GAMES</a>
          <a
            href="#about"
            className="px-6 py-4 text-base font-semibold text-white border-b border-[#26262a] hover:text-cyan-400 transition"
            onClick={() => setOpen(false)}
          >ABOUT</a>
          <a
            href="#contact"
            className="px-6 py-4 text-base font-semibold text-white hover:text-cyan-400 transition"
            onClick={() => setOpen(false)}
          >CONTACT US</a>
        </nav>
      </div>

      {/* Backdrop (when menu open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
