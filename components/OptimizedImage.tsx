'use client'

import Image from 'next/image'
import { useState, memo } from 'react'
import { motion } from 'framer-motion'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
}

const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  objectFit = 'cover',
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  const imageProps = {
    src,
    alt,
    quality,
    priority,
    loading,
    placeholder,
    ...(blurDataURL && { blurDataURL }),
    ...(sizes && { sizes }),
    ...(fill ? { fill: true } : { width, height }),
    className: `${className} ${objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : objectFit === 'fill' ? 'object-fill' : objectFit === 'none' ? 'object-none' : 'object-scale-down'} transition-opacity duration-300 ${
      isLoading ? 'opacity-0' : 'opacity-100'
    }`,
    onLoad: handleLoad,
    onError: handleError,
  }

  if (hasError) {
    return (
      <div
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-400`}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={!fill ? { width, height } : undefined}
        />
      )}
      <Image {...imageProps} />
    </div>
  )
})

interface LazyImageProps extends OptimizedImageProps {
  threshold?: number
  rootMargin?: string
}

export const LazyImage = memo(function LazyImage({
  threshold = 0.1,
  rootMargin = '50px',
  ...props
}: LazyImageProps) {
  const [inView, setInView] = useState(false)

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setInView(true)
    }
  }

  useState(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin,
      })

      const element = document.querySelector(`[data-lazy-image="${props.src}"]`)
      if (element) {
        observer.observe(element)
      }

      return () => {
        if (element) {
          observer.unobserve(element)
        }
      }
    }
  })

  if (!inView) {
    return (
      <div
        data-lazy-image={props.src}
        className={`${props.className} bg-gray-200 animate-pulse`}
        style={!props.fill ? { width: props.width, height: props.height } : undefined}
      />
    )
  }

  return <OptimizedImage {...props} />
})

interface AnimatedImageProps extends OptimizedImageProps {
  animation?: 'fadeIn' | 'slideUp' | 'scale' | 'none'
  delay?: number
}

export const AnimatedImage = memo(function AnimatedImage({
  animation = 'fadeIn',
  delay = 0,
  ...props
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    props.onLoad?.()
  }

  const getAnimationProps = () => {
    switch (animation) {
      case 'fadeIn':
        return {
          initial: { opacity: 0 },
          animate: { opacity: isLoaded ? 1 : 0 },
        }
      case 'slideUp':
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 },
        }
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 },
        }
      default:
        return {}
    }
  }

  if (animation === 'none') {
    return <OptimizedImage {...props} onLoad={handleLoad} />
  }

  return (
    <motion.div
      {...getAnimationProps()}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <OptimizedImage {...props} onLoad={handleLoad} />
    </motion.div>
  )
})

export default OptimizedImage
