'use client';

import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "BBA (Honours)",
    status: "2nd Year (Ongoing)",
    institution: "Kaliakair Govt. College",
    location: "Kaliakair, Gazipur",
    duration: "2023 – Present",
    icon: GraduationCap,
    priority: 'Current'
  },
  {
    id: 2,
    degree: "HSC, Science",
    status: "GPA: 4.50 (Completed)",
    institution: "Abdur Rahman Degree College",
    location: "Gafargaon, Mymensingh",
    duration: "2022",
    icon: School,
    priority: 'Major'
  }
];

function TimelineItem({ item, index }) {
  const Icon = item.icon;
  const isOngoing = item.priority === 'Current';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card"
      style={{
        padding: '2rem',
        borderRadius: '20px',
        cursor: 'pointer',
      }}
    >
      <p style={{
        fontSize: '0.9375rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: isOngoing ? 'var(--accent-secondary)' : 'var(--accent-primary)',
      }}>
        {item.duration}
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
        <Icon 
          size={28} 
          style={{ 
            color: isOngoing ? 'var(--accent-secondary)' : 'var(--accent-primary)',
            marginRight: '1rem',
          }} 
        />
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700,
          color: 'var(--text-primary)',
        }}>
          {item.degree}
        </h3>
      </div>
      
      <p style={{ 
        fontSize: '1.0625rem', 
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
      }}>
        {item.institution}
      </p>
      
      <p style={{
        fontSize: '0.9375rem',
        color: isOngoing ? 'var(--accent-secondary)' : 'var(--text-secondary)',
        marginBottom: '0.25rem',
      }}>
        {item.status}
      </p>
      
      <p style={{ 
        fontSize: '0.875rem',
        color: 'var(--text-tertiary)',
      }}>
        {item.location}
      </p>
    </motion.div>
  );
}

export default function EducationSection() {
  const filteredEducation = educationData.filter(item => item.priority !== 'Minor');

  return (
    <section 
      id="education" 
      style={{ 
        padding: '2rem',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            marginBottom: '1rem',
          }}>
            <span style={{ color: 'var(--text-primary)' }}>My</span>{' '}
            <span className="gradient-text">Education</span>
          </h2>
      
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}>
          {filteredEducation.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
        
        <p style={{ 
          textAlign: 'center',
          marginTop: '3rem',
          color: 'var(--text-tertiary)',
          fontSize: '0.875rem',
        }}>
          *Only major academic achievements are displayed above.
        </p>
      </div>
    </section>
  );
}