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
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '20px', fontSize: '0.8rem', padding: '10px 20px' }}>
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section> 
  );
};

export default Projects;
