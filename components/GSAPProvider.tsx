'use client'

import { useEffect } from 'react'
import { initGSAPConfig } from '@/lib/gsapConfig'

export default function GSAPProvider() {
  useEffect(() => {
    // Initialize GSAP with Apple-like configurations
    initGSAPConfig()
  }, [])

  return null
}
