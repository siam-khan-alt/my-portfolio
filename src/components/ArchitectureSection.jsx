'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Shield, Workflow } from 'lucide-react';

export default function ArchitectureSection() {
  const architectureItems = [
    { 
      icon: Code2, 
      title: 'API Design', 
      description: 'RESTful architecture with proper versioning and documentation',
      color: '#6366f1',
    },
    { 
      icon: Database, 
      title: 'Database Schema', 
      description: 'Normalized data models with efficient relationships',
      color: '#ec4899',
    },
    { 
      icon: Shield, 
      title: 'Authentication', 
      description: 'JWT-based secure authentication with refresh tokens',
      color: '#10b981',
    },
    { 
      icon: Workflow, 
      title: 'State Management', 
      description: 'Redux Toolkit for complex state orchestration',
      color: '#f59e0b',
    },
  ];

  return (
    <section style={{ padding: '2rem ' }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            marginBottom: '1rem',
          }}>
            <span className="gradient-text">Backend Architecture</span>
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1, #ec4899)',
            margin: '0 auto',
            borderRadius: '2px',
          }} />
          <p style={{ 
            color: 'var(--text-secondary)', 
            marginTop: '1.5rem',
            fontSize: '1.125rem',
          }}>
            Core backend principles and architectural patterns I implement
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
        }}>
          {architectureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                textAlign: 'center',
              }}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '90px',
                  height: '90px',
                  margin: '0 auto 1.5rem',
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 10px 40px ${item.color}40`,
                }}
              >
                <item.icon size={44} color="white" />
              </motion.div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                marginBottom: '0.75rem',
                color: 'var(--text-primary)',
              }}>
                {item.title}
              </h3>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}