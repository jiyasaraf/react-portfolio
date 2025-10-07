import React from 'react';

// Centralized Data for Experience - UPDATED with your new content.
const experienceData = [
    {
        id: 1,
        title: "AI Intern",
        company: "SubMastery",
        duration: "Aug 2025 - Sep 2025 (Remote)",
        description: [
            "Developed **AuditorMate.ai** to convert auditor notes into ISO-compliant reports.",
            "Built an AI image generator for LinkedIn headshots using computer vision.",
            "Automated workflows in n8n for poster generation and reporting tasks."
        ],
        tags: ['AI', 'Computer Vision', 'Workflow Automation', 'Python']
    },
    {
        id: 2,
        title: "Core Organizer",
        company: "AceHack 4.0 (Rajasthan's largest student-run hackathon)",
        duration: "Jan 2025 - April 2025", // You can fill in the actual dates
        description: [
            "Organized AceHack 4.0 as a core team member, managing large-scale event logistics for thousands of participants.",
            "Played a pivotal role in mentorship coordination, sponsorship handling, and event execution.",
            "Resulted in high participant satisfaction and wide community impact."
        ],
        tags: ['Event Management', 'Mentorship', 'Community']
    },
    {
        id: 3,
        title: "Organizing Committee Member",
        company: "AceHack 3.0 (Rajasthan's largest student-run hackathon)",
        duration: "Jan 2024 - April 2024", // You can fill in the actual dates
        description: [
            "Provided hands-on mentorship and technical guidance to teams across various domains including AI, ML, and web development.",
            "Led workshops on algorithm design and best coding practices.",
            "Fostered leadership and collaborative skills in over 1,000 participants."
        ],
        tags: ['Mentorship', 'Technical Guidance', 'Workshops', 'Leadership']
    },
];

// Component for a single job entry in the timeline
const ExperienceItem = ({ experience }) => (
    <div className="relative mb-8 pl-8 md:pl-16 last:mb-0">
        {/* Timeline Dot & Line */}
        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-yellow-500 shadow-md transform -translate-x-1/2"></div>
        {/* The line stops before the last item's dot */}
        <div className="absolute left-0 top-6 bottom-[-2rem] w-0.5 bg-white ml-[-0.3rem]"></div>

        <div className="bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-yellow-200">
            <div className="flex justify-between items-start flex-col sm:flex-row">
                <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                <span className="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full whitespace-nowrap">{experience.duration}</span>
            </div>
            {/* Using description as the company name since the hackathon is the central focus */}
            <p className="text-md font-medium text-white-700 mb-3">{experience.company}</p>

            <ul className="list-disc space-y-2 pl-5 text-white text-sm">
                {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                {experience.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

// Main Experience Section Component
export default function ExperienceSection() {
    // Google Drive direct download URL format:
    const RESUME_DOWNLOAD_LINK = "https://drive.google.com/uc?export=download&id=1cfzjHlPqgw3hG1lqPhSLXSBN4bMnnWqA";

    return (
        <section id="experience" className="py-16 bg-slate-900">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white relative inline-block pb-1">
                        Experience
                    </h2>
                    <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-2"></div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {experienceData.map(job => (
                        <ExperienceItem key={job.id} experience={job} />
                    ))}
                </div>
                
                {/* Download Resume CTA */}
                <div className="text-center mt-12">
                    <a 
                        // Updated link to force direct download from Google Drive
                        href={RESUME_DOWNLOAD_LINK} 
                        // The 'download' attribute is still useful as a fallback, especially for local files.
                        download 
                        className="inline-block px-8 py-3 bg-gray-900 text-yellow-400 font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
