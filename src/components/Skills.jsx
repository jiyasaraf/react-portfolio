import React, { useState } from 'react';

// Data structure updated to match the image categories and content.
// Each category now holds a title, unique ID, icon, and the list of skills.
const skillCategoriesData = [
    {
        id: 'Languages',
        title: 'Languages',
        icon: 'M13.5 17.5h-3v-3h-2v3h-3v-3h-2v3h-2v3h12v-3zm0-12h-3v-3h-2v3h-3v-3h-2v3h-2v3h12v-3z',
        skills: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'SQL']
    },
    {
        id: 'WebDev',
        title: 'Web Development',
        icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React Native']

    },
    {
        id: 'Databases',
        title: 'Databases',
        icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
        skills: ['Oracle 10G','MySQL', 'Postgresql', 'MS SQL Server']
    },
    {
        id: 'ML/AI',
        title: 'Machine Learning / AI',
        icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
        skills: ['TensorFlow', 'Pandas', 'NumPy', 'Scikit-Learn', 'OpenCV', 'LLMS', 'Streamlit']
    },
    {
        id: 'Tools',
        title: 'Tools & Technologies',
        icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
        skills: ['Git','VS Code', 'Google Cloud', 'Android Studio', 'Jupyter', 'MATLAB']
    },
];

// All available categories including the master 'All Skills' filter
const allCategoryKeys = ['All Skills', ...skillCategoriesData.map(c => c.id)];

// Component for rendering an individual skill item (chip)
const SkillChip = ({ skill }) => (
    <span className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg text-sm font-medium transition-colors hover:bg-purple-600 hover:text-white">
        {skill}
    </span>
);

// Component for rendering a complete category box
const CategoryBox = ({ category }) => {
    // Determine gradient color based on the category for visual distinction
    const gradientClass = {
        'Languages': 'from-red-800 to-red-900',
        'WebDev': 'from-blue-800 to-blue-900',
        'Databases': 'from-green-800 to-green-900',
        'ML/AI': 'from-purple-800 to-purple-900',
        'Tools': 'from-yellow-800 to-yellow-900',
    }[category.id] || 'from-gray-700 to-gray-800';

    return (
        <div className={`
            bg-gradient-to-br ${gradientClass} p-6 rounded-xl shadow-2xl h-full
            border border-gray-700 transition-all duration-300 hover:border-purple-500
        `}>
            {/* Header with Title and Icon */}
            <div className="flex items-center mb-6 border-b border-gray-600 pb-3">
                {/* Placeholder Icon */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#D8B4FE" // Light purple for icon
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-6 h-6 mr-3 flex-shrink-0"
                >
                    <path d={category.icon || "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"} />
                </svg>
                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
            </div>

            {/* Skills Container (Chips) */}
            <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                    <SkillChip key={skill} skill={skill} />
                ))}
            </div>
        </div>
    );
};

// Main Skills Section Component
export default function SkillsSection() {
    // State to manage the currently active filter button
    const [activeFilter, setActiveFilter] = useState('All Skills');
    
    // Determine which categories to display
    const filteredCategories = activeFilter === 'All Skills'
        ? skillCategoriesData // Show all boxes
        : skillCategoriesData.filter(category => category.id === activeFilter); // Show only the selected box

    return (
        <section id="skills" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-white relative inline-block pb-1">
                        Technical Expertise
                    </h2>
                    <p className="text-lg text-gray-400 mt-2">
                        Comprehensive skill set spanning multiple technologies and domains
                    </p>
                    <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-4"></div>
                </div>

                {/* Filter Buttons */}
                {/* Added flex-wrap for better wrapping on very narrow screens */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {allCategoryKeys.map(key => (
                        <button
                            key={key}
                            onClick={() => setActiveFilter(key)}
                            className={`
                                px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2
                                ${activeFilter === key
                                    ? 'bg-purple-600 border-purple-600 text-white shadow-xl transform scale-105' 
                                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-purple-500'
                                }
                            `}
                        >
                            {key === 'WebDev' ? 'Web Dev' : (key === 'ML/AI' ? 'ML/AI' : key)}
                        </button>
                    ))}
                </div>

                {/* Skill Category Boxes Container */}
                <div className="flex flex-wrap justify-center gap-8">
                    {skillCategoriesData.map(category => (
                        <div 
                            key={category.id} 
                            // Adjusted sizing for better small-screen fit: w-full on mobile, w-[48%] on tablet, and then smaller fractions on desktop
                            className={`
                                w-full sm:w-[48%] lg:w-1/3 xl:w-1/4 transition-all duration-500 ease-in-out
                                ${activeFilter === 'All Skills' || activeFilter === category.id 
                                    ? 'opacity-100 block' 
                                    : 'opacity-0 hidden' // Hide the box
                                }
                            `}
                        >
                            <CategoryBox category={category} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
