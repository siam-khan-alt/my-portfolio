'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="glass-card"
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <div style={{ 
        height: '220px', 
        overflow: 'hidden',
        position: 'relative',
      }}>
        <motion.img
          src={project.imageUrl}
          alt={project.imageAlt}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
          opacity: 0.7,
        }} />
      </div>

      <div style={{ padding: '2rem' }}>
        <h3 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 700,
          marginBottom: '0.75rem',
          color: 'var(--text-primary)',
        }}>
          {project.title}
        </h3>
        
        <p style={{ 
          fontSize: '0.875rem',
          color: 'var(--accent-secondary)',
          marginBottom: '1rem',
          fontWeight: 600,
        }}>
          {project.tagline}
        </p>

        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.9375rem',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
        }}>
          {project.description}
        </p>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}>
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              style={{
                padding: '0.375rem 0.875rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                background: 'var(--bg-tertiary)',
                color: 'var(--accent-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={`/projects/${project.id}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="magnetic-btn"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.875rem 1.5rem',
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            color: 'white',
            borderRadius: '12px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.9375rem',
          }}
        >
          <ExternalLink size={18} />
          View Details
        </motion.a>
      </div>
    </motion.div>
  );
}