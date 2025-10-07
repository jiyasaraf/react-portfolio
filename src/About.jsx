import React from 'react';

// About Section Component
export default function AboutSection() {
    const placeholderImage = 'jiya.jpg';

    return (
        <section id="about" className="bg-slate-900">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Title */}
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white relative inline-block pb-1">
                        About Me
                    </h2>
                    <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-2"></div>
                </div>

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
                        <div className="pt-4 flex flex-wrap gap-x-10 gap-y-4 text-sm font-semibold text-gray-900">
                            <span><b>Location:</b> Jaipur, India</span>
                            <span><b>Focus: </b>AIML | DataScience</span>
                            <span><b>Status: </b> Open to collaboration</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
