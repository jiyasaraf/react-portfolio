import React, { useState } from "react";

const SocialIcon = ({ d, title, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  </a>
);

const socialLinks = [
  {
    title: "LinkedIn",
    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 9h4v12H4zM6 3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    href: "https://www.linkedin.com/in/jiyasaraf",
  },
  {
    title: "GitHub",
    icon: "M12 2a10 10 0 0 0-3.16 19.4c.5.1.7-.2.7-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1 0 1.7 1.1 1.7 1.1.9 1.7 2.3 1.2 2.9.9.1-.7.4-1.2.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2.1 1-2.9-.1-.2-.5-1.4.1-2.9 0 0 .8-.3 2.7 1.1A9.5 9.5 0 0 1 12 6.8c.8 0 1.5.1 2.2.3 1.9-1.4 2.7-1.1 2.7-1.1.6 1.5.2 2.7.1 2.9.6.8 1 1.8 1 2.9 0 3.8-2.3 4.7-4.5 4.9.4.4.7 1.1.7 2.2v3.3c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
    href: "https://github.com/jiyasaraf",
  },
  
 
];

const inputClasses = "w-full p-3 sm:p-4 mb-4 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 placeholder-gray-400";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getStatusClass = () => {
    if (status.includes("Success")) return "text-green-400";
    if (status.includes("Error")) return "text-red-400";
    return "text-yellow-400";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Simulate an API call to a form service like Formspree or Netlify Forms
      // In a real application, replace this with your actual form submission logic
      console.log("Form Data:", formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      // Assume success for the simulation
      setStatus("Success! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after a few seconds
      setTimeout(() => setStatus(""), 5000);

    } catch (error) {
      console.error("Submission error:", error);
      setStatus("Error: Failed to send your message. Please try again later.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl"> {/* Fluid container max-w-4xl */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">Contact Me</h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">Let's connect and build something impactful together.</p>
          <div className="w-16 h-1.5 bg-yellow-500 rounded-full mx-auto mt-4" />
        </header>

        {/* Contact Form Container - Responsive width */}
        <div className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-10 rounded-xl shadow-2xl border border-gray-700">
          <form onSubmit={handleSubmit} className="mb-4 sm:mb-6">
            <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} className={inputClasses} required />
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} className={inputClasses} required />
            <textarea name="message" placeholder="Enter Your Message" rows={6} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-y`} required />
            {status && (
              <p className={`text-center font-medium mb-4 ${getStatusClass()}`}>
                {status}
              </p>
            )}
            <button type="submit" disabled={status === "Sending..."} className="w-full py-3 sm:py-4 bg-yellow-500 text-gray-900 font-bold text-lg rounded-lg shadow-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed">
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="flex justify-center space-x-6 pt-6 border-t border-gray-700">
            {socialLinks.map((link) => (
              <SocialIcon key={link.title} d={link.icon} title={link.title} href={link.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
