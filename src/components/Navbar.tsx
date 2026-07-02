import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full flex justify-between items-center transition-all duration-300 ease-in-out z-[1000] ${
          scrolled
            ? 'py-5 px-[5%] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10'
            : 'py-8 px-[5%] bg-transparent backdrop-blur-none border-b-0'
        }`}
      >
        <div className="text-2xl font-extrabold text-white tracking-[2px]">
          RS.
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-[30px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#ccc] hover:text-white text-[0.9rem] font-semibold uppercase tracking-[1px] transition-colors duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div 
          className="md:hidden block cursor-pointer z-[1001]" 
          onClick={() => setIsOpen(true)}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-[#0a0a0a] z-[1002] flex flex-col justify-center items-center border-l border-white/10"
          >
            {/* Close Button */}
            <div 
              onClick={() => setIsOpen(false)}
              className="absolute top-[25px] right-[5%] cursor-pointer"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col gap-10 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-purple-400 text-2xl font-semibold uppercase tracking-[2px] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
