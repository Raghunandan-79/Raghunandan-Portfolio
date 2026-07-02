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
      className="flex flex-col items-center justify-center w-[clamp(80px,12vw,110px)] h-[clamp(80px,12vw,110px)] bg-white/[0.03] border border-white/10 backdrop-blur-[10px] cursor-pointer transition-colors duration-300 shrink-0"
    >
      <i className={`${iconClass} text-[clamp(1.8rem,4vw,2.8rem)] mb-2 text-[#e9d5ff]`}></i>
      <span className="text-[clamp(0.55rem,1.5vw,0.75rem)] text-[#ccc] text-center font-medium">{name}</span>
    </motion.div>
  );
};

const MarqueeRow = ({ items, speed = 25 }: { items: string[]; speed?: number }) => {
  // Duplicate elements to ensure a seamless infinite scroll loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden flex w-full py-2.5 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] [webkit-mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
      <motion.div
        className="flex gap-5 shrink-0"
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
    <section id="skills" className="min-h-screen flex flex-col relative pb-[100px] justify-center bg-[radial-gradient(circle_at_top,#1a0b2e_0%,#0a0a0a_60%)]">
      {/* Background glowing orbs */}
      <div className="absolute top-[20%] left-[10%] w-[100px] h-[100px] bg-[#a855f7] blur-[80px] rounded-full z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[150px] h-[150px] bg-[#c084fc] blur-[100px] rounded-full z-0" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-[60px] z-10"
      >
        <h2 className="title border-l-0 pl-0 text-[3.5rem] text-white [text-shadow:0_0_20px_rgba(168,85,247,0.5)]">
          TECH STACK
        </h2>
      </motion.div>
      
      <div className="flex flex-col items-center gap-5 z-10 w-full max-w-full overflow-hidden">
        {/* Row 1 (scrolling leftwards at speed 30s) */}
        <MarqueeRow items={row1} speed={30} />
        
        {/* Row 2 (scrolling leftwards at speed 25s for visual offset) */}
        <MarqueeRow items={row2} speed={25} />
      </div>
    </section>
  );
};

export default Skills;
