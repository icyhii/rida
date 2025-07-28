'use client'

import { memo, Suspense } from 'react'
import { useLazyLoad } from '@/hooks/usePerformance'
import dynamic from 'next/dynamic'

// Optimized loading placeholder
const LoadingPlaceholder = memo(({ height = 'h-screen', className = '' }: { 
  height?: string
  className?: string 
}) => (
  <div className={`bg-gradient-to-r from-gray-50 to-gray-100 animate-pulse ${height} ${className}`}>
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
))

LoadingPlaceholder.displayName = 'LoadingPlaceholder'

// Lazy load wrapper with intersection observer
export const LazySection = memo(({ 
  children, 
  fallback,
  className = '',
  threshold = 0.1
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
  threshold?: number
}) => {
  const { ref, shouldLoad } = useLazyLoad(threshold)

  return (
    <div ref={ref} className={`content-visibility-auto ${className}`}>
      {shouldLoad ? children : (
        fallback || <LoadingPlaceholder />
      )}
    </div>
  )
})

LazySection.displayName = 'LazySection'

// Dynamically imported components with optimized loading
export const Portfolio = dynamic(() => import('./Portfolio'), {
  loading: () => <LoadingPlaceholder height="h-screen" className="bg-gray-900" />,
  ssr: false,
})

export const Studio = dynamic(() => import('./Studio'), {
  loading: () => <LoadingPlaceholder height="h-screen" className="bg-white" />,
  ssr: false,
})

export const Testimonials = dynamic(() => import('./Testimonials'), {
  loading: () => <LoadingPlaceholder height="h-96" className="bg-gray-50" />,
  ssr: false,
})

export const Blog = dynamic(() => import('./Blog'), {
  loading: () => <LoadingPlaceholder height="h-96" className="bg-white" />,
  ssr: false,
})

// Optimized image component with lazy loading
export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '',
  width,
  height,
  priority = false
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}) => {
  const { ref, shouldLoad } = useLazyLoad(0.1)

  return (
    <div ref={ref} className={className}>
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
      )}
    </div>
  )
})

OptimizedImage.displayName = 'OptimizedImage'
