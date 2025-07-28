'use client'

import { useEffect, useRef, memo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const BackgroundTransition = memo(() => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline>()

  useEffect(() => {
    if (!backgroundRef.current) return

    const background = backgroundRef.current

    // Create a single optimized timeline for all transitions
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Reduced for smoother feel
        invalidateOnRefresh: true,
      }
    })

    // Optimized transitions with better performance
    const transitions = [
      // Hero to Services - Dark to Light (0-15%)
      { start: 0, end: 0.15, color: 'linear-gradient(135deg, #F8F6F2 0%, #ffffff 30%, #F8F6F2 100%)' },
      
      // Services to About - Light to Light Grey (15-35%)  
      { start: 0.15, end: 0.35, color: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 30%, #f9fafb 100%)' },
      
      // About to Portfolio - Light to Dark (35-55%)
      { start: 0.35, end: 0.55, color: 'linear-gradient(135deg, #1E1E1E 0%, #264343 30%, #1E1E1E 100%)' },
      
      // Portfolio to Studio - Dark to Light (55-75%)
      { start: 0.55, end: 0.75, color: 'linear-gradient(135deg, #F8F6F2 0%, #ffffff 30%, #F8F6F2 100%)' },
      
      // Studio to Testimonials - Light to Grey (75-85%)
      { start: 0.75, end: 0.85, color: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 30%, #f9fafb 100%)' },
      
      // Testimonials to Blog - Grey to White (85-95%)
      { start: 0.85, end: 0.95, color: 'linear-gradient(135deg, #ffffff 0%, #F8F6F2 30%, #ffffff 100%)' },
      
      // Blog to Contact - White to Dark (95-100%)
      { start: 0.95, end: 1, color: 'linear-gradient(135deg, #1E1E1E 0%, #264343 30%, #1E1E1E 100%)' }
    ]

    // Create optimized transitions
    transitions.forEach(({ start, end, color }, index) => {
      tlRef.current?.to(background, {
        background: color,
        duration: end - start,
        ease: 'power1.inOut',
        force3D: true,
      }, start)
    })

    return () => {
      tlRef.current?.kill()
    }
  }, [])

  return (
    <>
      {/* Main background layer with hardware acceleration */}
      <div
        ref={backgroundRef}
        className="fixed inset-0 w-full h-full -z-20"
        style={{
          background: 'linear-gradient(135deg, #1E1E1E 0%, #264343 30%, #1E1E1E 100%)',
          willChange: 'background',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Subtle overlay for depth - Apple-style layering */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(46, 78, 78, 0.1) 0%, transparent 70%)',
          mixBlendMode: 'overlay',
          transform: 'translateZ(0)'
        }}
      />
    </>
  )
})

BackgroundTransition.displayName = 'BackgroundTransition'
export default BackgroundTransition
