'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ParticlesBackground from '@/components/ParticlesBackground'
import NavigationDots from '@/components/NavigationDots'

export default function Home() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr')
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="min-h-screen bg-gradient-dark text-white">
      <ParticlesBackground />
      <Header language={language} setLanguage={setLanguage} />
      <NavigationDots activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <Hero language={language} setActiveSection={setActiveSection} />
      <About language={language} setActiveSection={setActiveSection} />
      <Experience language={language} setActiveSection={setActiveSection} />
      <Skills language={language} setActiveSection={setActiveSection} />
      <Projects language={language} setActiveSection={setActiveSection} />
      <Contact language={language} setActiveSection={setActiveSection} />
    </main>
  )
}