'use client'

import { useEffect, useCallback, useRef } from 'react'

interface UseOptimizedScrollOptions {
  throttle?: number
  passive?: boolean
}

export function useOptimizedScroll(
  callback: (scrollY: number, direction: 'up' | 'down') => void,
  options: UseOptimizedScrollOptions = {}
) {
  const { throttle = 16, passive = true } = options
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const updateScrollPosition = useCallback(() => {
    const scrollY = window.scrollY
    const direction = scrollY > lastScrollY.current ? 'down' : 'up'
    
    callback(scrollY, direction)
    lastScrollY.current = scrollY
    ticking.current = false
  }, [callback])

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollPosition)
      ticking.current = true
    }
  }, [updateScrollPosition])

  const throttledScrollHandler = useCallback(() => {
    requestTick()
  }, [requestTick])

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler, { passive })
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
    }
  }, [throttledScrollHandler, passive])

  return { lastScrollY: lastScrollY.current }
}

export function useScrollToTop() {
  return useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({
      top: 0,
      behavior,
    })
  }, [])
}

export function useScrollToElement() {
  return useCallback((elementId: string, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])
}
