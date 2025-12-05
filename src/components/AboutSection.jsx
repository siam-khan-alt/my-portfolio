"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

export default function AboutSection() {
  const sectionRef = useRef(null);

  const skills = [
    {
      name: "React.js",
      icon: <FaReact size={48} />,
      color: "#61DAFB",
      level: 85,
      description: "Advanced",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={48} />,
      color: "#ffffff",
      level: 40,
      description: "Learning",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={48} />,
      color: "#339933",
      level: 75,
      description: "Proficient",
    },
    {
      name: "Express.js",
      icon: <SiExpress size={48} />,
      color: "#ffffff",
      level: 70,
      description: "Proficient",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={48} />,
      color: "#47A248",
      level: 50,
      description: "Expert",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={48} />,
      color: "#06B6D4",
      level: 90,
      description: "Expert",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-10 md:py-14 lg:py-20 px-4 relative overflow-hidden"
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
            <span className="text-white">About</span>{" "}
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
            <article className="text-gray-300 text-base leading-relaxed space-y-8">
              {/* Section 1: The Programming Journey */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#6366F1] border-b border-gray-700 pb-1">
                  🚀 The Programming Journey
                </h3>
                <p>
                  My initial spark for programming came from a restless drive to
                  find a pursuit that would continuously challenge my mind,
                  sharpen my problem-solving skills, and offer a path to
                  creation and professional growth. My journey began with an
                  early interest in technology, leading me to complete a
                  **6-month Office Applications Course** where I earned an A+
                  grade. My professional development journey truly took off with
                  **Programming Hero**, where I am currently focused on
                  mastering the **MERN stack**, eager to build modern, scalable
                  web applications.
                </p>
              </div>

              {/* Section 2: The Work I Enjoy and My Personality */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#6366F1] border-b border-gray-700 pb-1">
                  🧠 Work Ethic and Personality
                </h3>
                <p>
                  I find the most satisfaction in work that seamlessly blends
                  logic and exceptional user experience. My core passion lies in
                  **identifying complex problems and crafting elegant,
                  functional solutions**. As a person, I am characterized by a
                  **calm and composed demeanor**. I make every effort to remain
                  balanced and avoid making rash decisions, successfully
                  managing to stay calm in challenging situations nearly 95% of
                  the time. This composed nature directly translates to my code:
                  it allows me to stay focused and detail-oriented, ensuring
                  clean and maintainable solutions.
                </p>
              </div>

              {/* Section 3: Beyond the Code (Hobbies and Balance) */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#6366F1] border-b border-gray-700 pb-1">
                  🧘‍♂️ Beyond the Code
                </h3>
                <p>
                  While coding is my professional focus, I believe in
                  maintaining a strong life balance. Away from the screen, I
                  truly enjoy **long-distance walking**, especially in natural
                  settings, as it clears my mind and sharpens my perspective.
                  Spending quality time with loved ones and exploring new places
                  rejuvenates my creativity. What started as a technical
                  aspiration, programming itself has evolved into a dedicated
                  **passion and hobby**. As a practicing Muslim, I strive to
                  bring integrity, dedication, and balance into my daily life
                  and professional commitments.
                </p>
              </div>
            </article>
          </motion.div>
        </div>
        <motion.div
          className="about-title text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My</span>{" "}
            <span className="text-[#6366F1]">Skills</span>
          </h2>
          <div className="w-60 md:w-72 lg:w-80 h-1 bg-gradient-to-r from-[#6366F1] to-[#EC4899] mx-auto rounded-full"></div>
        </motion.div>

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
