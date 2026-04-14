import React from 'react';
import { FiGithub, FiExternalLink, FiCpu, FiGlobe, FiLayers } from "react-icons/fi";
import Glow from '../hooks/Glow';

const Projects = () => {
    // Dynamic project data based on your ISIMM background
    const projectList = [
        {
            title: "ISIMM DIGICLASS",
            category: "Full-Stack & Hardware",
            description: "An end-to-end architecture connecting microcontrollers and  sensors to a real-time React dashboard for Making Administrative Tasks Easier for ISIMM Employees.",
            tags: ["React","Python" ,"FASTAPI", "POstgresql", "IoT"],
            icon: <FiCpu />,
            github: "https://github.com/aziz4567/isimm-digiclass-prototype.git",
            link: "#"
        },
        {
            title: "Photographer Portfolio",
            category: "Web Development",
            description: "Created a portfolio website for a local photographer, showcasing their work with a custom-built CMS and responsive design.",
            tags: ["React", "Tailwind CSS", "JavaScript","framer-motion"],
            icon: <FiLayers />,
            github: "#",
            link: "https://malek-portfolio-91fba.web.app"
        },
        {
            title: "Nike Clone Website",
            category: "Web Development",
            description: "A clone of the Nike e-commerce website built with React and Tailwind CSS, featuring responsive design and interactive UI elements.",
            tags: ["React", "Tailwind CSS", "JavaScript"],
            icon: <FiGlobe />,
            github: "https://github.com/alouimedaziz/Nike.git",
            link: "https://dev-aziz-nike.netlify.app/"
        },
        {
            title: "Microsoft Tech Club ISIMM",
            category: "Web Development",
            description: "Created a website for the Microsoft Tech Club at ISIMM, providing information about club activities, events, and resources for students interested in technology.",
            tags: ["React", "Tailwind CSS", "JavaScript","framer-motion"],
            icon: <FiGlobe />,
            github: "https://github.com/aziz4567/mtc.git",
            link: "#"
        }
    ];

    return (
        <section id="projects" className='relative min-h-screen py-24 px-6 bg-[#030303] flex flex-col items-center overflow-hidden'>
            <Glow />
            
            {/* Architectural Background Grid (CSS Only) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
            </div>

            {/* Header Area */}
            <div className='z-10 text-center mb-24'>
                
                <h2 className='text-white font-extrabold text-5xl md:text-7xl tracking-tighter'>
                    Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>Work.</span>
                </h2>
                <div className='mx-auto w-20 h-1 mt-6 bg-blue-600/50 rounded-full'></div>
            </div>

            {/* Projects List */}
            <div className='z-10 max-w-6xl w-full flex flex-col gap-16'>
                {projectList.map((project, index) => (
                    <div 
                        key={index}
                        className='group relative w-full'
                    >
                        {/* The Card - Uses pure Tailwind transitions for that "Premium" feel */}
                        <div className='relative grid grid-cols-1 lg:grid-cols-12 items-center gap-10 p-8 md:p-14 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.03] hover:border-blue-500/20 transition-all duration-700 ease-in-out backdrop-blur-md'>
                            
                            {/* Icon Column */}
                            <div className='hidden lg:flex col-span-1 justify-center text-5xl text-blue-500/10 group-hover:text-blue-500 transition-colors duration-500'>
                                {project.icon}
                            </div>

                            {/* Main Content */}
                            <div className='lg:col-span-8 space-y-6'>
                                <div className='space-y-2'>
                                    <p className='text-blue-500 font-mono text-xs uppercase tracking-[0.2em] font-bold'>{project.category}</p>
                                    <h3 className='text-white text-3xl md:text-5xl font-bold tracking-tight group-hover:text-blue-50 group-hover:translate-x-1 transition-all duration-500'>
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <p className='text-gray-400 text-lg leading-relaxed max-w-2xl'>
                                    {project.description}
                                </p>

                                <div className='flex flex-wrap gap-2 pt-2'>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className='px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/10 rounded-lg group-hover:border-blue-500/40 group-hover:text-gray-300 transition-all'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className='lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-start gap-8'>
                                <a href={project.github} className='flex items-center gap-2 text-white/30 hover:text-white transition-all font-medium'>
                                    <span>Repo</span>
                                    <FiGithub />
                                </a>
                                <a href={project.link} className='px-10 py-4 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:-rotate-1 active:scale-95 shadow-xl shadow-white/5'>
                                    Explore
                                </a>
                            </div>
                        </div>

                        {/* Subtle Background Shadow (pure CSS hover) */}
                        <div className='absolute -inset-2 bg-blue-600/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none'></div>
                    </div>
                ))}
            </div>

            {/* Bottom Archive Link */}
           
        </section>
    );
};

export default Projects;