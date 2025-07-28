'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Optimize images with Intersection Observer
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        }
      })
    }, { rootMargin: '100px' })

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach((img) => imageObserver.observe(img))

    // Optimize fonts loading
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        console.log('Fonts loaded')
      })
    }

    // Monitor performance in development
    if (process.env.NODE_ENV === 'development') {
      let fps = 0
      let lastTime = performance.now()
      let frames = 0

      const measureFPS = () => {
        const currentTime = performance.now()
        frames++
        
        if (currentTime >= lastTime + 1000) {
          fps = Math.round((frames * 1000) / (currentTime - lastTime))
          frames = 0
          lastTime = currentTime
          
          if (fps < 30) {
            console.warn('Low FPS detected:', fps)
          }
        }
        
        requestAnimationFrame(measureFPS)
      }

      measureFPS()
    }

    return () => {
      imageObserver.disconnect()
    }
  }, [])

  return null
}
