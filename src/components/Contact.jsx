import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.75,
      delay: 0.2,
    },
  },
};

const logError = (message, error) => {
  console.error(`Error: ${message}`, error);
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        {
          from_name: form.name,
          to_name: 'Your Name',
          from_email: form.email,
          to_email: 'your@email.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });

    } catch (error) {
      logError('Error sending message via EmailJS', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden mt-20 px-4 md:px-10 lg:px-32 pb-20">

      {/* Foreground content */}
      <motion.div
        variants={slideInFromLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 mb-10 text-center md:text-left"
      >
        <p className="text-sm text-yellow-400 uppercase tracking-widest mb-2 mt-12">Get in Touch</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Contact</h2>
      </motion.div>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        variants={slideInFromLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto bg-[#1f1f2e] p-8 rounded-xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-white mb-1 text-sm">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 rounded-md bg-[#2c2c40] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-white mb-1 text-sm">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-[#2c2c40] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-white mb-1 text-sm">Your Message</label>
          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full p-3 rounded-md bg-[#2c2c40] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

    </section>
  );
};

export default Contact;
