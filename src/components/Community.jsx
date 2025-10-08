import React, { useMemo, useState } from "react";

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.16 19.4c.5.1.7-.2.7-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1.9 1.7 2.3 1.2 2.9.9.1-.7.4-1.2.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2.1 1-2.9-.1-.2-.5-1.4.1-2.9 0 0 .8-.3 2.7 1.1A9.5 9.5 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.4 2.7-1.1 2.7-1.1.6 1.5.2 2.7.1 2.9.6.8 1 1.8 1 2.9 0 3.8-2.3 4.7-4.5 4.9.4.4.7 1.1.7 2.2v3.3c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  </svg>
);

const ExternalLinkIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const communityEvents = [
  {
    id: 1,
    title: "Core Organizer - AceHack 4.0",
    description: "Led core operations for AceHack 4.0, managing event logistics, mentorship, and participant engagement for Rajasthan's largest student-run hackathon.",
    category: "Hackathons",
    role: "Core Team",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7198751566373713920/",
    source: "LinkedIn Post",
    tags: ["Event Management", "Team Leadership", "Logistics", "Community Building"],
  },
  {
    id: 2,
    title: "Organizing Committee - AceHack 3.0",
    description: "Contributed to the organizing committee, focusing on technical support and mentorship for participants during the 3.0 edition of the hackathon.",
    category: "Hackathons",
    role: "Committee Member",
    link: "https://example.com/acehack3",
    source: "Event Page",
    tags: ["Mentorship", "Technical Support", "Coordination"],
  },
  {
    id: 3,
    title: "Active Open Source Contributor",
    description: "Regularly contribute to open-source projects, focusing on Python libraries and ML model deployment scripts to improve community tools.",
    category: "Open Source",
    role: "Contributor",
    link: "https://github.com/your-username",
    source: "GitHub Profile",
    tags: ["Python", "MLOps", "Documentation", "Git"],
  },
  {
    id: 4,
    title: "Data Science Workshop Leader",
    description: "Conducted workshops on Data Science fundamentals and Pandas/NumPy for university peers, aiming to promote practical application of ML skills.",
    category: "Workshops",
    role: "Host/Speaker",
    link: "#",
    source: "Internal Event",
    tags: ["Teaching", "Public Speaking", "Data Science", "Python"],
  },
];

const categories = ["All", "Hackathons", "Open Source", "Workshops"];

const CommunityCard = ({ event }) => (
  <div className="flex flex-col h-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-gray-700 hover:border-yellow-500/50">
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-yellow-500/20 text-yellow-300">
          {event.category}
        </span>
        <span className="text-xs font-medium text-gray-400 mt-0.5 whitespace-nowrap">{event.role}</span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 leading-snug">{event.title}</h3>
      <p className="text-base text-gray-300 flex-1">{event.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
        {event.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-900/50 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
    
    <div className="px-6 py-4 bg-gray-900 border-t border-gray-700">
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold inline-flex items-center transition-colors"
      >
        {event.source}
        <ExternalLinkIcon className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

export default function CommunitySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = useMemo(() => {
    if (activeCategory === "All") {
      return communityEvents;
    }
    return communityEvents.filter(
      (event) => event.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="community" className="scroll-mt-20 py-16 bg-[#0F1720]">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">Community & Outreach</h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">Engagement in hackathons, open source, and mentorship.</p>
          <div className="w-20 h-1.5 bg-yellow-500 rounded-full mx-auto mt-4" />
        </header>

        {/* Filter Buttons - Ensured max-width is fluid and buttons wrap */}
        <div className="mb-10">
          <div className="mx-auto max-w-4xl rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2 py-2 sm:py-3 shadow-inner">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${activeCategory === cat ? "bg-yellow-500 text-black shadow-lg" : "bg-white/10 text-gray-200 hover:bg-white/20"} px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm border border-white/10 transition-colors`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Community Card Grid - Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <CommunityCard key={event.id} event={event} />
          ))}

          {filteredEvents.length === 0 && (
            <div className="md:col-span-2 text-center py-10 text-gray-500 text-lg font-medium">
              No community events found for the selected category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
