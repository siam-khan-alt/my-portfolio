'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#6366F1]/20 transition-all duration-300"
    >
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          style={{ width: '100%', height: '100%' }}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent opacity-80"></div>
        
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-2xl font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-[#EC4899]">{project.tagline}</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-semibold bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0f172a] border border-gray-700 text-white rounded-lg hover:border-[#6366F1] hover:shadow-lg hover:shadow-[#6366F1]/30 transition-all"
          >
            <FaGithub size={18} />
            <span className="text-sm font-semibold">Code</span>
          </motion.a>

          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white rounded-lg shadow-lg shadow-[#6366F1]/50 hover:shadow-[#EC4899]/50 transition-all"
          >
            <FaExternalLinkAlt size={16} />
            <span className="text-sm font-semibold">Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}