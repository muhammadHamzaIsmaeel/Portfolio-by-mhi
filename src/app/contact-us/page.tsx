'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  const [errors, setErrors] = useState<{
    firstName?: string;
    email?: string;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
      } else {
        setSubmitStatus({ success: false, message: data.message || 'Failed to send message' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contactus' className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Contact Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-violet-900/10 to-violet-800/10"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-yellow-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white mb-8 leading-relaxed"
          >
            Thank you for visiting my portfolio! If you have any questions, inquiries, or collaboration opportunities, I&apos;d love to hear from you. Feel free to reach out through any of these channels.
          </motion.p>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center"
            >
              <div className="p-3 rounded-full bg-violet-100 text-violet-700 mr-4">
                <FontAwesomeIcon icon={faPhone} className="text-lg" />
              </div>
              <div>
                <p className="text-sm text-white">Phone</p>
                <p className="text-white text-sm md:text-base font-medium">+92 315 2121984</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center"
            >
              <div className="p-3 rounded-full bg-violet-100 text-violet-700 mr-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              </div>
              <div>
                <p className="text-sm text-white">Email</p>
                <p className="text-white text-sm md:text-base font-medium">m.hamzashaikh6067@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center"
            >
              <div className="p-3 rounded-full bg-violet-100 text-violet-700 mr-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
              </div>
              <div>
                <p className="text-sm text-white">Location</p>
                <p className="text-white text-sm md:text-base font-medium">Karachi, Pakistan</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex space-x-4 pt-8"
          >
            <motion.a 
              whileHover={{ y: -3 }}
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.instagram.com/muhammad_hamza_ismail"
              className="p-2 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition-colors"
            >
              <Image src="/.icons/instagram.png" alt="Instagram" width={24} height={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.facebook.com/muhammad.hamza.ismail.2025"
              className="p-2 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition-colors"
            >
              <Image src="/.icons/facebook.png" alt="Facebook" width={24} height={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/muhammadhamzaismail"
              className="p-2 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition-colors"
            >
              <Image src="/.icons/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2 p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
          
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-900/30' : 'bg-red-900/30'}`}
            >
              {submitStatus.message}
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="first-name" className="block text-sm font-medium text-white mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-white/30 backdrop-blur-lg rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                    errors.firstName ? 'border-red-500 border' : ''
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="last-name" className="block text-sm font-medium text-white mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/30 backdrop-blur-lg rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-white/30 backdrop-blur-lg rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500 border' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/30 backdrop-blur-lg rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-white/30 backdrop-blur-lg rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                  errors.message ? 'border-red-500 border' : ''
                }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-violet-600 to-yellow-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}