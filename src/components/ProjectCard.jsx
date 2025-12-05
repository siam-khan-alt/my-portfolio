'use client';

import { motion } from 'framer-motion';
import {  FaInfoCircle } from 'react-icons/fa';


export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#6366F1]/20 transition-all duration-300"
    >
      
      <div className=" h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          style={{ width: '100%', height: '100%' }}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        
        
      </div>
          
          
        

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white mb-1">
            {project.title}
          </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>


        <div className="pt-4">
          <motion.a
            href={`/projects/${project.id}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold rounded-lg shadow-lg shadow-[#6366F1]/50 hover:shadow-[#EC4899]/50 transition-all"
          >
            <FaInfoCircle size={18} /> 
            <span className="text-sm font-semibold">View Details</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}