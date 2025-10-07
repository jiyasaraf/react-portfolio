// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ];

  // Optional: keep your existing show/hide on scroll behavior
  const [isVisible, setIsVisible] = useState(true);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      // Show when scrolling up, hide when scrolling down (tweak to taste)
      setIsVisible(y < lastYRef.current || y < 32);
      lastYRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={
        "sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm shadow-md transition-transform duration-300 ease-in-out"
        + (isVisible ? " translate-y-0" : " -translate-y-full")
      }
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3">
        <a href="#home" className="text-2xl font-extrabold text-yellow-400 tracking-wider">
          Jiya Saraf
        </a>

        {/* Mobile menu button */}
        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer select-none rounded-md px-3 py-2 text-sm text-gray-200 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/40">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded-md bg-gray-800/95 backdrop-blur p-2 shadow-lg ring-1 ring-black/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-yellow-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-gray-200 hover:text-yellow-300 hover:bg-gray-800/60"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
