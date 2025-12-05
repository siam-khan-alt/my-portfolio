'use client';

import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    degree: "BBA (Honours)",
    status: "2nd Year (Ongoing)",
    institution: "Kaliakair Govt. College",
    location: "Kaliakair, Gazipur",
    duration: "2023 – Present",
    icon: FaGraduationCap,
    priority: 'Current'
  },
  {
    id: 2,
    degree: "HSC, Science",
    status: "GPA: 4.50 (Completed)",
    institution: "Abdur Rahman Degree College",
    location: "Gafargaon, Mymensingh",
    duration: "2022",
    icon: FaSchool,
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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-8 w-full"
    >
      <div className="bg-[#0f172a]/70 border border-gray-800 p-6 rounded-xl shadow-xl hover:border-[#6366F1] transition-all">
          
        <p 
          className={`text-sm font-semibold mb-3 ${isOngoing ? 'text-[#EC4899]' : 'text-[#6366F1]'}`}
        >
          {item.duration}
        </p>
        
        <div className="flex items-center mb-2">
          <Icon className={`text-2xl mr-3 ${isOngoing ? 'text-[#EC4899]' : 'text-[#6366F1]'}`} />
          <h3 className="text-xl font-extrabold text-white">{item.degree}</h3>
        </div>
        
        <p className="text-md font-bold text-gray-300 mb-1">{item.institution}</p>
        <p className={`text-sm ${isOngoing ? 'text-[#EC4899]' : 'text-gray-400'}`}>{item.status}</p>
        <p className="text-xs text-gray-500 mt-1">{item.location}</p>
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  const filteredEducation = educationData.filter(item => item.priority !== 'Minor');

  return (
    <section id="education" className="py-10 md:py-14 lg:py-20 bg-[#0f172a] text-gray-300 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto"> 

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My</span>{' '}
            <span className="text-[#6366F1]">Education</span>
          </h2>
          <div className="w-60 md:w-72 lg:w-80 h-1 bg-gradient-to-r from-[#6366F1] to-[#EC4899] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEducation.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
        
        <p className="text-center mt-10 text-gray-500">
            *Only major academic achievements are displayed above.
        </p>

      </div>
    </section>
  );
}