'use client';

import { motion } from 'framer-motion';
import { Database, Server, Code2, Zap, CheckCircle2 } from 'lucide-react';

export default function MERNStackSection() {
  const stackItems = [
    {
      name: 'MongoDB',
      icon: Database,
      color: '#47A248',
      description: 'NoSQL Database',
      features: ['Aggregation Pipeline', 'Mongoose Modeling', 'Performance Tuning'],
      detail: 'Expertise in building scalable database architectures and complex query optimization.',
    },
    {
      name: 'Express.js',
      icon: Server,
      color: '#ffffff',
      description: 'Backend Framework',
      features: ['Middleware Design', 'JWT Auth', 'API Security'],
      detail: 'Crafting robust server-side logic and modular middleware architecture.',
    },
    {
      name: 'React.js',
      icon: Code2,
      color: '#61DAFB',
      description: 'Frontend Library',
      features: ['Next.js / SSR', 'State Management', 'Framer Motion'],
      detail: 'Building dynamic, high-performance UIs with modern component patterns.',
    },
    {
      name: 'Node.js',
      icon: Zap,
      color: '#339933',
      description: 'Runtime Environment',
      features: ['Event-Driven Arch', 'NPM Package Dev', 'Worker Threads'],
      detail: 'Developing fast, scalable network applications and system integrations.',
    },
  ];

  return (
    <section id="skills" style={{ padding: '0rem 2rem 2rem 2rem', background: 'var(--bg-secondary)' }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>
            <span style={{ color: 'var(--text-primary)' }}>Technical</span>{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', fontSize: '1.125rem' }}>
            A deep dive into the core technologies I use to build production-ready applications.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}>
          {stackItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: '32px',
                border: '1px solid var(--border-color)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '1rem',
                  background: `${item.color}15`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <item.icon size={32} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.name}</h3>
                  <span style={{ fontSize: '0.875rem', color: item.color, fontWeight: 600 }}>{item.description}</span>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {item.detail}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {item.features.map((feature) => (
                  <div key={feature} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                  }}>
                    <CheckCircle2 size={14} style={{ color: item.color }} />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}