import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Experience</h2>
      </motion.div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '800px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '15px' }}>
              <div>
                <h3>{exp.company}</h3>
                <h4 style={{ color: '#fff', fontWeight: 600 }}>{exp.role}</h4>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{exp.location}</p>
                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{exp.period}</p>
              </div>
            </div>
            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
