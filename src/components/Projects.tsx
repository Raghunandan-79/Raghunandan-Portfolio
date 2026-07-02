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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl mb-2 text-white">{project.title}</h3>
            <h4 className="text-base text-neutral-400 mb-4 font-normal">{project.tech}</h4>
            <ul className="list-none">
              {project.points.map((point, i) => (
                <li key={i} className="card-list-item">{point}</li>
              ))}
            </ul>
            <div className="flex gap-2.5 flex-wrap mt-5">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn text-[0.8rem] py-2.5 px-5 !mt-0"
                >
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn bg-white text-black hover:bg-transparent hover:text-white text-[0.8rem] py-2.5 px-5 !mt-0"
                >
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
