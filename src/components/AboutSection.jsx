'use client';

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { Rocket, Brain, Activity, Target } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef(null);

  const skills = [
    {
      name: "React.js",
      icon: <FaReact size={48} />,
      color: "#61DAFB",
      tag: "Advanced Library",
      description: "Building reactive and modular UI components.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={48} />,
      color: "#ffffff",
      tag: "Production Framework",
      description: "SSR, ISR, and optimized performance.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={48} />,
      color: "#339933",
      tag: "Runtime Environment",
      description: "Scalable backend architecture.",
    },
    {
      name: "Express.js",
      icon: <SiExpress size={48} />,
      color: "#ffffff",
      tag: "Backend Framework",
      description: "Efficient RESTful API development.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={48} />,
      color: "#47A248",
      tag: "NoSQL Database",
      description: "Schema design and data aggregation.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={48} />,
      color: "#06B6D4",
      tag: "Styling Engine",
      description: "Rapid UI development with utility classes.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ 
        padding: '2rem',
        background: 'var(--bg-secondary)',
        position: 'relative',
      }}
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-primary)' }}>About</span>{" "}
            <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div style={{ marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card"
            style={{ padding: '3rem', borderRadius: '32px' }}
          >
            <article style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.8 }}>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Rocket style={{ color: 'var(--accent-primary)' }} size={28} />
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    The Programming Journey
                  </h3>
                </div>
                <p>
                  My professional development journey truly took off with Programming Hero, 
                  where I am currently focused on mastering the MERN stack. I earned an A+ 
                  in Office Applications, which set the foundation for my detail-oriented approach 
                  to building modern, scalable web applications.
                </p>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Brain style={{ color: 'var(--accent-primary)' }} size={28} />
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Work Ethic and Personality
                  </h3>
                </div>
                <p>
                  I thrive on solving complex problems with elegant, functional solutions. 
                  Characterized by a composed nature, I maintain balance in challenging 
                  situations, ensuring my code remains clean, maintainable, and highly focused 
                  on the user experience.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Activity style={{ color: 'var(--accent-primary)' }} size={28} />
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Beyond the Code
                  </h3>
                </div>
                <p>
                  As a practicing Muslim, I bring integrity and dedication to my commitments. 
                  Outside of coding, I enjoy long-distance walking in nature to sharpen my 
                  perspective and rejuvenate my creativity, always striving for a healthy life-work balance.
                </p>
              </div>

            </article>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900 }}>
            <span style={{ color: 'var(--text-primary)' }}>Technical</span>{" "}
            <span className="gradient-text">Proficiency</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              style={{ padding: '2rem', borderRadius: '24px', cursor: 'pointer', border: '1px solid var(--border-color)' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ color: skill.color }}>{skill.icon}</div>
                  <span style={{ 
                    padding: '4px 12px', 
                    borderRadius: '100px', 
                    fontSize: '0.75rem', 
                    background: `${skill.color}15`, 
                    color: skill.color,
                    border: `1px solid ${skill.color}30`,
                    fontWeight: 600 
                  }}>
                    {skill.tag}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {skill.name}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.5 }}>
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}