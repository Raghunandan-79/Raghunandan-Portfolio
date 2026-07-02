import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const iconMapping: Record<string, string> = {
  "Docker": "devicon-docker-plain",
  "Kubernetes": "devicon-kubernetes-plain",
  "Ansible": "devicon-ansible-plain",
  "Jenkins": "devicon-jenkins-line",
  "Python": "devicon-python-plain",
  "Linux": "devicon-linux-plain",
  "MongoDB": "devicon-mongodb-plain",
  "Git": "devicon-git-plain",
  "GitHub": "devicon-github-original",
  "React": "devicon-react-original",
  "JavaScript": "devicon-javascript-plain",
  "TypeScript": "devicon-typescript-plain",
  "Java": "devicon-java-plain",
  "Go": "devicon-go-plain",
  "Vite": "devicon-vitejs-plain",
  "Redux Toolkit": "devicon-redux-original",
  "HTML": "devicon-html5-plain",
  "CSS": "devicon-css3-plain",
  "Tailwind CSS": "devicon-tailwindcss-original",
  "Node.js": "devicon-nodejs-plain",
  "Express.js": "devicon-express-original",
  "Scripting": "devicon-bash-plain",
  "ArgoCD": "devicon-argocd-plain",
  "Windows": "devicon-windows8-original"
};

const SkillCard = ({ name }: { name: string }) => {
  const iconClass = iconMapping[name] || "devicon-bash-plain";

  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'clamp(80px, 12vw, 110px)',
        height: 'clamp(80px, 12vw, 110px)',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease',
        flexShrink: 0
      }}
    >
      <i className={iconClass} style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '8px', color: '#e9d5ff' }}></i>
      <span style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.75rem)', color: '#ccc', textAlign: 'center', fontWeight: 500 }}>{name}</span>
    </motion.div>
  );
};

const MarqueeRow = ({ items, speed = 25 }: { items: string[]; speed?: number }) => {
  // Duplicate elements to ensure a seamless infinite scroll loop
  const duplicatedItems = [...items, ...items];

  return (
    <div style={{
      overflow: 'hidden',
      display: 'flex',
      width: '100%',
      maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
      padding: '10px 0'
    }}>
      <motion.div
        style={{
          display: 'flex',
          gap: '20px',
          flexShrink: 0
        }}
        animate={{
          x: [0, "-50%"]
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity
        }}
      >
        {duplicatedItems.map((name, index) => (
          <SkillCard key={index} name={name} />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const allSkills = useMemo(() => {
    return skills.flatMap(s => 
      s.items.split(',').map(item => item.trim())
    );
  }, []);

  // Split all skills into 2 balanced rows for the scrolling marquees
  const row1 = useMemo(() => allSkills.slice(0, Math.ceil(allSkills.length / 2)), [allSkills]);
  const row2 = useMemo(() => allSkills.slice(Math.ceil(allSkills.length / 2)), [allSkills]);

  return (
    <section id="skills" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'radial-gradient(circle at top, #1a0b2e 0%, #0a0a0a 60%)',
      position: 'relative',
      paddingBottom: '100px',
      justifyContent: 'center'
    }}>
      {/* Background glowing orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: '#a855f7',
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: '#c084fc',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px', zIndex: 1 }}
      >
        <h2 className="title" style={{ borderLeft: 'none', paddingLeft: 0, fontSize: '3.5rem', color: '#fff', textShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}>
          TECH STACK
        </h2>
      </motion.div>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: '20px',
        zIndex: 1,
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
        {/* Row 1 (scrolling leftwards at speed 30s) */}
        <MarqueeRow items={row1} speed={30} />
        
        {/* Row 2 (scrolling leftwards at speed 25s for visual offset) */}
        <MarqueeRow items={row2} speed={25} />
      </div>
    </section>
  );
};

export default Skills;
