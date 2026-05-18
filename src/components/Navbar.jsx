import React, { useState, useEffect } from 'react';
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
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: scrolled ? '15px 5%' : '25px 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          zIndex: 1000,
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', letterSpacing: '2px' }}>
          <img style={{width: '50px', height: '50px'}} src="./public/avatar.png" alt="Avatar" />
        </div>
        
        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '30px' }} className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#ccc',
                fontSize: '0.9rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = '#ccc'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(true)}
          style={{ cursor: 'pointer', zIndex: 1001 }}
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
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: '#0a0a0a',
              zIndex: 1002,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeft: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {/* Close Button */}
            <div 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '25px',
                right: '5%',
                cursor: 'pointer'
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>

            {/* Sidebar Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'center' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}
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
