'use client'

import { motion } from 'framer-motion'

interface NavigationDotsProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const NavigationDots = ({ activeSection, setActiveSection }: NavigationDotsProps) => {
  const sections = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="nav-dots">
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className={`nav-dot ${activeSection === section.id ? 'active' : ''} group relative`}
          onClick={() => handleClick(section.id)}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-dark-700 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {section.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default NavigationDots