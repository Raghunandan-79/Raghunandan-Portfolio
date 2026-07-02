import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';

const Education = () => {
  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Education</h2>
      </motion.div>
      
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '800px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '15px' }}>
          <div>
            <h3>{education.institution}</h3>
            <h4 style={{ color: '#fff', fontWeight: 600 }}>{education.degree}</h4>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{education.period}</p>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '5px' }}>CGPA: {education.cgpa}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
