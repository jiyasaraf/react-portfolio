import React from 'react';

// About Section Component
export default function AboutSection() {
    const placeholderImage = 'jiya.jpg';
    // Resume download link (copied from Experience.jsx)
    // IMPORTANT FIX: Use the specific Google Drive direct download URL format.
    // Replace 'https://tinyurl.com/resume-jiya-saraf' with the actual Google Drive share link,
    // and then convert it to the direct download format:
    // https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
    // Assuming your tinyurl link redirects to a Google Drive ID, you must manually 
    // obtain the actual File ID from Google Drive and use the format below for reliability.
    // For now, I'll revert to the simplest HTML approach which often works better for 
    // files hosted on public platforms that honor the 'download' attribute.
    
    // We will use the Google Drive direct download format for the best chance of success.
    // Note: Since I don't know the file ID behind the tinyurl, I'll use a placeholder structure.
    // Please replace the entire string with your file's direct download link.
    const RESUME_DOWNLOAD_LINK = "https://drive.google.com/uc?export=download&id=1cfzjHlPqgw3hG1lqPhSLXSBN4bMnnWqA";
    
    // SVG icon for the download button (using the file icon from the Hero section)
    const DownloadIcon = (props) => (
        <svg 
            {...props} 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M12 18V10"/>
            <path d="M15 15l-3 3-3-3"/>
        </svg>
    );

    // FIX: Removed the complex handleDownload function. 
    // We are now using the reliable direct download link format and the simple HTML 'download' attribute.

    return (
        <section id="about" className="py-16 bg-slate-900">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Title */}
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white relative inline-block pb-1">
                        About Me
                    </h2>
                    <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-2"></div>
                </div>

                {/* Responsive Flex Container: Stacks on mobile, side-by-side on large screens */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                            <img 
                                src={placeholderImage} 
                                alt="Jiya Saraf Profile" 
                                className="w-full h-full object-cover object-center"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://placehold.co/400x400/9CA3AF/1F2937?text=Profile+Image';
                                }}
                            />
                            {/* Optional: Add a subtle border ring */}
                            <div className="absolute inset-0 ring-4 ring-yellow-500 ring-opacity-50 rounded-full pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="w-full lg:w-2/3 text-white space-y-6 text-lg leading-relaxed">
                        <p>
                            Hello! I'm <b>Jiya Saraf</b>, an <b>AI Developer and Data Science Enthusiast</b> with a deep-seated passion for transforming complex data into intelligent, actionable solutions. My journey is centered around leveraging advanced <b>Natural Language Processing (NLP) and Machine Learning (ML)</b> models to build impactful applications.
                        </p>
                        <p>
                            I specialize in the end-to-end development of AI-driven projects, from initial data cleaning and feature engineering to deployment of scalable, full-stack applications. I have experience working with large language models (LLMs) like <b>LLaMA 3</b> and building predictive systems such as <b>LSTM-based sentiment classifiers</b>.
                        </p>
                        <p>
                            My goal is to solve challenging problems and contribute meaningfully to the field of Artificial Intelligence. I am constantly exploring new technologies and am dedicated to writing clean, maintainable, and efficient code. Let's connect and build something innovative!
                        </p>
                        
                        {/* Key Info Points */}
                        <div className="pt-4 flex flex-wrap gap-x-10 gap-y-4 text-sm font-semibold text-gray-300">
                            <span><b>Location:</b> Jaipur, India</span>
                            <span><b>Focus: </b>AIML | DataScience</span>
                            <span><b>Status: </b> Open to collaboration</span>
                        </div>
                        
                        {/* NEW: Download CV Button */}
                        <div className="pt-6">
                            <a 
                                href={RESUME_DOWNLOAD_LINK}
                                download
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-yellow-500 text-gray-900 font-bold text-base rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:bg-yellow-400"
                            >
                                Download Resume
                            </a>
                        </div>

                         
                    </div>
                </div>
            </div>
        </section>
    );
}
