'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/projectsData';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: ' 2rem',
        position: 'relative',
        background: 'var(--bg-primary)',
        overflow: 'visible',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            marginBottom: '1rem',
          }}>
            <span style={{ color: 'var(--text-primary)' }}>Featured</span>{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          
     

          <p style={{ 
            color: 'var(--text-secondary)', 
            marginTop: '1.5rem',
            fontSize: '1.125rem',
            maxWidth: '800px',
            margin: '1.5rem auto 0',
            lineHeight: 1.6
          }}>
            Showcasing modern web applications built with the MERN stack,
            featuring scalable architecture and exceptional user experiences.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem',
        }}>
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}