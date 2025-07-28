'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { studioImages } from '@/lib/mediaContent'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const studioProcess = [
  { step: '01', title: 'Concept', description: 'Creative ideation and strategic planning' },
  { step: '02', title: 'Production', description: 'Professional filming and photography' },
  { step: '03', title: 'Post-Production', description: 'Editing, color grading, and effects' },
  { step: '04', title: 'Delivery', description: 'Final assets optimized for all platforms' },
]

export default function Studio() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const section = sectionRef.current
    const video = videoRef.current

    if (!section || !video) return

    // Scroll-triggered video animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        pin: false,
      }
    })

    tl.fromTo(video, 
      { scale: 0.8, opacity: 0.6 },
      { scale: 1, opacity: 1, duration: 1 }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="studio" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="container-custom" ref={ref}>
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
            Our <span className="text-gradient">Production Studio</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            State-of-the-art in-house production facility where creative visions come to life through 
            professional photography, videography, and motion graphics.
          </motion.p>
        </motion.div>

        {/* Main Video/Animation Area */}
        <motion.div
          ref={videoRef}
          className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="aspect-video bg-gradient-to-br from-primary-900 to-dark-900 flex items-center justify-center">
            {/* Placeholder for scroll-triggered animation */}
            <div className="text-center text-white">
              <motion.div
                className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </motion.div>
              <p className="text-xl font-medium">Interactive Studio Experience</p>
              <p className="text-white/70">Scroll to explore our production process</p>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {studioProcess.map((process, index) => (
            <motion.div
              key={process.step}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
            >
              <motion.div
                className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-2xl font-bold text-primary-600 group-hover:text-white transition-colors duration-300">
                  {process.step}
                </span>
              </motion.div>
              <h3 className="text-xl font-display font-semibold text-dark-900 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Studio Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="text-3xl font-display font-bold text-dark-900 mb-6">
              Professional Equipment & Expertise
            </h3>
            <div className="space-y-4">
              {[
                'Professional cameras and lighting equipment',
                'Dedicated photography and video studio space',
                'Advanced editing and post-production suites',
                'Motion graphics and animation capabilities',
                'Experienced creative directors and technicians',
                'Full-service production from concept to delivery'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="space-y-4">
              <img
                src="/api/placeholder/300/200"
                alt="Studio Equipment"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img
                src="/api/placeholder/300/250"
                alt="Photography Setup"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="/api/placeholder/300/250"
                alt="Video Production"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src="/api/placeholder/300/200"
                alt="Editing Suite"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
