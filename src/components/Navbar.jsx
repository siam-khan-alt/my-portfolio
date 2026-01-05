'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card' : ''
      }`}
      style={{ padding: '1rem 2rem' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold flex gap-2 justify-center items-center cursor-pointer"
        ><img 
              src={isDark 
                ? "https://i.ibb.co.com/hxW76N6P/Gemini-Generated-Image-9zobna9zobna9zob.png" 
                : "https://i.ibb.co.com/SkX6jMk/Gemini-Generated-Image-rwzetrwzetrwzetr.png"
              } 
              alt="Logo" 
              className="h-10 w-10 object-cover rounded-xl"
            />
          <span className="gradient-text">SIAM KHAN</span>
          
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              style={{ 
                color: 'var(--text-secondary)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-4 rounded-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '1rem 1.5rem',
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--border-color)',
                  textDecoration: 'none',
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}