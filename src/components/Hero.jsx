import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef();
  const glowRef = useRef();

  useGSAP(() => {
    // Initial entrance animations
    gsap.from('.gsap-reveal', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2
    });
    
    // Floating avatar animation
    gsap.to('.gsap-float', {
      y: -15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut'
    });

    // Purple mouse glow effect setup
    gsap.set(glowRef.current, { xPercent: -50, yPercent: -50 });
    
    // Using quickTo for optimized, highly responsive mouse tracking
    const xTo = gsap.quickTo(glowRef.current, "x", { duration: 0.8, ease: "power3" });
    const yTo = gsap.quickTo(glowRef.current, "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, { scope: container });

  return (
    <section id="hero" ref={container} style={{ position: 'relative' }}>
      {/* GSAP Purple Glowing Mouse Follower */}
      <div 
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)',
          borderRadius: '50%', // Necessary for radial gradient effect
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="grid" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div>
          <h1 className="gsap-reveal" style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1' }}>
            {personalInfo.name.toUpperCase()}
          </h1>
          <h2 className="gsap-reveal" style={{ fontSize: '1.5rem', color: '#a0a0a0', marginBottom: '2rem', fontWeight: 400 }}>
            {personalInfo.title.toUpperCase()}
          </h2>
          <p className="gsap-reveal" style={{ maxWidth: '600px', marginBottom: '2rem', color: '#ccc' }}>
            DevOps Engineer with experience in cybersecurity, container orchestration, CI/CD, and cloud infrastructure. Passionate about building robust, secure, and scalable systems.
          </p>
          <div className="gsap-reveal" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn">Get In Touch</a>
            <a href="https://drive.google.com/file/d/1Nj26KtY3wOsCBRGjlniMNW9xLrornPgy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#fff', color: '#000' }}>
              View Resume
            </a>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Avatar Image */}
          <div className="gsap-float" style={{ position: 'relative', width: '350px', height: '350px' }}>
            {/* Using a pseudo-element like border for styling instead of rounded corners */}
            <div style={{ 
              position: 'absolute', 
              top: '20px', left: '20px', 
              width: '100%', height: '100%', 
              border: '2px solid #fff',
              zIndex: 0
            }}></div>
            <img 
              src="/avatar.png" 
              alt="3D Avatar" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                position: 'relative', 
                zIndex: 1,
                border: '1px solid rgba(255,255,255,0.2)'
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
