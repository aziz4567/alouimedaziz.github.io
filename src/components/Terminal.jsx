import React from 'react';
import Typewriter from './Typewriter';

export default function Terminal() {
  return (
    <div className="w-full max-w-xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono">
      {/* Window Header */}
      <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Developer Console</div>
      </div>

      {/* Window Body */}
      <div className="p-6 text-sm md:text-base space-y-4">
        <div>
          <span className="text-emerald-400 font-bold">➜ </span>
          <span className="text-sky-400">~/portfolio</span>
          <span className="text-white/60"> $ </span>
          <span className="text-white">whoami</span>
        </div>

        <div className="text-white/90 leading-relaxed">
          <Typewriter 
            text="Aloui Med Aziz. Second-year IT Student & Full Stack Enthusiast." 
            delay={40} 
          />
        </div>

        <div>
          <span className="text-emerald-400 font-bold">➜ </span>
          <span className="text-sky-400">~/tech-stack</span>
          <span className="text-white/60"> $ </span>
          <span className="text-white">ls tools/</span>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-yellow-200/80">
          <span>React.js</span>
          <span>TailwindCSS</span>
          <span>JavaScript</span>
          <span>ESP32/IoT</span>
        </div>

        <div className="pt-2">
          <span className="text-emerald-400 animate-pulse">●</span>
          <span className="text-white/40 ml-2 text-xs italic">System ready for collaboration...</span>
        </div>
      </div>
    </div>
  );
}