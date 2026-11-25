import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = ({ isLightMode, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 72);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 72);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`premium-nav fixed left-1/2 top-0 z-50 w-full max-w-none -translate-x-1/2 rounded-none border-x-0 border-t-0 transition-[background-color,border-color,box-shadow] duration-300 md:top-5 md:w-[calc(100%-2rem)] md:max-w-6xl md:rounded-full md:border-x md:border-t ${
        scrolled
          ? "is-scrolled border-white/10 bg-black/85 shadow-lg backdrop-blur-xl"
          : "border-white/10 bg-black/40 shadow-xl shadow-black/10 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="brand-mark flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold tracking-tight text-black transition group-hover:rotate-6">
            R<span className="text-green-500">S</span>
          </span>

          <div className="leading-tight">
            <p className="text-base font-bold text-white">Rohit Sharma</p>
            <p className="text-[11px] uppercase tracking-wider text-gray-500">
              Web Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="premium-nav-link relative text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Connect Button */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
            aria-pressed={isLightMode}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
          >
            {isLightMode ? <FaMoon size={16} /> : <FaSun size={16} />}
          </button>

          <a
            href="http://linkedin.com/in/rohit-kumar-sharma-220436345"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-gray-200"
          >
            Let’s Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-5 py-5">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
            aria-pressed={isLightMode}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            {isLightMode ? <FaMoon size={16} /> : <FaSun size={16} />}
            Switch to {isLightMode ? "dark" : "light"} mode
          </button>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="http://linkedin.com/in/rohit-kumar-sharma-220436345"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
