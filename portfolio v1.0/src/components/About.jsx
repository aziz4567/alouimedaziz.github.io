import React, { useEffect, useRef } from 'react'
import Glow from '../hooks/Glow'
import { FaGitAlt, FaGithub, FaPython, FaJava, FaCss3, FaDocker, FaFileWord } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiCanva, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const About = () => {
    const db = ["MySQL", "MongoDB"];
    const tools = ["Git", "Docker", "VS Code", "Canva", "Word"];
    const frameworks = ["React", "Node.js", "Tailwind CSS", "Express.js"];
    const languages = ["JavaScript", "Python", "Java", "C", "PHP", "HTML", "CSS"];

    const carouselItems = [
        <FaGitAlt />, <VscVscode />, <FaGithub />, <DiMysql />, 
        <FaPython />, <FaJava />, <FaCss3 />, <SiExpress />, 
        <FaFileWord />, <RiNodejsLine />, <SiCanva />, 
        <FaDocker />, <IoLogoJavascript />
    ];

    // Intersection Observer for scroll animations
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const children = sectionRef.current.querySelectorAll('.reveal');
        children.forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className='relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden bg-black text-white'>
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        display: flex;
                        width: max-content;
                        animation: scroll 30s linear infinite;
                    }
                    .carousel-container {
                        position: relative;
                        width: 100%;
                        max-width: 1200px;
                        overflow: hidden;
                        margin-top: 5rem;
                        padding: 1.5rem 0;
                        mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                        -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    }
                    /* Scroll Animations */
                    .reveal {
                        opacity: 0;
                        transform: translateY(30px);
                        transition: all 0.8s ease-out;
                    }
                    .reveal-visible {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .delay-1 { transition-delay: 0.2s; }
                    .delay-2 { transition-delay: 0.4s; }
                `}
            </style>

            <Glow />
            
            <h2 className='reveal text-center mb-4 text-white font-bold text-4xl md:text-5xl tracking-tight z-10'>
                About Me
            </h2>
            <div className='reveal delay-1 mx-auto w-28 h-1 mb-12 bg-blue-500 z-10'></div>

            <div className='z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-start'>
                <div className='reveal delay-1 flex flex-col'>
                    <div className='w-full max-w-lg'> 
                        <div className='p-4 space-y-4'>
                            <p className='text-xl md:text-2xl leading-relaxed text-gray-300 font-light'>
                                I am an <span className='text-white font-semibold'>IoT and Full-Stack Developer</span> based in Tunisia.
                            </p>
                            <p className='text-lg text-gray-400 leading-relaxed'>
                                Currently pursuing my degree at <span className='text-blue-400'>ISIMM</span>, I specialize in building bridges between physical hardware and digital interfaces.
                            </p>
                        </div>

                        <div className='mt-8 px-4 pt-8 border-t border-gray-900'>
                            <div className='grid grid-cols-2 gap-x-8 md:gap-x-12'>
                                <div>
                                    <h3 className='text-white font-semibold text-lg mb-4'>Spoken Languages</h3>
                                    <div className='flex flex-col space-y-2'>
                                        <div className='flex justify-between border-b border-gray-900 pb-1'>
                                            <span className='text-gray-400 text-sm md:text-base'>Arabic</span>
                                            <span className='text-blue-400 text-sm md:text-base font-bold'>Native</span>
                                        </div>
                                        <div className='flex justify-between border-b border-gray-900 pb-1'>
                                            <span className='text-gray-400 text-sm md:text-base'>French</span>
                                            <span className='text-purple-400 text-sm md:text-base'>Intermediate</span>
                                        </div>
                                        <div className='flex justify-between border-b border-gray-900 pb-1'>
                                            <span className='text-gray-400 text-sm md:text-base'>English</span>
                                            <span className='text-purple-400 text-sm md:text-base'>Intermediate</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-white font-semibold text-lg mb-4'>Hobbies</h3>
                                    <ul className='space-y-3'>
                                        <li className='flex items-center gap-2 text-gray-400 text-sm md:text-base'>
                                            <div className='w-1.5 h-1.5 rounded-full bg-blue-500'></div> Gaming
                                        </li>
                                        <li className='flex items-center gap-2 text-gray-400 text-sm md:text-base'>
                                            <div className='w-1.5 h-1.5 rounded-full bg-blue-500'></div> Sports
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='reveal delay-2 flex flex-col'>
                    <h3 className='text-2xl font-bold text-white mb-6'>Tech Stack</h3>
                    <div className='grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10'>
                        <div>
                            <h4 className='text-blue-500 font-medium text-xl mb-3'>Languages</h4>
                            <div className='flex flex-col space-y-1'>
                                {languages.map((item, i) => <span key={i} className='text-gray-400 text-sm md:text-base'>{item}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className='text-blue-500 font-medium text-xl mb-3'>Frameworks</h4>
                            <div className='flex flex-col space-y-1'>
                                {frameworks.map((item, i) => <span key={i} className='text-gray-400 text-sm md:text-base'>{item}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className='text-blue-500 font-medium text-xl mb-3'>Tools</h4>
                            <div className='flex flex-col space-y-1'>
                                {tools.map((item, i) => <span key={i} className='text-gray-400 text-sm md:text-base'>{item}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className='text-blue-500 font-medium text-xl mb-3'>Databases</h4>
                            <div className='flex flex-col space-y-1'>
                                {db.map((item, i) => <span key={i} className='text-gray-400 text-sm md:text-base'>{item}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reveal delay-2 carousel-container z-10">
                <div className="animate-scroll">
                    {[...carouselItems, ...carouselItems].map((item, index) => (
                        <div key={index} className="mx-6 md:mx-12 text-gray-500 hover:text-white transition-colors duration-300 font-bold text-4xl md:text-5xl">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default About