import React from "react";

const experienceData = [
  {
    id: 1,
    title: "AI Intern",
    company: "SubMastery",
    duration: "Aug 2025 - Sep 2025 · Remote",
    description: [
      "Developed AuditorMate.ai to convert auditor notes into ISO-compliant reports.",
      "Built an AI image generator for LinkedIn headshots using computer vision.",
      "Automated workflows in n8n for poster generation and reporting tasks.",
    ],
    tags: ["AI", "Computer Vision", "Workflow Automation", "Python"],
  },
  {
    id: 2,
    title: "Core Organizer",
    company: "AceHack 4.0 · Rajasthan’s largest student-run hackathon",
    duration: "Jan 2025 - Apr 2025",
    description: [
      "Organized AceHack 4.0 as a core team member managing event logistics.",
      "Handled mentorship, sponsorships, and execution for thousands of participants.",
      "Achieved high satisfaction and strong community impact.",
    ],
    tags: ["Event Management", "Mentorship", "Community"],
  },
  {
    id: 3,
    title: "Organizing Committee Member",
    company: "AceHack 3.0 · Rajasthan’s largest student-run hackathon",
    duration: "Jan 2024 - Apr 2024",
    description: [
      "Provided mentorship and technical guidance across multiple domains to over 50 teams.",
      "Contributed to the successful execution of the event's technical tracks.",
    ],
    tags: ["Mentorship", "Technical Guidance", "Logistics"],
  },
];

const ExperienceCard = ({ experience }) => (
  <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl transition-all duration-300 hover:bg-gray-700/80 border border-gray-700 hover:border-yellow-500/50">
    {/* Header with Title and Duration - Uses flex to ensure content wraps/adjusts */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
      <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1 sm:mb-0">{experience.title}</h3>
      <span className="text-xs sm:text-sm font-semibold text-yellow-800 bg-yellow-100 px-2.5 py-1 rounded-full whitespace-nowrap">
        {experience.duration}
      </span>
    </div>

    <p className="text-sm sm:text-base font-medium text-gray-200 mt-1">{experience.company}</p>

    <ul className="list-disc space-y-2 pl-5 text-gray-200 text-sm sm:text-base mt-4">
      {experience.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>

    {/* Tags - Uses flex-wrap to ensure tags wrap on mobile */}
    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
      {experience.tags.map((tag) => (
        <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-900/50 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl"> {/* Fluid container */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">Experience</h2>
          <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="space-y-8">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
