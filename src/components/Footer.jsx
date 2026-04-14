import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white py-12 px-6 border-t border-gray-900 overflow-hidden">
      {/* Subtle background glow to match the site theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* --- Branding & Tagline --- */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h2 className="text-2xl font-black tracking-tighter uppercase">
              Aloui <span className="text-blue-500">Med Aziz</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs tracking-widest">
              DESIGNING BEYOND THE SURFACE
            </p>
          </div>

          {/* --- Social Links --- */}
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/aziz4567" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-500 hover:text-white transition-all transform hover:scale-125"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/medazizaloui/" 
              className="text-gray-500 hover:text-blue-500 transition-all transform hover:scale-125"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/azizaloui987" 
              className="text-gray-500 hover:text-pink-500 transition-all transform hover:scale-125"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* --- Back to Top --- */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
          >
            <span className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-white uppercase">
              Back to top
            </span>
            <FaArrowUp size={12} className="text-blue-500 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* --- Copyright Area --- */}
        <div className="mt-12 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] tracking-widest uppercase font-medium">
            &copy; {new Date().getFullYear()} Aloui Med Aziz. All Rights Reserved.
          </p>
          
          <div className="flex gap-6">
            <span className="text-gray-600 text-[10px] tracking-widest uppercase hover:text-blue-500 cursor-default transition-colors">
              IoT Developer
            </span>
            <span className="text-gray-600 text-[10px] tracking-widest uppercase hover:text-blue-500 cursor-default transition-colors">
              Full-Stack Dev
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer