'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: 'https://github.com/siam-khan-alt',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/siam-khan-sp99/',
      label: 'LinkedIn',
    },
    {
      icon: <FaEnvelope size={20} />,
      href: 'mailto:nssiam99@gmail.com',
      label: 'Email',
    },
    {
      icon: <FaFacebook size={20} />,
      href: 'https://www.facebook.com/profile.php?id=100078237812772',
      label: 'Facebook',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6366F1]/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4"
            >
              <span className="text-[#6366F1]">SIAM</span>
              <span className="text-[#EC4899]">.</span>
            </motion.h3>
            <p className="text-gray-400 text-sm">
              MERN Stack Developer passionate about building modern web
              applications.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1, color: '#6366F1' }}
                  className="text-gray-400 hover:text-[#6366F1] transition-colors text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-[#020617] rounded-full border border-gray-700 hover:border-[#6366F1] transition-all shadow-lg hover:shadow-[#6366F1]/30"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <span>© {currentYear} MD SIAM KHAN. All rights reserved.</span>
            </p>
            <p className="flex items-center gap-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-[#EC4899]" />
              </motion.span>
              <span>and Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}