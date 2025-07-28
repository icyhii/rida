'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useOptimizedScroll, useScrollToElement } from '@/hooks/useOptimizedScroll'

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Studio', href: '#studio' },
  { name: 'Insights', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

const Navigation = memo(function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollDirection, isAtTop } = useScrollDirection()
  const scrollToElement = useScrollToElement()

  // Optimized scroll handler
  const handleScroll = useCallback((scrollY: number, direction: 'up' | 'down') => {
    setIsScrolled(scrollY > 50)
    
    // Handle visibility
    if (scrollY < 10) {
      setIsVisible(true)
    } else if (direction === 'down') {
      setIsVisible(false)
    } else if (direction === 'up') {
      setIsVisible(true)
    }

    // Close mobile menu when scrolling
    if (isMobileMenuOpen && scrollY > 0) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobileMenuOpen])

  useOptimizedScroll(handleScroll, { throttle: 16, passive: true })

  const scrollToSection = useCallback((href: string) => {
    const elementId = href.startsWith('#') ? href.slice(1) : href
    scrollToElement(elementId, 80)
    setIsMobileMenuOpen(false)
  }, [scrollToElement])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        isScrolled ? 'glass-effect shadow-lg backdrop-blur-lg' : 'bg-transparent'
      }`}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.25, 
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
          >
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-display font-bold text-white hover:text-primary-400 transition-colors duration-200"
            >
              Rida Digital
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-primary-400 font-medium transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-200 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Start Your Journey
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 will-change-transform"
            onClick={toggleMobileMenu}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass-dark"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="container-custom py-4">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-white hover:text-primary-400 font-medium transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: navigationItems.length * 0.05 }}
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full justify-center"
                >
                  Start Your Journey
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
})

export default Navigation
