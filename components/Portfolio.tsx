'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { portfolioProjects } from '@/lib/mediaContent'

const categories = ['All', 'Branding', 'Web Design', 'Digital Campaign', 'E-commerce']

const portfolioItems = [
  {
    id: 1,
    title: 'TechFlow Startup',
    category: 'Branding',
    description: 'Complete brand identity and digital presence for a fintech startup',
    image: '/api/placeholder/800/600',
    tags: ['Brand Identity', 'Web Design', 'UI/UX'],
    results: {
      metric1: { label: 'Brand Recognition', value: '+150%' },
      metric2: { label: 'User Engagement', value: '+240%' },
      metric3: { label: 'Conversion Rate', value: '+85%' },
    }
  },
  {
    id: 2,
    title: 'EcoLife Campaign',
    category: 'Digital Campaign',
    description: 'Sustainable living awareness campaign with interactive experiences',
    image: '/api/placeholder/800/600',
    tags: ['Campaign', 'Social Media', 'Animation'],
    results: {
      metric1: { label: 'Reach', value: '2.5M+' },
      metric2: { label: 'Engagement', value: '+320%' },
      metric3: { label: 'Share Rate', value: '+180%' },
    }
  },
  {
    id: 3,
    title: 'Luxe Fashion Store',
    category: 'E-commerce',
    description: 'Premium e-commerce platform with immersive shopping experience',
    image: '/api/placeholder/800/600',
    tags: ['E-commerce', 'UI/UX', 'Photography'],
    results: {
      metric1: { label: 'Sales Growth', value: '+200%' },
      metric2: { label: 'Cart Conversion', value: '+120%' },
      metric3: { label: 'User Sessions', value: '+180%' },
    }
  },
  {
    id: 4,
    title: 'MindfulSpace App',
    category: 'Web Design',
    description: 'Meditation and wellness app with calming, intuitive interface',
    image: '/api/placeholder/800/600',
    tags: ['Mobile App', 'Wellness', 'Animation'],
    results: {
      metric1: { label: 'Downloads', value: '500K+' },
      metric2: { label: 'Daily Active Users', value: '+90%' },
      metric3: { label: 'User Retention', value: '85%' },
    }
  },
  {
    id: 5,
    title: 'Artisan Coffee Co.',
    category: 'Branding',
    description: 'Craft coffee brand identity with authentic storytelling approach',
    image: '/api/placeholder/800/600',
    tags: ['Brand Identity', 'Packaging', 'Photography'],
    results: {
      metric1: { label: 'Market Share', value: '+75%' },
      metric2: { label: 'Brand Awareness', value: '+160%' },
      metric3: { label: 'Customer Loyalty', value: '+95%' },
    }
  },
  {
    id: 6,
    title: 'Smart Home Hub',
    category: 'Web Design',
    description: 'IoT platform interface design with focus on usability and control',
    image: '/api/placeholder/800/600',
    tags: ['IoT', 'Dashboard', 'User Experience'],
    results: {
      metric1: { label: 'User Satisfaction', value: '4.8/5' },
      metric2: { label: 'Task Completion', value: '+140%' },
      metric3: { label: 'Error Reduction', value: '-70%' },
    }
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our latest work and see how we've helped brands transform their digital presence 
            through strategic creativity and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                onClick={() => setSelectedProject(item.id)}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-400/50 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="flex gap-4">
                        <motion.button
                          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <EyeIcon className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Ready to create something amazing together?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Start a Project Like This
          </button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content would go here */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-display font-bold text-dark-900">
                    {portfolioItems.find(item => item.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 text-lg">
                  Detailed case study content would be displayed here...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
