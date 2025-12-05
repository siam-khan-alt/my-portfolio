'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'MD SIAM KHAN',
        },
        EMAILJS_USER_ID
      );

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        background: '#0f172a',
        color: '#e2e8f0',
        confirmButtonColor: '#6366F1',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again later.',
        icon: 'error',
        background: '#0f172a',
        color: '#e2e8f0',
        confirmButtonColor: '#EC4899',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-10 md:py-14 lg:py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="contact-title text-center mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>{' '}
            <span className="text-[#6366F1]">Touch</span>
          </h2>
          <div className="w-60 md:w-72 lg:w-80 h-1 bg-gradient-to-r from-[#6366F1] to-[#EC4899] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6366F1]/10 rounded-lg">
                  <FaPhone size={24} className="text-[#6366F1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone Number</h3>
                  <p
                    
                    className="text-gray-400 hover:text-[#6366F1] transition-colors"
                  >
                    01881361160
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6366F1]/10 rounded-lg">
                  <FaEnvelope size={24} className="text-[#6366F1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a
                    href="mailto:nssiam99@gmail.com"
                    className="text-gray-400 hover:text-[#6366F1] transition-colors"
                  >
                    nssiam99@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EC4899]/10 rounded-lg">
                  <FaMapMarkerAlt size={24} className="text-[#EC4899]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Why Work With Me?
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#6366F1] mt-1">▹</span>
                  <span>Clean and maintainable code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6366F1] mt-1">▹</span>
                  <span>Responsive and modern design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6366F1] mt-1">▹</span>
                  <span>Fast delivery and communication</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0f172a]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-xl space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#020617] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#020617] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-28
                      md:h-[222px] px-4 py-3 bg-[#020617] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#6366F1] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white font-semibold rounded-lg shadow-lg shadow-[#6366F1]/50 hover:shadow-[#EC4899]/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}