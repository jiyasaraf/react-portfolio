import React from "react";

const HeroSection = () => {
  const profileLinks = [
    { name: "LinkedIn", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 9h4v12H4zM6 3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z", href: "https://www.linkedin.com/in/jiyasaraf" },
    { name: "GitHub", icon: "M12 2a10 10 0 0 0-3.16 19.4c.5.1.7-.2.7-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1.9 1.7 2.3 1.2 2.9.9.1-.7.4-1.2.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2.1 1-2.9-.1-.2-.5-1.4.1-2.9 0 0 .8-.3 2.7 1.1A9.5 9.5 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.4 2.7-1.1 2.7-1.1.6 1.5.2 2.7.1 2.9.6.8 1 1.8 1 2.9 0 3.8-2.3 4.7-4.5 4.9.4.4.7 1 .7 2v2.5c0 .3.2.6.7.5A10 10 0 0 0 12 2z", href: "https://github.com/jiyasaraf" },
    { name: "LeetCode", icon: "M10.5 13.5h-2v-2h2v2zm0 4h-2v-2h2v2zM21 9V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9zm-2 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4h14v4zm0-6H5V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7z", href: "https://leetcode.com/u/JS1804" },
    { name: "Linktree", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM9 10v4h6v-4H9zm6-2h-6V4h6v4zM9 16v4h6v-4H9z", href: "https://linktr.ee/jiyasaraf" },
    { name: "Resume", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v4h4v12H6z", href: "https://tinyurl.com/cv-jiyasaraf" },
  ];
  const heroImagePlaceholder = "portfolio-1.png";

  return (
    <header id="hero" className="relative min-h-[80vh] sm:min-h-screen flex text-white overflow-hidden shadow-2xl">
      <img
        src={heroImagePlaceholder}
        alt="Professional coding background"
        className="absolute inset-0 w-full h-full object-cover object-top"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "portfolio-1.png";
        }}
      />
      <div className="absolute inset-0 bg-gray-900/60" />
      <div className="container mx-auto px-4 z-10 relative flex-1 flex items-center">
        <div className="w-full text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-2xl font-light text-yellow-300 mb-2">Hi, I’m</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight">Jiya Saraf</h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-medium text-gray-200 mb-8">AI Developer · Data Science Enthusiast</p>

          <div className="flex flex-wrap justify-center gap-3">
            {profileLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 shadow-lg"
                title={link.name}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d={link.icon} />
                </svg>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <main id="home" className="scroll-smooth">
      <HeroSection />
    </main>
  );
}
