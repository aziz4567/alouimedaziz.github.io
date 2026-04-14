import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const email = "azizaloui987@gmail.com"; // Replace with your actual email

  return (
    <section id="contact" className='relative min-h-screen flex items-center justify-center bg-black text-white py-20 px-6 overflow-hidden'>
      
      {/* Background Decor */}
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none'></div>

      <div className='container mx-auto max-w-4xl z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-7xl font-black tracking-tighter mb-4'>
            LET'S <span className='text-blue-500'>TALK</span>
          </h2>
          <div className='mx-auto w-24 h-1.5 bg-blue-500 mb-8'></div>
          <p className='text-gray-400 font-mono text-sm tracking-[0.3em] uppercase'>Ready to bring ideas to life</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          
          {/* --- Gmail Card --- */}
          <a 
            href={`mailto:${email}`}
            className='group relative p-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden transition-all hover:border-blue-500/50 flex flex-col items-center text-center'
          >
            <div className='absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 group-hover:text-blue-500 transition-all'>
              <FaExternalLinkAlt size={16} />
            </div>

            <div className='mb-6 p-6 bg-blue-500/10 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500'>
              <SiGmail size={40} />
            </div>
            
            <h3 className='text-2xl font-bold mb-2'>Send an Email</h3>
            <p className='text-gray-400 mb-6'>Open your mail client and message me directly.</p>
            
            <span className='text-blue-400 font-mono font-bold tracking-wider'>
              {email}
            </span>
          </a>

          {/* --- Location/Info Card --- */}
          <div className='p-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl flex flex-col items-center text-center justify-center space-y-6'>
            <div className='flex flex-col items-center'>
              <div className='mb-4 p-4 bg-white/5 rounded-2xl text-gray-400'>
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className='text-xl font-bold'>Location</h3>
              <p className='text-gray-400'>Monastir, Tunisia</p>
            </div>

            <div className='w-full h-px bg-white/5'></div>

            <div className='flex flex-col items-center'>
              <div className='mb-4 p-4 bg-white/5 rounded-2xl text-gray-400'>
                <FaEnvelope size={24} />
              </div>
              <h3 className='text-xl font-bold'>Status</h3>
              <p className='text-blue-400 font-bold'>Available for Projects</p>
            </div>
          </div>

        </div>

        {/* Big CTA for mobile or quick access */}
        <div className='mt-12 text-center'>
            <a 
                href={`mailto:${email}`}
                className='inline-flex items-center gap-3 px-10 py-5 bg-blue-500 hover:bg-blue-600 text-black font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-95'
            >
                Launch Gmail <SiGmail size={20}/>
            </a>
        </div>
      </div>
    </section>
  )
}

export default Contact