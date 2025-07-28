'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  PaintBrushIcon,
  ChartBarIcon,
  CameraIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: PaintBrushIcon,
    title: 'Brand Strategy & Identity',
    description: 'Comprehensive brand development from concept to execution, creating distinctive identities that resonate with your target audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Positioning'],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Digital Experience Design',
    description: 'User-centric digital experiences that engage, convert, and delight. From websites to mobile apps, we craft interfaces that work beautifully.',
    features: ['Web Design', 'UI/UX Design', 'Mobile Apps', 'Prototyping'],
  },
  {
    icon: CameraIcon,
    title: 'Content Production',
    description: 'High-quality visual content creation with our in-house production studio. Photography, videography, and motion graphics that tell your story.',
    features: ['Photography', 'Videography', 'Motion Graphics', 'Animation'],
  },
  {
    icon: MegaphoneIcon,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that drive growth. From social media to performance marketing, we deliver measurable results.',
    features: ['Social Media', 'PPC Advertising', 'SEO Strategy', 'Content Marketing'],
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Strategy',
    description: 'Data-driven insights and strategic consulting to optimize your digital presence and maximize ROI across all touchpoints.',
    features: ['Performance Analytics', 'Strategic Consulting', 'Market Research', 'Growth Planning'],
  },
  {
    icon: CogIcon,
    title: 'Technical Solutions',
    description: 'Robust technical infrastructure and custom development solutions that scale with your business needs and goals.',
    features: ['Web Development', 'E-commerce', 'System Integration', 'Maintenance'],
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/30 rounded-full opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-50/30 rounded-full opacity-50"></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-display font-bold text-dark-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            360° Digital Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From strategic planning to creative execution, we provide comprehensive digital solutions 
            that transform your vision into compelling brand experiences.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-display font-semibold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-sm text-gray-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: (index * 0.1) + 0.5 }}
              >
                <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors group-hover:translate-x-1 transform duration-300 flex items-center">
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-8 text-lg">
            Ready to transform your digital presence?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}
