import React, { useState, useMemo } from 'react';
import NavBar from './components/Navbar.jsx';
import Home from './components/Home.jsx'; 
import AboutSection from './components/About.jsx';
import ExperienceSection from './components/Experience.jsx';
import ProjectsSection from './components/Projects.jsx';
import SkillsSection from './components/Skills.jsx';
import EducationSection from './components/Education.jsx';
import CommunitySection from './components/Community.jsx';
import ContactSection from './components/Contact.jsx';
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      
      {/* Renders the NavBar, HeroSection, and placeholders for all other content. */}
      <NavBar/>
      <Home />
      <AboutSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <EducationSection/>
      <CommunitySection/>
      <ContactSection/>

      {/* Footer (Kept here as it's a global structural element) */}
      <footer className="text-center py-6 bg-gray-800 text-gray-400 text-sm border-t border-gray-700">
        &copy; 2025 Jiya Saraf | Designed and Built with React, Vite, and Tailwind CSS
      </footer>
    </div>
  );
}

