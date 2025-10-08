import React, { useState, useMemo } from "react";

const sharedIconPath = "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z";

const skillCategoriesData = [
  { id: "Languages", title: "Languages", skills: ["Python", "JavaScript", "Java", "C", "C++", "SQL"] },
  { id: "WebDev", title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React"] },
  { id: "Databases", title: "Databases", skills: ["Oracle 10G", "MySQL", "Postgresql", "MS SQL Server"] },
  { id: "MLAI", title: "Machine Learning & AI", skills: ["TensorFlow", "Pandas", "NumPy", "Scikit-Learn", "OpenCV", "LLMS", "Streamlit"] },
  { id: "Tools", title: "Tools & Technologies", skills: ["Git", "VS Code", "Google Cloud", "Android Studio", "Jupyter", "MATLAB"] },
];

const categoryThemes = {
  Languages: { panel: "from-[#7f1d1d] to-[#641414]", chip: "bg-gray-700/70 text-gray-100 hover:bg-yellow-400 hover:text-black", border: "border border-[#b91c1c]/50" },
  WebDev: { panel: "from-[#1e3a8a] to-[#142a66]", chip: "bg-gray-700/70 text-gray-100 hover:bg-yellow-400 hover:text-black", border: "border border-[#1e40af]/50" },
  Databases: { panel: "from-[#14532d] to-[#0f3f22]", chip: "bg-gray-700/70 text-gray-100 hover:bg-yellow-400 hover:text-black", border: "border border-[#166534]/50" },
  MLAI: { panel: "from-[#5b21b6] to-[#45208f]", chip: "bg-gray-700/70 text-gray-100 hover:bg-yellow-400 hover:text-black", border: "border border-[#6d28d9]/50" },
  Tools: { panel: "from-[#7c4807] to-[#5a3606]", chip: "bg-gray-700/70 text-gray-100 hover:bg-yellow-400 hover:text-black", border: "border border-[#a16207]/50" },
};

const filterKeys = ["All Skills", ...skillCategoriesData.map((c) => c.id)];

const SkillChip = ({ text, className = "" }) => (
  <span className={`px-3.5 py-1.5 text-sm rounded-lg transition-colors duration-200 ${className}`}>{text}</span>
);

function SkillCard({ title, skills, theme }) {
  return (
    <div className={`group relative w-full sm:w-[350px] md:w-[360px] min-h-[260px] rounded-2xl ${theme.border} shadow-md overflow-hidden bg-gradient-to-br ${theme.panel} transition duration-300 hover:scale-[0.99] hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]`}>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-400/0 transition duration-300 group-hover:ring-2 group-hover:ring-yellow-400/60" />
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-white">
              <path d={sharedIconPath} fill="currentColor" />
            </svg>
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="mt-4 h-px w-full bg-white/15" />
      </div>
      <div className="px-5 pb-5">
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <SkillChip key={s} text={s} className={theme.chip} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState("All Skills");

  const items = useMemo(
    () =>
      skillCategoriesData.map((c) => {
        const theme = categoryThemes[c.id] ?? {
          panel: "from-[#1f2937] to-[#111827]",
          chip: "bg-gray-700/70 text-gray-100 hover:bg-yellow-400 hover:text-black",
          border: "border border-white/10",
        };
        return { key: c.id, title: c.title, skills: c.skills, theme };
      }),
    []
  );

  const visible = useMemo(() => (active === "All Skills" ? items : items.filter((i) => i.key === active)), [active, items]);

  return (
    <section id="skills" className="scroll-mt-20 py-16 bg-[#0F1720]">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">Skills</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300">Comprehensive skill set spanning multiple technologies and domains.</p>
          <div className="w-20 h-1.5 bg-yellow-500 rounded-full mx-auto mt-4" />
        </header>

        <div className="mb-10">
          <div className="mx-auto max-w-4xl rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2 py-2 sm:py-3 shadow-inner">
            <div className="flex flex-wrap gap-2 justify-center">
              {filterKeys.map((key) => {
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`${isActive ? "bg-yellow-500 text-black" : "bg-white/10 text-gray-200 hover:bg-white/20"} px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm border border-white/10 transition-colors`}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {visible.map((v) => (
            <SkillCard key={v.key} title={v.title} skills={v.skills} theme={v.theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
