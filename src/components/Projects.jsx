import React, { useState, useMemo } from 'react';

// Custom SVG Icons for portability (Replacing lucide-react)
const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.16 19.4c.5.1.7-.2.7-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1.9 1.7 2.3 1.2 2.9.9.1-.7.4-1.2.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2.1 1-2.9-.1-.2-.5-1.4.1-2.9 0 0 .8-.3 2.7 1.1A9.5 9.5 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.4 2.7-1.1 2.7-1.1.6 1.5.2 2.7.1 2.9.6.8 1 1.8 1 2.9 0 3.8-2.3 4.7-4.5 4.9.4.4.7 1 .7 2v2.5c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  </svg>
);

const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

// 1) Data from your existing Projects.jsx (unchanged fields)
const projectData = [
  { id: 1, title: 'Portfolio Site', repo: 'https://github.com/jiyasaraf/portfolio', tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'], category: 'Web Development', imagePlaceholder: 'https://placehold.co/400x250/1F2937/FCD34D?text=Portfolio' },
  { id: 2, title: 'Professional Image Generator', repo: 'https://github.com/jiyasaraf/professional-image-generator', tags: ['Next.js', 'TypeScript', 'AI/ML APIs', 'REST', 'WebDev'], category: 'Gen AI / Full Stack', imagePlaceholder: 'https://placehold.co/400x250/3B0764/D8B4FE?text=AI+Headshots' },
  { id: 4, title: 'Algorithm Generator (LLaMA 3.0)', repo: 'https://github.com/jiyasaraf/Algorithm-Generator-Using--Llama-3.0', tags: ['Python', 'JS', 'LLaMA 3', 'Prompt Engineering', 'Gen AI'], category: 'Gen AI / Full Stack', imagePlaceholder: 'https://placehold.co/400x250/6D28D9/F5D0FE?text=LLM+Algorithms' },
  { id: 5, title: 'DocuMind (Assignment Manager)', repo: 'https://github.com/jiyasaraf/EZ-Assignment', tags: ['Gen AI', 'Python', 'Document Parsing'], category: 'Gen AI', imagePlaceholder: 'https://placehold.co/400x250/064E3B/A7F3D0?text=DocuMind' },
  { id: 6, title: 'MPIN Strength Checker', repo: 'https://github.com/jiyasaraf/MPIN-Strength-Checker', tags: ['JavaScript', 'Regex', 'UI Validation', 'Utility'], category: 'Web Development', imagePlaceholder: 'https://placehold.co/400x250/FCD34D/1F2937?text=MPIN+Checker' },
  { id: 7, title: 'Twitter Sentiment Analysis (ML)', repo: 'https://github.com/jiyasaraf/Twitter-Sentiment-Analysis-using-Machine-Learning', tags: ['Python', 'NLP', 'scikit-learn', 'TF-IDF', 'Jupyter'], category: 'Data Science', imagePlaceholder: 'https://placehold.co/400x250/BE123C/FECACA?text=Sentiment+ML' },
  { id: 8, title: 'Tokenized Time Tracking', repo: 'https://github.com/jiyasaraf/Tokenized-Time-Tracking-for-Freelancing', tags: ['Web App', 'UX', 'Auth', 'Time Tracking'], category: 'Web Development', imagePlaceholder: 'https://placehold.co/400x250/0F172A/94A3B8?text=Time+Tracker' },
  { id: 9, title: 'Diabetes Prediction', repo: 'https://github.com/jiyasaraf/Diabetes_prediction', tags: ['Python', 'scikit-learn', 'Classification', 'Model Evaluation'], category: 'Data Science', imagePlaceholder: 'https://placehold.co/400x250/15803D/BBF7D0?text=Diabetes+Model' },
  { id: 10, title: 'Boston Housing Price Prediction', repo: 'https://github.com/jiyasaraf/Boston-house', tags: ['Python', 'scikit-learn', 'Regression', 'EDA'], category: 'Data Science', imagePlaceholder: 'https://placehold.co/400x250/7C3AED/E9D5FF?text=Boston+Housing' },
  { id: 11, title: 'Salary Prediction', repo: 'https://github.com/jiyasaraf/Salary-prediction-based-on-experience', tags: ['Python', 'Linear Regression', 'Matplotlib', 'Model Interpretation'], category: 'Data Science', imagePlaceholder: 'https://placehold.co/400x250/F59E0B/FEF3C7?text=Salary+Model' },
  { id: 12, title: 'Twitter Sentiment (LSTM)', repo: 'https://github.com/jiyasaraf/Twitter-Sentiment-Analysis-using-Fine-tuned-LSTM-model', tags: ['Python', 'Deep Learning', 'Keras/TensorFlow', 'LSTM', 'NLP'], category: 'Data Science', imagePlaceholder: 'https://placehold.co/400x250/1D4ED8/BFDBFE?text=Sentiment+LSTM' }
];

// Dynamic categories from your data
const uniqueCategories = ['All Projects', ...new Set(projectData.map(p => p.category))];

// 2) Reusable ProjectCard
const ProjectCard = ({ project }) => {
  return (
    <div className="group rounded-xl border border-gray-700/40 bg-gray-800/60 shadow-sm transition overflow-hidden
                    hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] hover:scale-[0.99]
                    backdrop-blur-sm duration-300">
      <div className="aspect-video w-full overflow-hidden bg-gray-900">
        <img
          src={project.imagePlaceholder}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x250/111827/E5E7EB?text=Image'; }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-700/60 text-gray-200">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-200 hover:text-yellow-300"
            title="Repository"
          >
            <GithubIcon /> Repo
          </a>
        </div>
      </div>
    </div>
  );
};

// 3) Section with filtering over your dataset
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') return projectData;
    return projectData.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="scroll-mt-20 py-16 bg-[#0F1720]">
      <div className="container mx-auto px-4">
        {/* Featured header */}
        <header className="mb-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-300">A showcase of AI/ML, Data Science, and Web Development work.</p>
          <div className="w-20 h-1.5 bg-yellow-500 rounded-full mx-auto mt-4"></div>
        </header>

        {/* Cylindrical button panel (taller + narrower) */}
        <div className="mb-10">
          <div className="mx-auto max-w-4xl rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2 py-3 shadow-inner">
            <div className="flex flex-wrap gap-2 justify-center">
              {uniqueCategories.map(cat => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={
                      (active
                        ? "bg-yellow-500 text-black "
                        : "bg-white/10 text-gray-200 hover:bg-white/20 ") +
                      "px-4 py-2.5 rounded-full text-sm border border-white/10 transition-colors"
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
