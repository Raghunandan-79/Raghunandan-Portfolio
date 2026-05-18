import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const iconMapping = {
  "Docker": "devicon-docker-plain",
  "Kubernetes": "devicon-kubernetes-plain",
  "Docker Compose": "devicon-docker-plain",
  "Ansible": "devicon-ansible-plain",
  "AWS": "devicon-amazonwebservices-plain-wordmark",
  "Terraform": "devicon-terraform-plain",
  "GitLab CI/CD": "devicon-gitlab-plain",
  "Jenkins": "devicon-jenkins-line",
  "Prometheus": "devicon-prometheus-original",
  "Grafana": "devicon-grafana-plain",
  "Bash Scripting": "devicon-bash-plain",
  "Python": "devicon-python-plain",
  "Linux": "devicon-linux-plain",
  "Nginx": "devicon-nginx-original",
  "Networking": "devicon-linux-plain",
  "MySQL": "devicon-mysql-plain",
  "MongoDB": "devicon-mongodb-plain",
  "PostgreSQL": "devicon-postgresql-plain",
  "Git": "devicon-git-plain",
  "GitHub": "devicon-github-original",
  "Nano": "devicon-bash-plain",
  "Postman": "devicon-postman-plain"
};

const SkillCard = ({ name }) => {
  const iconClass = iconMapping[name] || "devicon-bash-plain";

  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'clamp(45px, 12vw, 90px)',
        height: 'clamp(45px, 12vw, 90px)',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease'
      }}
    >
      <i className={iconClass} style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '8px', color: '#e9d5ff' }}></i>
      <span style={{ fontSize: 'clamp(0.45rem, 1.5vw, 0.65rem)', color: '#ccc', textAlign: 'center' }}>{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  // Flatten all skills to individual items (exactly 21)
  const allSkills = useMemo(() => {
    return skills.flatMap(s => 
      s.items.split(',').map(item => item.trim())
    );
  }, []);

  // Split into rows for the inverted triangle: 6, 5, 4, 3, 2, 1
  const rowCounts = [6, 5, 4, 3, 2, 1];
  const rows = [];
  let startIndex = 0;
  
  for (let count of rowCounts) {
    rows.push(allSkills.slice(startIndex, startIndex + count));
    startIndex += count;
  }

  return (
    <section id="skills" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'radial-gradient(circle at top, #1a0b2e 0%, #0a0a0a 60%)',
      position: 'relative',
      paddingBottom: '100px'
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
        borderRadius: '50%', // Ok for background blur
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
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: '15px',
        zIndex: 1
      }}>
        {rows.map((rowSkills, rowIndex) => (
          <motion.div 
            key={rowIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            style={{ display: 'flex', gap: 'clamp(5px, 2vw, 15px)', justifyContent: 'center', flexWrap: 'nowrap' }}
          >
            {rowSkills.map((skillName, index) => (
              <SkillCard key={index} name={skillName} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
