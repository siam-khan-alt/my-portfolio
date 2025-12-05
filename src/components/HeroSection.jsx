'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
export default function HeroSection() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'back.out(1.7)',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: 'https://github.com/siam-khan-alt',
      color: '#6366F1',
    },
    {
      icon: <FaLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/siam-khan-sp99/',
      color: '#6366F1',
    },
    {
      icon: <FaEnvelope size={24} />,
      href: 'mailto:nssiam99@gmail.com',
      color: '#EC4899',
    },
    {
      icon: <FaFacebook size={24} />,
      href: 'https://www.facebook.com/profile.php?id=100078237812772',
      color: '#6366F1',
    },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#EC4899]/5"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center pb-5  relative z-10">
        <div className="text-center md:text-left space-y-6">
          <motion.h2
            className="hero-text text-[#EC4899] text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Hello, I am
          </motion.h2>

          <h1 className="hero-text text-5xl md:text-6xl font-bold">
            <span className="text-white">MD SIAM</span>
            <br />
            <span className="text-[#6366F1]">KHAN</span>
          </h1>

          <h3 className="hero-text text-2xl md:text-3xl text-gray-400">
            MERN Stack Developer
          </h3>

          <p className="hero-text text-xl text-[#EC4899] font-medium">
            Building Modern Web Experiences
          </p>

          <div className="hero-text flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="https://drive.google.com/file/d/1ROrM-vsxqB6anVHQJXF3jH-NIgD70l1w/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#6366F1] text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-[#6366F1]/50 hover:shadow-[#6366F1]/70 transition-all"
            >
              <HiDownload size={20} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-[#EC4899] text-[#EC4899] rounded-lg font-semibold hover:bg-[#EC4899]/10 transition-all"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="hero-text flex gap-4 justify-center md:justify-start pt-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-[#0f172a] rounded-full border border-gray-800 hover:border-[#6366F1] transition-all shadow-lg"
                style={{
                  boxShadow: `0 0 20px ${social.color}30`,
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            ref={imageRef}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#EC4899] rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src='https://i.ibb.co.com/Ng66dkCB/219357395.jpg'
              alt="MD SIAM KHAN"
              className="relative rounded-full w-72 h-72 md:h-80 md:w-80  lg:w-96 lg:h-96 object-cover border-4 border-[#6366F1] shadow-2xl shadow-[#6366F1]/50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}