'use client'

import { useEffect, useRef, memo } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { gsap } from 'gsap'
import { heroImages } from '@/lib/mediaContent'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const hero = heroRef.current
    const background = backgroundRef.current
    const content = contentRef.current

    if (!hero || !background || !content) return

    // Optimized parallax effect with better performance
    const parallaxTween = gsap.to(background, {
      yPercent: -25, // Reduced for better performance
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.3, // Reduced for smoother performance
        invalidateOnRefresh: true,
      },
    })

    // Smooth content fade with optimized easing
    const contentTween = gsap.to(content, {
      opacity: 0,
      y: -30, // Reduced movement for better performance
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      parallaxTween.kill()
      contentTween.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const scrollToServices = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background with Parallax - Now transparent to show global background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-accent-900/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url(${heroImages.background})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Floating Elements - Optimized for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94], // Apple's preferred cubic-bezier
            repeatType: 'mirror'
          }}
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/6 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 0.98, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            repeatType: 'mirror'
          }}
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
        
        {/* Additional subtle element for depth - reduced opacity for performance */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary-300/4 rounded-full blur-2xl"
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
            repeatType: 'mirror'
          }}
          style={{ 
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 flex items-center justify-center h-full">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Creative <span className="text-gradient">Strategy</span>
              <br />
              Meets Digital <span className="text-gradient">Excellence</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Rida Digital is not just a service provider; we are your creative and strategic partner, 
              translating innovative ideas into tangible, long-term brand assets that drive growth and inspire audiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <button
                onClick={scrollToServices}
                className="btn-primary group"
              >
                Discover Our Work
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const element = document.querySelector('#portfolio')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary group"
              >
                View Portfolio
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
            <p className="text-white/60 text-sm mt-2">Scroll to explore</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
