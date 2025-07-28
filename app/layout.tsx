import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import GSAPProvider from '@/components/GSAPProvider'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Rida Digital - Creative & Strategic Digital Agency',
  description: 'Rida Digital is not just a service provider; it is a creative and strategic partner that translates innovative ideas into tangible, long-term brand assets.',
  keywords: 'digital agency, branding, creative strategy, web design, digital marketing, production studio',
  authors: [{ name: 'Rida Digital' }],
  openGraph: {
    title: 'Rida Digital - Creative & Strategic Digital Agency',
    description: 'Your creative and strategic partner for innovative digital solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rida Digital - Creative & Strategic Digital Agency',
    description: 'Your creative and strategic partner for innovative digital solutions',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased">
        <GSAPProvider />
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  )
}
