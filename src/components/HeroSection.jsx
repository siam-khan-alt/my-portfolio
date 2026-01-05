'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook, Download, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/siam-khan-alt', color: '#6366f1' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/siam-khan-sp99/', color: '#6366f1' },
    { icon: Mail, href: 'mailto:nssiam99@gmail.com', color: '#ec4899' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100078237812772', color: '#6366f1' },
  ];

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        paddingTop: '6rem',
        position: 'relative',
        background: 'var(--bg-primary)',
        overflow: 'hidden'
      }}
    >
      {/* Background Abstract Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#6366f1] opacity-20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#ec4899] opacity-10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* LEFT SIDE: Image and Socials (Unique Shape) */}
        <motion.div 
          className="md:col-span-5 relative flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Vertical Socials Beside Image */}
          <div className="absolute left-[-20px] md:left-[-40px] flex flex-col gap-4 z-20">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.2, x: 10 }}
                style={{
                  padding: '0.6rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: social.color,
                }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Main Image Container (Irregular Shape) */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <motion.div
              animate={{
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 40%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 40%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                width: '100%',
                aspectRatio: '1/1.1',
                overflow: 'hidden',
                border: '6px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <img
                src="https://i.ibb.co.com/Ng66dkCB/219357395.jpg"
                alt="MD SIAM KHAN"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
            
            {/* Experience Badge Floating */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <div style={{ background: 'var(--accent-primary)', padding: '0.5rem', borderRadius: '10px' }}>
                <Sparkles size={20} color="white" />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>MERN Stack</p>
                <p style={{ fontWeight: 800, color: 'var(--text-primary)' }}>Developer</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Text Content */}
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
            <span style={{ width: '40px', height: '2px', background: 'var(--accent-primary)' }}></span>
            <span style={{ fontWeight: 700, letterSpacing: '2px', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              Full Stack Solutions
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
          }}>
            Building <span className="gradient-text">Scalable</span> <br />
            Digital Experiences
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '550px',
            lineHeight: 1.7,
          }}>
            Hi, I&apos;m <b style={{ color: 'var(--text-primary)' }}>MD SIAM KHAN</b>. I specialize in crafting high-performance 
            MERN stack applications with clean code and intuitive user interfaces.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <motion.a
              href="https://drive.google.com/file/d/1rLgA7_LjkotrET9ZwjUQK2GEO0NG-6hA/view?usp=sharing"
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1.1rem 2.5rem',
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <Download size={18} />
              Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1.1rem 2.5rem',
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '2px solid var(--border-color)',
                borderRadius: '50px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
              }}
            >
              Let&apos;s Talk
              <ArrowRight size={18} className="text-[#6366f1]" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}