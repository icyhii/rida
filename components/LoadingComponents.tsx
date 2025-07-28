'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'white' | 'gray'
  className?: string
}

export const LoadingSpinner = memo(function LoadingSpinner({
  size = 'md',
  color = 'primary',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const colorClasses = {
    primary: 'border-primary-600',
    white: 'border-white',
    gray: 'border-gray-600',
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
})

interface SkeletonProps {
  width?: string | number
  height?: string | number
  className?: string
  rounded?: boolean
}

export const Skeleton = memo(function Skeleton({
  width = '100%',
  height = '1rem',
  className = '',
  rounded = false,
}: SkeletonProps) {
  return (
    <div
      className={`bg-gray-200 animate-pulse ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
      style={{ width, height }}
    />
  )
})

interface LazyLoadingProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
}

export const LazyLoading = memo(function LazyLoading({
  children,
  fallback,
  className = '',
}: LazyLoadingProps) {
  const defaultFallback = (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <LoadingSpinner size="lg" />
    </div>
  )

  return (
    <div className={className}>
      {fallback || defaultFallback}
      <div className="sr-only">{children}</div>
    </div>
  )
})

interface ContentPlaceholderProps {
  lines?: number
  className?: string
  showAvatar?: boolean
}

export const ContentPlaceholder = memo(function ContentPlaceholder({
  lines = 3,
  className = '',
  showAvatar = false,
}: ContentPlaceholderProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {showAvatar && (
        <div className="flex items-center space-x-3">
          <Skeleton width={40} height={40} rounded />
          <div className="space-y-2 flex-1">
            <Skeleton width="60%" height={16} />
            <Skeleton width="40%" height={14} />
          </div>
        </div>
      )}
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            width={index === lines - 1 ? '75%' : '100%'}
            height={16}
          />
        ))}
      </div>
    </div>
  )
})

interface ImagePlaceholderProps {
  width?: string | number
  height?: string | number
  className?: string
}

export const ImagePlaceholder = memo(function ImagePlaceholder({
  width = '100%',
  height = 200,
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded-lg flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <svg
        className="w-12 h-12 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    </div>
  )
})

export default LoadingSpinner
