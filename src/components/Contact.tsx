import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import { personalInfo } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="border-b-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Contact</h2>
        <p className="subtitle">Let's connect and build something secure and scalable.</p>
        
        <div className="flex flex-wrap gap-5 mt-5">
          <a 
            href={`mailto:${personalInfo.email}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 py-2.5 px-5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 py-2.5 px-5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 py-2.5 px-5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a 
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2.5 py-2.5 px-5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            <Phone size={20} />
            <span>{personalInfo.phone}</span>
          </a>
        </div>
      </motion.div>
      
      <div className="mt-[100px] text-center text-[#555] text-[0.9rem]">
        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React & Three.js.
      </div>
    </section>
  );
};

export default Contact;
