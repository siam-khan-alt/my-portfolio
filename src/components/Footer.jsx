'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook, Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isDark, toggleTheme } = useTheme();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/siam-khan-alt',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/siam-khan-sp99/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:nssiam99@gmail.com',
      label: 'Email',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=100078237812772',
      label: 'Facebook',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className='container' style={{
        margin: '0 auto',
        padding: '4rem 2rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          <div style={{ textAlign: 'center' }}>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: '2rem',
                fontWeight: 900,
                marginBottom: '1rem',
              }}
              className='flex flex-col justify-center items-center'
            > <img 
              src={isDark 
                ? "https://i.ibb.co.com/hxW76N6P/Gemini-Generated-Image-9zobna9zobna9zob.png" 
                : "https://i.ibb.co.com/SkX6jMk/Gemini-Generated-Image-rwzetrwzetrwzetr.png"
              } 
              alt="Logo" 
              className="h-16 w-16 object-cover rounded-xl"
            />
              <span className="gradient-text">SIAM KHAN</span>
            </motion.h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9375rem',
              lineHeight: 1.6,
            }}>
              MERN Stack Developer passionate about building modern, scalable
              web applications.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}>
              Quick Links
            </h4>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              gap: '1rem',
            }}>
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                  }}
                  className="hover:text-[var(--accent-primary)]"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}>
              Connect With Me
            </h4>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: '1rem',
            }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="magnetic-btn"
                  style={{
                    padding: '0.875rem',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
          }}>
            <p style={{ textAlign: 'center' }}>
              © {currentYear} MD SIAM KHAN. All rights reserved.
            </p>
            <p style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              textAlign: 'center',
            }}>
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} style={{ color: 'var(--accent-secondary)' }} fill="currentColor" />
              </motion.span>
              <span>and Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}