'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Github, Mail, Phone, MapPin } from 'lucide-react'

interface HeroProps {
  language: 'fr' | 'en'
  setActiveSection: (section: string) => void
}

const Hero = ({ language, setActiveSection }: HeroProps) => {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [typedText, setTypedText] = useState('')

  const content = {
    fr: {
      greeting: 'Bonjour, je suis',
      title: 'DÉVELOPPEUR FULL-STACK',
      description: 'En tant que développeur passionné par la programmation, mon parcours se focalise sur l\'univers dynamique du développement web, les technologies et la conception de logiciels.',
      cta: 'Découvrir mon travail',
      contact: 'Me contacter'
    },
    en: {
      greeting: 'Hello, I am',
      title: 'FULL-STACK DEVELOPER',
      description: 'As a developer passionate about programming, my journey focuses on the dynamic universe of web development, technologies and software design.',
      cta: 'Discover my work',
      contact: 'Contact me'
    }
  }

  const titles = [
    content[language].title,
    'REACT DEVELOPER',
    'NEXT.JS EXPERT',
    'SPRING BOOT DEV'
  ]

  useEffect(() => {
    if (inView) {
      setActiveSection('home')
    }
  }, [inView, setActiveSection])

  useEffect(() => {
    let currentTitle = 0
    let currentChar = 0
    let isDeleting = false

    const typeWriter = () => {
      const current = titles[currentTitle]
      
      if (isDeleting) {
        setTypedText(current.substring(0, currentChar - 1))
        currentChar--
      } else {
        setTypedText(current.substring(0, currentChar + 1))
        currentChar++
      }

      if (!isDeleting && currentChar === current.length) {
        setTimeout(() => isDeleting = true, 2000)
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false
        currentTitle = (currentTitle + 1) % titles.length
      }

      setTimeout(typeWriter, isDeleting ? 50 : 100)
    }

    typeWriter()
  }, [titles])

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Photo de profil */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-48 h-48 mx-auto mb-8 relative"
          >
            <div className="w-full h-full rounded-full bg-gradient-gold p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-6xl font-bold text-dark-700 relative overflow-hidden">
               <img
  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
  alt="Profile"
  className="w-full h-full object-cover rounded-full"
/>

                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent rounded-full"></div>
              </div>
            </div>
            {/* Effet de particules autour de la photo */}
            <div className="absolute inset-0 animate-spin">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gold-500 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateY(-120px) translateX(-4px)`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gold-300 mb-4"
          >
            {content[language].greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">FETRARISON</span>
            <br />
            <span className="text-gold-500">ERIC</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <div className="text-2xl md:text-3xl font-mono text-gold-400 h-12">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {content[language].description}
          </motion.p>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4 text-gold-500" />
              <span>0344319587</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4 text-gold-500" />
              <span>fetrarison5@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>NANISANA</span>
            </div>
            <a 
              href="https://github.com/fetrarison"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-gold-500 transition-colors"
            >
              <Github className="w-4 h-4 text-gold-500" />
              <span>GitHub</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="#about"
              className="revolutionary-btn shine-effect group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{content[language].cta}</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-gold-500 text-gold-500 rounded-full font-semibold hover:bg-gold-500 hover:text-dark-700 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {content[language].contact}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold-500"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Effet de gradient en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}

export default Hero