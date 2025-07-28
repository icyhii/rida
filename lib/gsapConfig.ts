'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Apple-inspired GSAP configuration for premium smoothness and performance
export const initGSAPConfig = () => {
  if (typeof window === 'undefined') return

  gsap.registerPlugin(ScrollTrigger)

  // Configure GSAP for optimal performance
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  })

  // Enhanced ScrollTrigger defaults for better performance
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  })

  // Optimize for high refresh rate displays (120Hz)
  gsap.ticker.fps(120)
  gsap.ticker.lagSmoothing(0)

  // Batch animations for better performance
  ScrollTrigger.batch('.animate-on-scroll', {
    onEnter: (elements) => {
      gsap.fromTo(elements, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95,
          filter: 'blur(4px)'
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8, 
          stagger: 0.1,
          ease: 'power2.out',
          force3D: true,
          clearProps: 'all'
        }
      )
    },
    start: 'top 85%',
    once: true,
  })
}

// Smooth scroll to element with Apple-like easing
export const smoothScrollTo = (target: string | Element, offset = 0) => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: {
      y: target,
      offsetY: offset
    },
    ease: 'power2.inOut'
  })
}

// High-performance reveal animation
export const createRevealAnimation = (element: Element, delay = 0) => {
  return gsap.fromTo(element, 
    {
      opacity: 0,
      y: 40,
      scale: 0.98,
      filter: 'blur(6px)'
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      delay,
      ease: 'power2.out',
      force3D: true,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    }
  )
}

// Optimized parallax effect
export const createParallaxEffect = (element: Element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: 'none',
    force3D: true,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  })
}
