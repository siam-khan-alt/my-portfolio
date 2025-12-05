'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';

export default function AboutSection() {
  const sectionRef = useRef(null);

  const skills = [
    {
      name: 'React.js',
      icon: <FaReact size={48} />,
      color: '#61DAFB',
      level: 70,
      description: 'Expert',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={48} />,
      color: '#ffffff',
      level: 30,
      description: 'Proficient',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs size={48} />,
      color: '#339933',
      level: 65,
      description: 'Proficient',
    },
    {
      name: 'Express.js',
      icon: <SiExpress size={48} />,
      color: '#ffffff',
      level: 50,
      description: 'Proficient',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb size={48} />,
      color: '#47A248',
      level: 50,
      description: 'Expert',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={48} />,
      color: '#06B6D4',
      level: 75,
      description: 'Expert',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="about-title text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span>{' '}
            <span className="text-[#6366F1]">Me</span>
          </h2>
          <div className="w-60 md:w-72 lg:w-80 h-1 bg-gradient-to-r from-[#6366F1] to-[#EC4899] mx-auto rounded-full"></div>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 shadow-2xl shadow-[#6366F1]/10"
          >
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              I am a passionate MERN Stack Developer with a strong focus on
              React.js. I love building modern, scalable web applications that
              provide seamless user experiences. My expertise includes creating
              dynamic frontends with React and Next.js, developing robust
              backends with Node.js and Express, and managing databases with
              MongoDB. I am constantly learning and exploring new technologies
              to enhance my skills.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#6366F1]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ color: skill.color }}
                  className="mb-2"
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white">{skill.name}</h3>

                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#EC4899]"
                  ></motion.div>
                </div>

                <div className="flex justify-between w-full text-sm">
                  <span className="text-gray-400">{skill.description}</span>
                  <span className="text-[#6366F1] font-semibold">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}