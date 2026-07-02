import { useRef } from 'react';
import { personalInfo } from '../data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

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

    if (!glowRef.current) return;

    // Purple mouse glow effect setup
    gsap.set(glowRef.current, { xPercent: -50, yPercent: -50 });
    
    // Using quickTo for optimized, highly responsive mouse tracking
    const xTo = gsap.quickTo(glowRef.current, "x", { duration: 0.8, ease: "power3" });
    const yTo = gsap.quickTo(glowRef.current, "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, { scope: container });

  return (
    <section id="hero" ref={container} className="relative min-h-screen justify-center">
      {/* GSAP Purple Glowing Mouse Follower */}
      <div 
        ref={glowRef}
        className="mouse-glow hidden md:block fixed top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(168,85,247,0.4)_0%,rgba(168,85,247,0)_70%)] rounded-full pointer-events-none z-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <h1 className="gsap-reveal text-[clamp(2.5rem,8vw,4rem)] mb-4 leading-[1.1]">
            {personalInfo.name.toUpperCase()}
          </h1>
          <h2 className="gsap-reveal text-2xl text-[#a0a0a0] mb-8 font-normal">
            {personalInfo.title.toUpperCase()}
          </h2>
          <p className="gsap-reveal max-w-150 mb-8 text-[#ccc]">
            Full Stack Developer with a strong focus on backend engineering and DevOps, building scalable APIs, secure cloud infrastructure, container orchestration, and CI/CD pipelines. Comfortable across the stack, with solid frontend development experience to deliver complete, end-to-end products.
          </p>
          <div className="gsap-reveal flex gap-3.75 flex-wrap">
            <a href="#contact" className="btn">Get In Touch</a>
            <a 
              href="https://drive.google.com/file/d/1Nj26KtY3wOsCBRGjlniMNW9xLrornPgy/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              View Resume
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          {/* Avatar Image */}
          <div className="gsap-float relative w-full max-w-75 aspect-square">
            <div className="absolute top-3.75 left-3.75 w-full h-full border-2 border-white/50 z-0 pointer-events-none"></div>
            <img 
              src="/avatar.png" 
              alt="3D Avatar" 
              className="w-full h-full object-cover relative z-10 border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
