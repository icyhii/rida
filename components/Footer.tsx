'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

const socialPlatforms = ['Twitter', 'LinkedIn', 'Instagram', 'Dribbble']
const services = [
  'Brand Strategy',
  'Web Design',
  'Digital Marketing',
  'Content Production',
  'Analytics & Strategy'
]

const Footer = memo(function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Rida Digital
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Your creative and strategic partner, translating innovative ideas into tangible, 
                long-term brand assets that drive growth and inspire audiences.
              </p>
            </motion.div>
            
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-10%" }}
            >
              {socialPlatforms.map((social) => (
                <motion.button
                  key={social}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors will-change-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  {social.charAt(0)}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                123 Creative Street<br />
                San Francisco, CA 94107
              </p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-400">hello@ridadigital.com</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Rida Digital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
})

export default Footer
