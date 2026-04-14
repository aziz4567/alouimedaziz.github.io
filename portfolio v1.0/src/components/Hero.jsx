import React from 'react'
import Glow from '../hooks/Glow'
import { FaGithub, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center bg-black text-white overflow-hidden'>
      {/* --- CSS ANIMATIONS --- */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
        `}
      </style>

      {/* Background Glow */}
      <div className='absolute inset-0 pointer-events-none'>
        <Glow />
      </div>

      <div className='container mx-auto px-6 lg:px-16 z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          
          {/* --- LEFT: Content Area --- */}
          <div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8'> 
            <div className='animate-fade-in opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest text-blue-400 font-bold'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
              </span>
              Available for work
            </div>

            <div className='animate-fade-in opacity-0 delay-1 space-y-4'>
              <h1 className='text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white'>
                Aloui<br />
                <span className='text-blue-500'>Med Aziz</span>
              </h1>
              <p className='text-gray-500 font-mono text-sm tracking-[0.3em]'>@alouimedaziz</p>
            </div>

            <p className='animate-fade-in opacity-0 delay-2 text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed'>
              IoT & Full-Stack Developer. <br className='hidden md:block'/>
              Building the bridge between <span className='text-white'>physical hardware</span> and <span className='text-white'>digital interfaces</span>.
            </p>

            <div className='animate-fade-in opacity-0 delay-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4'>
              <button className='px-8 py-4 bg-blue-500 hover:bg-blue-600 text-black font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/25 active:scale-95'>
                <a href="#projects">View Projects</a>
              </button>
              <button  className='px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-2xl transition-all backdrop-blur-md'>
                <a href="#contact">Get in touch</a>
              </button>
              <a 
                href="https://github.com/alouimedaziz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-500 hover:text-white transition-all transform hover:scale-110'
              >
                <FaGithub size={32} />
              </a>
            </div>
          </div>

          {/* --- RIGHT: 3D Dream Computer Setup --- */}
          <div className='animate-fade-in opacity-0 delay-2 flex-1 relative w-full flex justify-center lg:justify-end'>
            <div 
                className='animate-float relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] overflow-hidden'
                style={{
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)',
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)'
                }}
            >
              
              <div className='absolute flex items-center justify-center w-full h-full'>
                <iframe 
                  title="Dream Computer Setup"
                  /* ZOOM ADJUSTMENT: 
                    Increased scale to 0.65 to hide UI controls.
                    Adjusted top/left to -45% to push the watermark deeper into the hidden zone.
                  */
                  className='absolute w-[190%] h-[190%] top-[-45%] left-[-45%] pointer-events-auto border-none scale-[0.65]' 
                  allowFullScreen 
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/82f78bbaf2d34f01af854a52151dbf49/embed?autostart=1&preload=1&camera=0&ui_infos=0&ui_watermark=0&ui_stop=0&ui_help=0&ui_settings=0&transparent=1&scrollwheel=0&dnt=1"
                ></iframe>
              </div>

              {/* Light overlays */}
              <div className='absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-30'></div>
              <div className='absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-30'></div>
              
              {/* Bottom shield for branding */}
              <div className='absolute bottom-0 inset-x-0 h-24 z-20 pointer-events-auto cursor-default'></div>
            </div>
          </div>

        </div>
      </div>

      {/* --- SCROLL SECTION --- */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-4 z-20'>
          <div className='text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold animate-pulse text-center'>
             Scroll
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-[1px] h-10 bg-gradient-to-b from-blue-500 to-transparent'></div>
            <FaArrowDown size={14} className='text-blue-500 animate-bounce -mt-1' />
          </div>
      </div>
    </section>
  )
}

export default Hero