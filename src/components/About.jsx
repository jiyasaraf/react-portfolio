import React from "react";

export default function AboutSection() {
  const placeholderImage = "jiya.jpg"; // Using a placeholder for consistency
  const RESUME_DOWNLOAD_LINK = "https://drive.google.com/file/d/1U1i07dcLF28ziNJjkgmK9AfLo4vA-pok/view?usp=sharing"; // Replace with your actual link

  const DownloadIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <path d="M12 18V10" />
      <path d="M15 15l-3 3-3-3" />
    </svg>
  );

  return (
    <section id="about" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-white uppercase">About Me</h2>
          <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Responsive Content Layout: Stacks on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Image Container - Responsive sizing */}
          <div className="flex-shrink-0">
            <img 
              src={placeholderImage} 
              alt="Jiya Saraf" 
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full shadow-2xl shadow-yellow-500/30 border-4 border-yellow-500/50"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/256x256/1e293b/d9f99d?text=Image+Error" }}
            />
          </div>
          
          {/* Text Content - Takes up remaining width */}
          <div className="flex-1 text-gray-300 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              AI Developer & Data Science Enthusiast
            </h3>
            
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                Hello! I’m <b>Jiya Saraf</b>, an <b>AI Developer</b> and Data Science Enthusiast with a passion for transforming complex data into intelligent solutions using NLP and ML. 
              </p>
              <p>
                Experience spans end-to-end AI projects, from data preparation to deploying scalable full‑stack applications, including LLaMA‑3 workflows and LSTM‑based sentiment models. 
              </p>
              <p>
                Focused on solving challenging problems and writing maintainable code while exploring new technologies.
              </p>

              <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-gray-300 justify-center md:justify-start">
                <span><b>Location</b>: Jaipur, India</span>
                <span><b>Focus</b>: AIML · Data Science</span>
                <span><b>Status</b>: Open to collaboration</span>
              </div>

              <div className="pt-6 flex justify-center md:justify-start">
                <a
                  href={RESUME_DOWNLOAD_LINK}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-bold text-base rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:bg-yellow-400"
                >
                  <DownloadIcon className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
