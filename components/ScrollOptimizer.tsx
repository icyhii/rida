'use client'

import { useEffect } from 'react'

export default function ScrollOptimizer() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Optimize scroll performance
    let ticking = false

    const updateScrollOptimization = () => {
      // Enable hardware acceleration for key elements during scroll
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isVisible) {
          section.style.willChange = 'transform, opacity'
        } else {
          section.style.willChange = 'auto'
        }
      })
      
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollOptimization)
        ticking = true
      }
    }

    // Add optimized scroll listener
    window.addEventListener('scroll', onScroll, { passive: true })

    // Initial setup
    updateScrollOptimization()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
