import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false)

  // Navigation Links array to keep things clean
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className='fixed top-0 w-full z-[100] transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-white/5'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='flex justify-between items-center h-16 md:h-20'>
                {/* --- Logo --- */}
                <div className='flex items-center space-x-1 group cursor-pointer'>
                    <span className='text-xl md:text-2xl font-black tracking-tighter'>
                        <span className='text-white'><a href='#'>ALOU</a></span>
                        <span className='text-blue-500'>I</span>
                    </span>
                </div>

                {/* --- Desktop Links --- */}
                <div className='hidden md:flex items-center space-x-10'>
                    {navLinks.map((link) => (
                        <a 
                          key={link.name}
                          href={link.href} 
                          className='text-gray-400 hover:text-blue-400 text-sm font-bold uppercase tracking-widest transition-colors'
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* --- Mobile Menu Button --- */}
                <button 
                    className='md:hidden flex items-center p-2 text-gray-400 hover:text-white transition-colors' 
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {isOpen ? (
                        <IoCloseOutline size={28} />
                    ) : (
                        <CiMenuBurger size={24} />
                    )}
                </button>
            </div>
        </div>

        {/* --- Mobile Menu Overlay --- */}
        <div className={`
            md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
        `}>
            <div className='px-6 py-8 space-y-6 flex flex-col items-center'>
                {navLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.href} 
                      onClick={() => setOpen(false)} 
                      className='text-gray-300 hover:text-blue-500 text-lg font-bold uppercase tracking-[0.2em] transition-colors'
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar