import React from 'react';
import { FiGithub, FiExternalLink, FiCpu, FiGlobe, FiLayers } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython, FaJava, FaCss3, FaHtml5, FaMicrochip } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiArduino } from "react-icons/si";
import { DiJavascript1, DiMysql, DiPostgresql } from "react-icons/di";
import Glow from '../hooks/Glow';

const Projects = () => {
    const projectList = [
        {
            title: "IoT Health Monitoring Ecosystem",
            category: "Full-Stack & Hardware",
            description: "An end-to-end architecture connecting ESP32 microcontrollers and MAX30102 sensors to a real-time React dashboard.",
            github: "#",
            link: "#",
            icon: <FiCpu />,
            techIcons: [<FaReact />, <FaNodeJs />, <FaMicrochip />, <SiTailwindcss />, <DiJavascript1 />, <SiExpress />]
        },
        {
            title: "Telecomm FPGA Application",
            category: "Digital Logic Design",
            description: "High-performance Finite State Machine (FSM) implementation using VHDL for signal processing applications.",
            github: "#",
            link: "#",
            icon: <FiLayers />,
            techIcons: [<FaMicrochip />, <FaPython />, <FaCss3 />, <FaHtml5 />, <FaJava />]
        },
        {
            title: "Enterprise Network Infrastructure",
            category: "Networking & Protocols",
            description: "Design and configuration of complex network topologies using Cisco CLI and secure protocol analysis.",
            github: "#",
            link: "#",
            icon: <FiGlobe />,
            techIcons: [<FiGlobe />, <DiMysql />, <DiPostgresql />, <FaPython />]
        }
    ];

    return (
        <section id="projects" className='relative min-h-screen py-24 px-6 flex flex-col items-center overflow-hidden'>
            {/* INLINE CSS - Forced visibility and animation */}
            <style>
                {`
                    @keyframes projectScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .project-animate {
                        display: flex;
                        width: max-content;
                        animation: projectScroll 15s linear infinite;
                    }
                    .project-carousel-container {
                        position: relative;
                        width: 100%;
                        overflow: hidden;
                        margin-top: 1.5rem;
                        padding: 10px 0;
                        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    }
                `}
            </style>

            <Glow />
            
            <div className='z-10 text-center mb-24'>
                <span className='text-blue-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block'>Selected Portfolio</span>
                <h2 className='text-white font-extrabold text-5xl md:text-7xl tracking-tighter'>
                    Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>Work.</span>
                </h2>
                <div className='mx-auto w-20 h-1 mt-6 bg-blue-600/50 rounded-full'></div>
            </div>

            <div className='z-10 max-w-6xl w-full flex flex-col gap-16'>
                {projectList.map((project, index) => (
                    <div key={index} className='group relative w-full'>
                        <div className='relative grid grid-cols-1 lg:grid-cols-12 items-center gap-10 p-8 md:p-14 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.05] hover:border-blue-500/30 transition-all duration-500 backdrop-blur-md'>
                            
                            {/* Icon Column */}
                            <div className='hidden lg:flex col-span-1 justify-center text-5xl text-blue-500/10 group-hover:text-blue-500 transition-colors'>
                                {project.icon}
                            </div>

                            {/* Content Column */}
                            <div className='lg:col-span-7 space-y-4'>
                                <div className='space-y-1'>
                                    <p className='text-blue-500 font-mono text-xs uppercase tracking-widest font-bold'>{project.category}</p>
                                    <h3 className='text-white text-3xl md:text-5xl font-bold tracking-tight'>
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <p className='text-gray-400 text-lg leading-relaxed'>
                                    {project.description}
                                </p>

                                {/* FIXED CAROUSEL: Now uses the techIcons array properly */}
                                <div className="project-carousel-container">
                                    <div className="project-animate">
                                        {[...project.techIcons, ...project.techIcons, ...project.techIcons].map((icon, i) => (
                                            <div key={i} className="mx-6 text-gray-500 text-3xl hover:text-blue-400 transition-colors">
                                                {icon}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Column */}
                            <div className='lg:col-span-4 flex lg:flex-col items-center lg:items-end justify-start gap-6'>
                                <a href={project.github} className='flex items-center gap-2 text-white/30 hover:text-white transition-all'>
                                    <span>Source Code</span>
                                    <FiGithub />
                                </a>
                                <a href={project.link} className='px-10 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:-rotate-1 active:scale-95'>
                                    Explore Case
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;