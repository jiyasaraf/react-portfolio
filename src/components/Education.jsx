import React from 'react';

// Data structure for the education timeline
const educationData = [
    {
        yearRange: '2022 - Present',
        degree: 'B.Tech in Computer Science and Engineering (AIML specialization)',
        institution: 'University of Engineering & Management (UEM), Jaipur',
        details: [
            'CGPA: 9.66/10.0',
        ],
        courses: [
            { name: 'Data Structures & Algorithms', icon: 'M5 12l5 5 5-5' },
            { name: 'Database Management Systems', icon: 'M5 12l5 5 5-5' },
            { name: 'Operating Systems', icon: 'M5 12l5 5 5-5' },
            { name: 'Computer Networks', icon: 'M5 12l5 5 5-5' },
            { name: 'Software Engineering', icon: 'M5 12l5 5 5-5' },
            { name: 'Artificial Intelligence', icon: 'M5 12l5 5 5-5' },
        ],
    },
    {
        yearRange: '2020 - 2022',
        degree: 'High School',
        institution: 'Agrasain Balika Siksha Sadan',
        details: [
            '12th: 93.25%',
            '10th: 95%',
            'Specialized in Physics, Chemistry, Maths and Computer',
        ],
        courses: [],
    },
];

// Component for a single timeline entry
const EducationEntry = ({ entry, isLast }) => {
    return (
        <div className="relative flex pb-12">
            {/* Vertical Line/Connector */}
            {!isLast && (
                <div className="absolute top-5 left-[45px] w-0.5 bg-purple-700 h-[calc(100%-20px)]"></div>
            )}

            {/* Timeline Dot and Year */}
            <div className="flex flex-col items-center mr-8 z-10">
                <div className="w-5 h-5 rounded-full bg-purple-500 shadow-md ring-4 ring-gray-900"></div>
                <div className="mt-3 text-sm font-semibold text-gray-300 w-24 text-center">
                    {entry.yearRange}
                </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 min-w-0 p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 transition-all duration-300 hover:border-purple-500">
                <h3 className="text-xl font-bold text-white mb-1">{entry.degree}</h3>
                <p className="text-sm text-purple-300 mb-3">{entry.institution}</p>

                {/* Academic Details */}
                {entry.details.map((detail) => (
                    <p key={detail} className="text-sm text-gray-400 font-medium mb-1">
                        {detail}
                    </p>
                ))}

                {/* Key Courses */}
                {entry.courses.length > 0 && (
                    <div className="mt-4">
                        <p className="text-md font-bold text-purple-400 mb-3">Key Courses</p>
                        <div className="space-y-3">
                            {entry.courses.map((course) => (
                                <div
                                    key={course.name}
                                    className="flex items-center p-3 bg-gray-700 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700/80 hover:translate-x-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#D8B4FE"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5 mr-3 flex-shrink-0 text-purple-400"
                                    >
                                        {/* <path d={course.icon} /> */}
                                    </svg>
                                    <span className="text-sm font-medium text-gray-200">
                                        {course.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Main Education Section Component
export default function EducationSection() {
    return (
        <section id="education" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Section Title */}
                <div className="mb-10 text-center sm:text-left">
                    <h2 className="text-4xl font-extrabold text-white relative inline-block pb-1 uppercase tracking-wider">
                        Education
                    </h2>
                    <div className="w-16 h-1 bg-purple-500 rounded-full mt-2 mx-auto sm:mx-0"></div>
                </div>

                {/* Timeline Container */}
                <div className="mt-8">
                    {educationData.map((entry, index) => (
                        <EducationEntry
                            key={entry.yearRange}
                            entry={entry}
                            isLast={index === educationData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
