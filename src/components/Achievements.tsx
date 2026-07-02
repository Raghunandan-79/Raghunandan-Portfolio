import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data';

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-fit justify-start">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Achievements</h2>
      </motion.div>
      
      <div className="flex flex-col gap-[30px]">
        {achievements.map((ach, index) => (
          <motion.div 
            key={index}
            className="card max-w-[800px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[1.3rem] mb-[15px] text-white">{ach.title}</h3>
            <p className="text-[#ccc] leading-relaxed">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
