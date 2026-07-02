import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data';

const Achievements = () => {
  return (
    <section id="achievements" style={{ minHeight: 'auto', justifyContent: 'flex-start' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Achievements</h2>
      </motion.div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {achievements.map((ach, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '800px' }}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#fff' }}>{ach.title}</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
