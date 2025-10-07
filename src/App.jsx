import React, { useState, useMemo } from 'react';
import Home from './Home.jsx'; 
import AboutSection from './About.jsx';
import ExperienceSection from './Experience.jsx';
import ProjectsSection from './Projects.jsx';
import SkillsSection from './Skills.jsx';
import EducationSection from './Education.jsx';
import CommunitySection from './Community.jsx';
import ContactSection from './Contact.jsx';
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      
      {/* Renders the NavBar, HeroSection, and placeholders for all other content. */}
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

// // ----------------------------------------------------------------------------------
// // 1. PROJECT DATA CENTRALIZATION (Moved back to App.jsx to fix import error)
// // ----------------------------------------------------------------------------------
// const projectData = [
//   {
//     id: 1,
//     title: 'DocuMind',
//     description: 'An intelligent assistant for automated document summarization and key data extraction using NLP and ML.',
//     link: 'https://github.com/jiyasaraf/EZ-Assignment',
//     // Using forward slash as standard web path
//     image: 'algo-gen-preview.png', 
//     tags: ['NLP', 'ML', 'Document AI'],
//     category: 'AI/ML' 
//   },
//   {
//     id: 2,
//     title: 'Algorithm Generator (LLaMA 3.0)',
//     description: 'Full-stack AI web app that generates structured algorithms from natural language using LLaMA 3 and Judge0 API.',
//     link: 'https://github.com/jiyasaraf/Algorithm-Generator-Using--Llama-3.0',
//     image: 'algo-gen-preview.png',
//     tags: ['Gen AI', 'LLaMA 3', 'Full Stack', 'API Integration'],
//     category: 'Gen AI'
//   },
//   {
//     id: 3,
//     title: 'Twitter Sentiment Analysis',
//     description: 'Deep learning-based sentiment classifier using an LSTM model achieving 83% accuracy on real Twitter data.',
//     link: 'https://github.com/jiyasaraf/Twitter-Sentiment-Analysis-using-Fine-tuned-LSTM-model',
//     image: 'x-analysis-preview.png',
//     tags: ['Deep Learning', 'LSTM', 'Sentiment Analysis', 'Data Science'],
//     category: 'Data Science'
//   },
// ];

// // Calculate unique categories outside or use useMemo in ProjectsSection if it was dynamic.
// // Since it's static, we calculate it here once.
// const uniqueCategories = ['All', ...new Set(projectData.map(p => p.category))];


// // ----------------------------------------------------------------------------------
// // ProjectCard Component - Renders a single project card.
// // ----------------------------------------------------------------------------------
// const ProjectCard = ({ project }) => {
//   // Define classes outside of the JSX for cleaner rendering logic
//   const cardClasses = "bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1";
  
//   return (
//     <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//       <div className={cardClasses}>
//         <a href={project.link} target="_blank" rel="noopener noreferrer" className="block no-underline text-gray-800">
//           <div className="h-56 overflow-hidden">
//             <img 
//               src={project.image} 
//               alt={project.title} 
//               className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//               // Fallback for image loading errors
//               onError={(e) => {
//                 e.target.onerror = null; 
//                 e.target.src = 'https://placehold.co/400x224/374151/ffffff?text=Image+Loading+Error';
//               }}
//             />
//           </div>

//           <div className="p-4">
//             <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
//             <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            
//             <div className="flex flex-wrap gap-2 mt-2">
//               {project.tags.map(tag => (
//                 <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// // ----------------------------------------------------------------------------------
// // FilterButtons Component - Displays filter options.
// // ----------------------------------------------------------------------------------
// const FilterButtons = ({ activeFilter, setFilter, categories }) => {
//   return (
//     <div className="flex flex-wrap justify-center gap-3 mb-8">
//       {/* Use the pre-calculated categories passed as a prop */}
//       {categories.map(category => (
//         <button
//           key={category}
//           onClick={() => setFilter(category)} 
//           className={`
//             px-5 py-2 rounded-full font-semibold transition-all duration-200
//             ${activeFilter === category 
//               ? 'bg-yellow-500 text-gray-900 shadow-lg transform scale-105' // Active style (slightly more prominent shadow)
//               : 'bg-gray-200 text-gray-700 hover:bg-yellow-100 hover:text-gray-900' // Inactive style
//             }
//           `}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// // ----------------------------------------------------------------------------------
// // ProjectsSection Component - Manages filtering state and renders projects.
// // ----------------------------------------------------------------------------------
// const ProjectsSection = () => {
//   // State Initialization: Starts with 'All' projects visible.
//   const [activeFilter, setActiveFilter] = useState('All'); 

//   // Use useMemo to filter projects. This avoids re-filtering unless activeFilter changes.
//   const filteredProjects = useMemo(() => {
//     return projectData.filter(project => 
//       activeFilter === 'All' || project.category === activeFilter
//     );
//   }, [activeFilter]); // Dependency array ensures recalculation only when activeFilter changes

//   const SectionTitle = ({ title }) => (
//     <div className="text-center mb-10">
//       <h2 className="text-4xl font-extrabold text-gray-900 relative inline-block pb-1">
//         {title}
//       </h2>
//       <div className="w-20 h-1.5 bg-yellow-500 rounded-full mx-auto mt-2"></div>
//     </div>
//   );

//   return (
//     <section id="projects" className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <SectionTitle title="Featured Projects" />
        
//         {/* Pass the calculated uniqueCategories */}
//         <FilterButtons 
//           activeFilter={activeFilter} 
//           setFilter={setActiveFilter} 
//           categories={uniqueCategories} 
//         />
        
//         {/* Project Cards Grid */}
//         <div className="flex flex-wrap -mx-4 justify-center">
//           {filteredProjects.map((project) => ( 
//             <ProjectCard key={project.id} project={project} />
//           ))}

//           {/* Fallback if no projects match the filter */}
//           {filteredProjects.length === 0 && (
//             <div className="w-full text-center py-10 text-gray-500">
//               No projects found in the **{activeFilter}** category.
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ----------------------------------------------------------------------------------
// // App Component - Main Layout.
// // ----------------------------------------------------------------------------------
// export default function App() {
//   return (
//     <div className="min-h-screen bg-white font-sans antialiased">
//       {/* Navigation */}
//       <nav className="bg-gray-800 text-white p-4 shadow-xl sticky top-0 z-20">
//         <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
//             <span className="text-2xl font-extrabold text-yellow-400 tracking-wider">Jiya Saraf</span>
//             <span className="text-sm text-gray-300 mt-1 sm:mt-0">React Portfolio Demo</span>
//         </div>
//       </nav>

//       {/* Hero Section Placeholder (Improved Styling) */}
//       <header className="bg-gray-900 min-h-64 h-auto py-20 flex items-center justify-center shadow-inner">
//         <div className="text-center">
//             <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight">
//               AI/ML & Full Stack Developer
//             </h1>
//             <p className="text-gray-400 mt-4 text-lg">
//                 Building intelligent solutions and robust web applications.
//             </p>
//         </div>
//       </header>

//       <ProjectsSection />

//       {/* Footer */}
//       <footer className="text-center py-6 bg-gray-800 text-gray-400 text-sm border-t border-gray-700">
//         &copy; 2025 Jiya Saraf | Designed and Built with React, Vite, and Tailwind CSS
//       </footer>
//     </div>
//   );
// }
