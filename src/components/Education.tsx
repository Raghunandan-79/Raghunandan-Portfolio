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
        className="card max-w-[800px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-start flex-wrap mb-4">
          <div>
            <h3 className="text-2xl mb-2.5 text-white">{education.institution}</h3>
            <h4 className="text-white font-semibold">{education.degree}</h4>
          </div>
          <div className="text-right">
            <p className="text-[#aaa] text-[0.9rem]">{education.period}</p>
            <p className="text-[#aaa] text-[0.9rem] mt-1.5">CGPA: {education.cgpa}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
