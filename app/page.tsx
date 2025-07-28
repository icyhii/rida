import { Suspense } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackgroundTransition from '@/components/BackgroundTransition'
import ScrollOptimizer from '@/components/ScrollOptimizer'
import { 
  Portfolio, 
  Studio, 
  Testimonials, 
  Blog,
  LazySection 
} from '@/components/LazyComponents'

export default function Home() {
  return (
    <main className="relative antialiased">
      <ScrollOptimizer />
      <BackgroundTransition />
      <Navigation />
      
      {/* Critical above-the-fold content loads immediately */}
      <Hero />
      <Services />
      <About />
      
      {/* Non-critical content loads lazily with intersection observer */}
      <LazySection threshold={0.1}>
        <Suspense fallback={<div className="h-screen bg-gray-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>}>
          <Portfolio />
        </Suspense>
      </LazySection>
      
      <LazySection threshold={0.1}>
        <Suspense fallback={<div className="h-screen bg-white animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>}>
          <Studio />
        </Suspense>
      </LazySection>
      
      <LazySection threshold={0.1}>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>}>
          <Testimonials />
        </Suspense>
      </LazySection>
      
      <LazySection threshold={0.1}>
        <Suspense fallback={<div className="h-96 bg-white animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>}>
          <Blog />
        </Suspense>
      </LazySection>
      
      <Contact />
      <Footer />
    </main>
  )
}
