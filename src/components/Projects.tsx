import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Technical Projects</h2>
      </motion.div>
      
      <div className="grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <h4>{project.tech}</h4>
            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '0.8rem', padding: '10px 20px', margin: 0 }}>
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#fff', color: '#000', fontSize: '0.8rem', padding: '10px 20px', margin: 0 }}>
                  Live Link
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section> 
  );
};

export default Projects;
