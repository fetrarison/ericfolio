'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

interface ExperienceProps {
  language: 'fr' | 'en'
  setActiveSection: (section: string) => void
}

const Experience = ({ language, setActiveSection }: ExperienceProps) => {
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      setActiveSection('experience')
    }
  }, [inView, setActiveSection])

  const content = {
    fr: {
      title: 'EXPÉRIENCE PROFESSIONNELLE',
      subtitle: 'Mon parcours et mes réalisations',
      experiences: [
        {
          title: 'SITE TAPAKILA EVENT',
          period: 'FÉVRIER 2025',
          description: 'Développement d\'une plateforme de gestion d\'événements et de réservation de billets, inspirée de TicketPlace. Mise en place d\'un tableau de bord avec React, Next.js et React-Admin pour gérer efficacement événements, places et réservations.',
          technologies: ['React', 'Next.js', 'React-Admin', 'JavaScript'],
          type: 'Plateforme Web'
        },
        {
          title: 'GARAGE MOTO PIÈCES',
          period: 'MARS 2025',
          location: 'Fianarantsoa',
          description: 'Création d\'un site web en Symfony pour un garage à Fianarantsoa, intégrant la gestion des ventes de pièces détachées et la présentation des services pour motos et véhicules.',
          technologies: ['PHP', 'Symfony', 'MySQL', 'HTML/CSS'],
          type: 'Site Web Métier'
        },
        {
          title: 'CHAMPIONNAT FOOT 2025',
          period: 'MARS 2025',
          description: 'Développement d\'une application complète en Spring Boot pour la gestion d\'un championnat de football (joueurs, entraîneurs, clubs, transferts). Architecture divisée en modules synchronisés pour une meilleure organisation et évolutivité.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'API REST'],
          type: 'Application Métier'
        },
        {
          title: 'ARC APP',
          period: 'JUILLET 2025',
          description: 'Développement d\'une application web de gestion d\'archives pour un client particulier. Back-end : Spring Boot, Front-end : React. Fonctionnalités : création, modification, suppression et destruction d\'archives selon les droits et rôles attribués aux utilisateurs (gestion des comptes avec permissions).',
          technologies: ['Spring Boot', 'React', 'PostgreSQL', 'JWT Auth'],
          type: 'Application de Gestion'
        },
        {
          title: 'LOTUS BUNGALOW',
          period: 'MAI 2024',
          location: 'Madagascar',
          description: 'Conception d\'un site vitrine pour un hôtel à Madagascar, réalisé entièrement en JavaScript. Projet issu d\'un concours organisé par le propriétaire.',
          technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
          type: 'Site Vitrine'
        }
      ]
    },
    en: {
      title: 'PROFESSIONAL EXPERIENCE',
      subtitle: 'My journey and achievements',
      experiences: [
        {
          title: 'TAPAKILA EVENT SITE',
          period: 'FEBRUARY 2025',
          description: 'Development of an event management and ticket booking platform, inspired by TicketPlace. Implementation of a dashboard with React, Next.js and React-Admin to efficiently manage events, seats and bookings.',
          technologies: ['React', 'Next.js', 'React-Admin', 'JavaScript'],
          type: 'Web Platform'
        },
        {
          title: 'MOTORCYCLE PARTS GARAGE',
          period: 'MARCH 2025',
          location: 'Fianarantsoa',
          description: 'Creation of a Symfony website for a garage in Fianarantsoa, integrating spare parts sales management and service presentation for motorcycles and vehicles.',
          technologies: ['PHP', 'Symfony', 'MySQL', 'HTML/CSS'],
          type: 'Business Website'
        },
        {
          title: 'FOOTBALL CHAMPIONSHIP 2025',
          period: 'MARCH 2025',
          description: 'Development of a complete Spring Boot application for football championship management (players, coaches, clubs, transfers). Architecture divided into synchronized modules for better organization and scalability.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
          type: 'Business Application'
        },
        {
          title: 'ARC APP',
          period: 'JULY 2025',
          description: 'Development of an archive management web application for a private client. Back-end: Spring Boot, Front-end: React. Features: creation, modification, deletion and destruction of archives according to rights and roles assigned to users (account management with permissions).',
          technologies: ['Spring Boot', 'React', 'PostgreSQL', 'JWT Auth'],
          type: 'Management Application'
        },
        {
          title: 'LOTUS BUNGALOW',
          period: 'MAY 2024',
          location: 'Madagascar',
          description: 'Design of a showcase website for a hotel in Madagascar, made entirely in JavaScript. Project from a competition organized by the owner.',
          technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
          type: 'Showcase Website'
        }
      ]
    }
  }

  return (
    <section ref={ref} id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">{content[language].title}</h2>
          <p className="text-xl text-gray-300">{content[language].subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Ligne de temps */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-gold-400 to-gold-500"></div>

          <div className="space-y-12">
            {content[language].experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Point sur la timeline */}
                <div className="absolute left-6 w-5 h-5 bg-gold-500 rounded-full border-4 border-dark-700 shadow-gold-glow"></div>

                <div className="revolutionary-card group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-400 mb-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gold-500" />
                          <span>{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gold-500" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full">
                      {exp.type}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.1 }}
                        className="px-3 py-1 bg-dark-600 text-gold-400 rounded-full text-sm font-medium border border-gold-500/20 hover:border-gold-500/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Effets de fond décoratifs */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Experience