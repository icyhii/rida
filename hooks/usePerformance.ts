'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

// High-performance intersection observer hook
export const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const defaultOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  }), [options])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        setIsVisible(isIntersecting)
        
        if (isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true)
        }
      },
      defaultOptions
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [defaultOptions, hasBeenVisible])

  return { ref, isVisible, hasBeenVisible }
}

// Optimized lazy loading hook for components
export const useLazyLoad = (threshold = 0.1) => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || shouldLoad) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { 
        threshold, 
        rootMargin: '200px' // Load before element is visible
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, shouldLoad])

  return { ref, shouldLoad }
}

// Performance monitor hook
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Monitor FPS
    let lastTime = performance.now()
    let frames = 0
    let fps = 0

    const measureFPS = () => {
      const currentTime = performance.now()
      frames++
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frames * 1000) / (currentTime - lastTime))
        frames = 0
        lastTime = currentTime
        
        // Log performance warnings
        if (fps < 30) {
          console.warn('Low FPS detected:', fps)
        }
      }
      
      requestAnimationFrame(measureFPS)
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.fetchStart, 'ms')
        }
        
        if (entry.entryType === 'paint') {
          console.log(`${entry.name}:`, entry.startTime, 'ms')
        }
      })
    })

    if ('PerformanceObserver' in window) {
      observer.observe({ entryTypes: ['navigation', 'paint'] })
    }

    measureFPS()

    return () => {
      observer.disconnect()
    }
  }, [])
}
