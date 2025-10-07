import React from 'react';

// Data structured to match the content from the white-background image
const communityData = [
    {
        title: 'Leadership & Event Roles',
        description: [
            'Core committee and event lead at GDG UEM Jaipur, GDSC, TSS, E-Cell, ACM UEMJ, and AceHack, with involvement in 50+ events.',
            'Managed hackathon operations, mentorship programs, and developer community growth across Rajasthan\'s top tech organizations.',
        ],
        icon: 'M12 1L3 5V19L12 23L21 19V5L12 1Z' // Hexagon/Leadership style icon
    },
    {
        title: 'The Speech Society',
        description: [
            'Member of the core committee, actively organizing events, workshops, and public speaking forums.',
            'Responsible for building communication and leadership skills among members.',
        ],
        icon: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM10 16H14V14H10V16ZM10 12H14V8H10V12Z' // Idea/Discussion icon style
    },
];

// Reusable card component for community entries using a clean, contrasting layout
const CommunityPanel = ({ data }) => {
    return (
        // The column grid class is applied in the parent container now
        <div className="p-6 md:p-8 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 transition-all duration-300 hover:border-yellow-500 h-full flex flex-col">
            <div className="flex items-center mb-4">
                 {/* Icon, simplified and colored for contrast */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-6 h-6 mr-3 text-yellow-400"
                >
                    <path d={data.icon} />
                </svg>
                <h3 className="text-xl font-bold text-yellow-400 leading-tight">
                    {data.title}
                </h3>
            </div>
            
            <ul className="space-y-3 text-base text-gray-300 ml-4 flex-grow">
                {data.description.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-yellow-400 mr-2 mt-1">•</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Main Community Section Component
export default function CommunitySection() {
    return (
        <section id="community" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                
                {/* Section Title */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-extrabold text-white relative inline-block pb-1 uppercase tracking-wider">
                        Community & Leadership
                    </h2>
                    <div className="w-16 h-1 bg-yellow-500 rounded-full mx-auto mt-2"></div>
                </div>

                {/* Panels Grid: Now using grid-cols-1 for mobile, grid-cols-2 for desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {communityData.map((item, index) => (
                        <CommunityPanel key={index} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
