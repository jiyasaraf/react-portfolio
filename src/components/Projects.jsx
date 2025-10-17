import React, { useState, useMemo } from 'react';
// import { Github, FileText, Code } from 'lucide-react'; // Original import causing the error

// Custom SVG Icons for portability (Replacing lucide-react)
const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.16 19.4c.5.1.7-.2.7-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1.9 1.7 2.3 1.2 2.9.9.1-.7.4-1.2.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2.1 1-2.9-.1-.2-.5-1.4.1-2.9 0 0 .8-.3 2.7 1.1A9.5 9.5 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.4 2.7-1.1 2.7-1.1.6 1.5.2 2.7.1 2.9.6.8 1 1.8 1 2.9 0 3.8-2.3 4.7-4.5 4.9.4.4.7 1 .7 2v2.5c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>
  </svg>
);

const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

// ----------------------------------------------------------------------------------
// 1. PROJECT DATA CENTRALIZATION
// We classify projects into categories for filtering.
// ----------------------------------------------------------------------------------
const projectData = [
  {
    id: 1,
    title: 'Portfolio Site',
    // description: 'Personal portfolio site deployed to Vercel, showcasing projects and activities.',
    repo: 'https://github.com/jiyasaraf/portfolio',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    category: 'Web Development',
    imagePlaceholder: 'https://placehold.co/400x250/1F2937/FCD34D?text=Portfolio'
  },
  {
    id: 2,
    title: 'Blogify',
    // description: 'Headshot/image generator that produces polished outputs using hosted diffusion models.',
    repo: 'https://github.com/jiyasaraf/blog-post-website',
    tags: ['Node.js', 'React JS', 'Express JS', 'REST', 'WebDev'],
    category: 'Full Stack',
    imagePlaceholder: 'https://placehold.co/400x250/3B0764/D8B4FE?text=Blogify'
  },
 
  {
    id: 4,
    title: 'Algorithm Generator (LLaMA 3.0)',
    // description: 'LLM-powered helper that generates algorithm outlines or code scaffolds from natural-language prompts using Llama-3 style models.',
    repo: 'https://github.com/jiyasaraf/Algorithm-Generator-Using--Llama-3.0',
    tags: ['Python', 'JS', 'LLaMA 3', 'Prompt Engineering', 'Gen AI'],
    category: 'Gen AI',
    imagePlaceholder: 'https://placehold.co/400x250/6D28D9/F5D0FE?text=LLM+Algorithms'
  },
  {
    id: 5,
    title: 'DocuMind (Doc AI Assistant)',
    // description: 'Document parser summarizing, answering, and assessing user content understanding.',
    repo: 'https://github.com/jiyasaraf/EZ-Assignment',
    tags: ['Gen AI', 'Python', 'Document Parsing'],
    category: 'Gen AI',
    imagePlaceholder: 'https://placehold.co/400x250/064E3B/A7F3D0?text=DocuMind'
  },
  {
    id: 6,
    title: 'MPIN Strength Checker',
    // description: 'A mini utility that evaluates MPIN strength based on length, diversity, and common-pattern checks, giving immediate visual feedback.',
    repo: 'https://github.com/jiyasaraf/MPIN-Strength-Checker',
    tags: ['JavaScript', 'Regex', 'UI Validation', 'Utility'],
    category: 'Web Development',
    imagePlaceholder: 'https://placehold.co/400x250/FCD34D/1F2937?text=MPIN+Checker'
  },
  {
    id: 7,
    title: 'Twitter Sentiment Analysis (ML)',
    // description: 'End-to-end sentiment classifier over tweets using classic ML with TF-IDF features and baseline models like LR, NB, and SVM.',
    repo: 'https://github.com/jiyasaraf/Twitter-Sentiment-Analysis-using-Machine-Learning',
    tags: ['Python', 'NLP', 'scikit-learn', 'TF-IDF', 'Jupyter'],
    category: 'Data Science',
    imagePlaceholder: 'https://placehold.co/400x250/BE123C/FECACA?text=Sentiment+ML'
  },
  {
    id: 8,
    title: 'Tokenized Time Tracking',
    // description: 'A time tracking concept for freelancers that logs tasks and introduces token/credit mechanics for reporting or billing features.',
    repo: 'https://github.com/jiyasaraf/Tokenized-Time-Tracking-for-Freelancing',
    tags: ['Web App', 'UX', 'Auth', 'Time Tracking'],
    category: 'Web Development',
    imagePlaceholder: 'https://placehold.co/400x250/0F172A/94A3B8?text=Time+Tracker'
  },
  {
    id: 9,
    title: 'Diabetes Prediction',
    // description: 'Supervised learning pipeline to predict diabetes risk from tabular clinical features with preprocessing, train/validation splits, and metrics.',
    repo: 'https://github.com/jiyasaraf/Diabetes_prediction',
    tags: ['Python', 'scikit-learn', 'Classification', 'Model Evaluation'],
    category: 'Data Science',
    imagePlaceholder: 'https://placehold.co/400x250/15803D/BBF7D0?text=Diabetes+Model'
  },
  {
    id: 10,
    title: 'Boston Housing Price Prediction',
    // description: 'Classic Boston housing price regression with EDA, feature scaling/selection, and evaluation across baseline regressors.',
    repo: 'https://github.com/jiyasaraf/Boston-house',
    tags: ['Python', 'scikit-learn', 'Regression', 'EDA'],
    category: 'Data Science',
    imagePlaceholder: 'https://placehold.co/400x250/7C3AED/E9D5FF?text=Boston+Housing'
  },
  {
    id: 11,
    title: 'Salary Prediction',
    // description: 'Simple regression model mapping years of experience to salary with visualizations and error analysis. Beginner-friendly supervised regression example.',
    repo: 'https://github.com/jiyasaraf/Salary-prediction-based-on-experience',
    tags: ['Python', 'Linear Regression', 'Matplotlib', 'Model Interpretation'],
    category: 'Data Science',
    imagePlaceholder: 'https://placehold.co/400x250/F59E0B/FEF3C7?text=Salary+Model'
  },
  {
    id: 12,
    title: 'Twitter Sentiment (LSTM)',
    // description: 'Neural approach to tweet sentiment using tokenization, embedding layers, and a fine-tuned LSTM for sequence modeling.',
    repo: 'https://github.com/jiyasaraf/Twitter-Sentiment-Analysis-using-Fine-tuned-LSTM-model',
    tags: ['Python', 'Deep Learning', 'Keras/TensorFlow', 'LSTM', 'NLP'],
    category: 'Data Science',
    imagePlaceholder: 'https://placehold.co/400x250/1D4ED8/BFDBFE?text=Sentiment+LSTM'
  },
];

// Calculate unique categories dynamically from the data
const uniqueCategories = ['All Projects', ...new Set(projectData.map(p => p.category))];


// ----------------------------------------------------------------------------------
// ProjectCard Component - Renders a single project card.
// ----------------------------------------------------------------------------------

const ProjectCard = ({ project }) => {
  return (
    // Responsive width: full on mobile, half on small screens, one-third on large, one-fourth on extra large
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      {/* Fixed height card with responsive layout and hover effects */}
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out border border-gray-700 hover:shadow-yellow-500/30 hover:border-yellow-500 hover:-translate-y-1 group flex flex-col h-full">

        {/* Image Section */}
        <div className="h-48 overflow-hidden bg-gray-900 flex items-center justify-center">
          <img 
            src={project.imagePlaceholder}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/400x250/374151/ffffff?text=Image+Error';
            }}
          />
        </div>

        {/* Content Section */}
        <div className="p-5 text-white flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-yellow-400">{project.title}</h3>
          
          <p className="text-sm text-gray-400 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-900 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Spacer pushes buttons to bottom */}
          <div className="flex-grow"></div>

          {/* Action Links */}
          <div className="flex space-x-3 border-t border-gray-700 pt-4 mt-auto">
            <a 
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-semibold text-gray-300 hover:text-yellow-400 transition-colors"
              title="View Source Code"
            >
              <GithubIcon className="w-4 h-4 mr-1" />
              <span>Repository</span>
            </a>
            
            <a 
              href="#"
              className="flex items-center text-sm font-semibold text-gray-300 hover:text-yellow-400 transition-colors opacity-70"
              title="No Live Demo"
              onClick={(e) => e.preventDefault()}
            >
              {/* Placeholder for live demo */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


// ----------------------------------------------------------------------------------
// ProjectsSection Component - Main component with filtering logic.
// ----------------------------------------------------------------------------------
export default function ProjectsSection() {
  // State Initialization: Starts with 'All Projects' visible.
  const [activeFilter, setActiveFilter] = useState('All Projects'); 

  // Use useMemo to filter projects based on the active category.
  const filteredProjects = useMemo(() => {
    return projectData.filter(project => 
      activeFilter === 'All Projects' || project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-white relative inline-block pb-1 uppercase tracking-wider">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 mt-2">
            A showcase of my AI/ML, Data Science, and Web Development work.
          </p>
          <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Filter Buttons (Matching the design request) */}
        {/* Added flex-wrap and adjusted mx-auto to ensure buttons wrap nicely on small screens */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 p-3 bg-gray-800 rounded-full max-w-fit mx-auto shadow-inner border border-gray-700">
          {uniqueCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)} 
              className={`
                px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-yellow-500 text-gray-900 shadow-lg transform scale-105' // Active style
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-yellow-400' // Inactive style
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Project Cards Grid */}
        <div className="flex flex-wrap -mx-4 justify-center">
          {filteredProjects.map((project) => ( 
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Fallback if no projects match the filter */}
          {filteredProjects.length === 0 && (
            <div className="w-full text-center py-10 text-gray-500 text-lg font-medium">
              No projects found in the **{activeFilter}** category. Time to build one!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}