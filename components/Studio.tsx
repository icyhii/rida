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
    <section id="studio" ref={sectionRef} className="section-padding relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-50/30 rounded-full opacity-40"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-100/40 rounded-full opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100/20 rounded-full opacity-50"></div>
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
            className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-primary-600">Production Studio</span>
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
          className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
            {/* Background image overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${studioImages.videoPlaceholder})` }}
            ></div>
            
            {/* Content overlay */}
            <div className="text-center text-white relative z-10">
              <motion.div
                className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </motion.div>
              <p className="text-xl font-medium mb-2">Interactive Studio Experience</p>
              <p className="text-white/80">Scroll to explore our production process</p>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {studioProcess.map((process, index) => (
            <motion.div
              key={process.step}
              className="text-center group p-6 rounded-2xl bg-white/80 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-200/50 hover:border-primary-200/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 transition-all duration-300 shadow-md border border-primary-100 group-hover:border-primary-200 group-hover:shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-2xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </span>
              </motion.div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Professional Equipment & Expertise
            </h3>
            <div className="space-y-4 mb-8">
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
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.button
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book Studio Session
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="space-y-4">
              <motion.img
                src={studioImages.workspace[0]}
                alt="Studio Equipment"
                className="w-full h-40 object-cover rounded-2xl shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={studioImages.equipment[0]}
                alt="Photography Setup"
                className="w-full h-48 object-cover rounded-2xl shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="space-y-4 mt-8">
              <motion.img
                src={studioImages.workspace[1]}
                alt="Video Production"
                className="w-full h-48 object-cover rounded-2xl shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={studioImages.equipment[1]}
                alt="Editing Suite"
                className="w-full h-40 object-cover rounded-2xl shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
