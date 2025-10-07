import React, { useState, useEffect, useRef } from 'react';

// ----------------------------------------------------------------------------------
// Navigation Bar Component
// ----------------------------------------------------------------------------------
const NavBar = () => {
    const navItems = ['About', 'Experience', 'Projects', 'Skills','Education', 'Community', 'Contact'];
    
    // State to track visibility (isVisible)
    const [isVisible, setIsVisible] = useState(true);
    // Ref to track the last scroll position mutably (this is key for performance and correct behavior)
    const scrollRef = useRef(0);

    // 2. EFFECT: Attaches and cleans up the scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const lastScrollY = scrollRef.current;
            const scrollThreshold = 100; // Only hide after scrolling past 100px

            if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
                // Scrolling down and past the threshold: Hide the navbar
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up: Show the navbar
                setIsVisible(true);
            }
            
            // Always show if we are at the very top
            if (currentScrollY === 0) {
                setIsVisible(true);
            }

            // Update the last scroll position in the ref
            scrollRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Dependency array is now empty, creating handleScroll only once

    return (
        <nav 
            className={`
                bg-gray-900 text-white p-4 shadow-xl sticky top-0 z-20 bg-opacity-95 backdrop-blur-sm 
                transition-transform duration-300 ease-in-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            `}
        >
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <span className="text-2xl font-extrabold text-yellow-400 tracking-wider">Jiya Saraf</span>
                <div className="flex space-x-6 text-sm mt-3 sm:mt-0">
                    {navItems.map(item => (
                        <a 
                            key={item}
                            // Using the ID of the section for simple smooth scrolling links
                            href={`#${item.toLowerCase()}`} 
                            className="font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

// ----------------------------------------------------------------------------------
// Hero Section Component (Styled based on the image)
// ----------------------------------------------------------------------------------
const HeroSection = () => {
    // === START: YOUR UPDATED LINKS ARE HERE ===
    const profileLinks = [
        { 
            name: 'LinkedIn', 
            icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 9h4v12H4zM6 3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', 
            href: 'https://www.linkedin.com/in/jiyasaraf/' // Updated Link
        },
        { 
            name: 'GitHub', 
            icon: 'M12 2a10 10 0 0 0-3.16 19.4c.5.1.7-.2.7-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1.9 1.7 2.3 1.2 2.9.9.1-.7.4-1.2.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2.1 1-2.9-.1-.2-.5-1.4.1-2.9 0 0 .8-.3 2.7 1.1A9.5 9.5 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.4 2.7-1.1 2.7-1.1.6 1.5.2 2.7.1 2.9.6.8 1 1.8 1 2.9 0 3.8-2.3 4.7-4.5 4.9.4.4.7 1 .7 2v2.5c0 .3.2.6.7.5A10 10 0 0 0 12 2z', 
            href: 'https://github.com/jiyasaraf' // Updated Link
        },
        { 
            name: 'LeetCode', 
            icon: 'M10.5 13.5h-2v-2h2v2zm0 4h-2v-2h2v2zM21 9V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9zm-2 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4h14v4zm0-6H5V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7z', 
            href: ' https://leetcode.com/u/JS_1804/' // Updated Link
        },
        { 
            name: 'Linktree', 
            icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM9 10v4h6v-4H9zm6-2h-6V4h6v4zM9 16v4h6v-4H9z', 
            href: 'https://linktr.ee/jiya_saraf' // Updated Link
        },
        { 
            name: 'Resume', 
            icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v4h4v12H6z', 
            href: 'https://tinyurl.com/resume-jiya-saraf' // Updated Link
        },
    ];
    // === END: YOUR UPDATED LINKS ARE HERE ===

    const heroImagePlaceholder = 'portfolio-1.png';

    return (
        <header 
            id="hero"
            // FIX 1: Removed justify-center and items-center from header, we will use padding instead.
            className="relative min-h-screen flex text-white overflow-hidden shadow-2xl"
        >
            {/* Background Image/Overlay */}
            <img 
                src={heroImagePlaceholder} 
                alt="Professional coding background" 
                // Retained object-top to keep the focal point (your head) visible
                className="absolute inset-0 w-full h-full object-cover object-top" 
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'portfolio-1.png';
                }}
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

            {/* Content Container */}
            <div 
                // FIX 2: Added flex-1 and flex-col to enable flexible spacing, and justify-center to center the content vertically within the available space.
                // Removed pt-16 as it's no longer needed with flex centering.
                className="container mx-auto px-4 z-10 text-center relative max-w-4xl flex flex-col flex-1 justify-center"
            >
                <p className="text-xl sm:text-2xl font-light text-yellow-300 mb-2 animate-fade-in-up">Hi, I'm</p>
                <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
                    Jiya Saraf
                </h1>
                <p className="text-xl sm:text-3xl font-medium text-gray-200 mb-8">
                    AI Developer | Data Science Enthusiast
                </p>

                {/* Profile Links/Buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                    {profileLinks.map(link => (
                        <a 
                            key={link.name}
                            // Using the updated href value
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 shadow-lg"
                        >
                            {/* Simple inline SVG icon */}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                <path d={link.icon} />
                            </svg>
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

// ----------------------------------------------------------------------------------
// HOME Component - Main container for the landing page.
// ----------------------------------------------------------------------------------
export default function Home() {
    return (
        // Added 'id="home"' for future potential routing/linking
        <main id="home"> 
            <NavBar />
            <HeroSection />
            {/* Placeholder for the Projects Section. We'll remove this once ProjectsSection is rendered in App.jsx. */}
            {/* NOTE: If ProjectsSection is now correctly imported in App.jsx, this section can be removed. Assuming it is now removed from App.jsx's import list for Home.jsx. */}
        </main>
    );
}
