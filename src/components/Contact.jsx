import React, { useState } from 'react';

// Custom SVG Icons for Social Links (Matching Hero/Projects style)
const SocialIcon = ({ d, title, href }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        title={title}
        className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
    >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d={d} />
        </svg>
    </a>
);

// Data for Social Icons
const socialLinks = [
    { 
        title: 'GitHub', 
        icon: 'M12 2a10 10 0 0 0-3.16 19.4c.5.1.7-.2.7-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1.9 1.7 2.3 1.2 2.9.9.1-.7.4-1.2.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2.1 1-2.9-.1-.2-.5-1.4.1-2.9 0 0 .8-.3 2.7 1.1A9.5 9.5 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.4 2.7-1.1 2.7-1.1.6 1.5.2 2.7.1 2.9.6.8 1 1.8 1 2.9 0 3.8-2.3 4.7-4.5 4.9.4.4.7 1 .7 2v2.5c0 .3.2.6.7.5A10 10 0 0 0 12 2z', 
        href: 'https://github.com/jiyasaraf' // <-- GitHub link added
    },
    { 
        title: 'LinkedIn', 
        icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 9h4v12H4zM6 3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z', 
        href: 'https://www.linkedin.com/in/jiyasaraf/' // <-- LinkedIn link added
    }
];

export default function ContactSection({ emailAddress = "jiyasaraf@example.com" }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // To display success or error messages

    // ** IMPORTANT: REPLACE THIS URL with your actual Formspree endpoint **
    const FORMSPREE_URL = "https://formspree.io/f/xgvnlwpk"; 
    // Example: https://formspree.io/f/mrgzbykl

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // New handleSubmit uses fetch API for direct submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Error: Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully! Thank you.');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            } else {
                // Formspree provides error details in the response
                const data = await response.json();
                setStatus(data.error || 'Oops! There was an issue sending your message.');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('Network Error: Could not reach the server.');
        }
    };

    const inputClasses = "w-full p-4 mb-5 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-200 placeholder-gray-400";

    // Dynamic status text styling
    const getStatusClass = () => {
        if (status.includes('successfully')) {
            return 'text-green-400';
        } else if (status.includes('Error') || status.includes('Oops')) {
            return 'text-red-400';
        }
        return 'text-yellow-400'; // For 'Sending...'
    };

    return (
        <section id="contact" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-2xl">
                
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-white relative inline-block pb-1 uppercase tracking-wider">
                        Contact Me
                    </h2>
                    <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-2"></div>
                </div>

                <p className="text-center text-gray-400 mb-8 text-lg">
                    Have a project idea or want to collaborate? Send me a message!
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="mb-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                        required
                    />
                    
                    {/* Status Message */}
                    {status && (
                        <p className={`text-center font-medium mb-4 ${getStatusClass()}`}>
                            {status}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'Sending...'}
                        className="w-full py-4 bg-yellow-500 text-gray-900 font-bold text-lg rounded-lg shadow-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 pt-6 border-t border-gray-700">
                    {socialLinks.map(link => (
                        <SocialIcon 
                            key={link.title} 
                            d={link.icon} 
                            title={link.title} 
                            href={link.href} 
                        />
                    ))}
                </div>

                {/* Copyright/Footer text */}
                <div className="text-center text-sm text-gray-500 mt-8">
                    &copy; 2025 Jiya Saraf | All rights reserved
                </div>
            </div>
        </section>
    );
}
