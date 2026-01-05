'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        confirmButtonColor: '#6366f1',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again later.',
        icon: 'error',
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        confirmButtonColor: '#ec4899',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '2rem',
        position: 'relative',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            marginBottom: '1rem',
          }}>
            <span style={{ color: 'var(--text-primary)' }}>Get In</span>{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            marginTop: '1.5rem',
            fontSize: '1.125rem',
            maxWidth: '700px',
            margin: '1.5rem auto 0',
          }}>
            Have a project in mind or want to collaborate? Let's build something
            amazing together!
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                <div style={{
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}>
                    Phone Number
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    01881361160
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                <div style={{
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}>
                    Email
                  </h3>
                  <a
                    href="mailto:nssiam99@gmail.com"
                    style={{ 
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                    }}
                    className="hover:text-[var(--accent-primary)]"
                  >
                    nssiam99@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '1.5rem' }}>
                <div style={{
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <MapPin size={24} color="white" />
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}>
                    Location
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700,
                marginBottom: '1rem',
                color: 'var(--text-primary)',
              }}>
                Why Work With Me?
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Clean and maintainable code',
                  'Modern, responsive design',
                  'Fast delivery and communication',
                  'Scalable architecture',
                ].map((item, idx) => (
                  <li key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'start', 
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                  }}>
                    <span style={{ color: 'var(--accent-primary)', marginTop: '0.25rem' }}>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
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
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
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
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    minHeight: '180px',
                    padding: '1rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    resize: 'vertical',
                  }}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic-btn"
                style={{
                  width: '100%',
                  padding: '1.125rem',
                  background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
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