'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Calendar, Code } from 'lucide-react'

interface ProjectsProps {
  language: 'fr' | 'en'
  setActiveSection: (section: string) => void
}

const Projects = ({ language, setActiveSection }: ProjectsProps) => {
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      setActiveSection('projects')
    }
  }, [inView, setActiveSection])

  const content = {
    fr: {
      title: 'PROJETS RÉALISÉS',
      subtitle: 'Découvrez mes créations et réalisations',
      viewProject: 'Voir le projet',
      viewCode: 'Code source',
      projects: [
        {
          title: 'Tapakila Event Platform',
          description: 'Plateforme complète de gestion d\'événements avec système de réservation de billets. Interface d\'administration React-Admin pour la gestion des événements, des places et des réservations.',
          technologies: ['React', 'Next.js', 'React-Admin', 'Node.js', 'PostgreSQL'],
          category: 'Web Application',
          year: '2025',
          features: [
            'Gestion complète des événements',
            'Système de réservation en temps réel',
            'Tableau de bord administrateur',
            'Paiements sécurisés'
          ],
          gradient: 'from-blue-500 to-purple-600'
        },
        {
          title: 'Garage Moto Management',
          description: 'Site web pour garage spécialisé dans les motos avec gestion des ventes de pièces détachées, catalogue produits et présentation des services.',
          technologies: ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'JavaScript'],
          category: 'Business Website',
          year: '2025',
          features: [
            'Catalogue de pièces détachées',
            'Gestion des stocks',
            'Interface de vente',
            'Présentation des services'
          ],
          gradient: 'from-green-500 to-teal-600'
        },
        {
          title: 'Football Championship Manager',
          description: 'Application complète de gestion de championnat de football avec gestion des joueurs, équipes, matchs et classements. Architecture modulaire pour une évolutivité optimale.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'React'],
          category: 'Enterprise Application',
          year: '2025',
          features: [
            'Gestion des joueurs et équipes',
            'Calendrier des matchs',
            'Système de classement',
            'Statistiques détaillées'
          ],
          gradient: 'from-orange-500 to-red-600'
        },
        {
          title: 'ARC Archive Manager',
          description: 'Application web sécurisée de gestion d\'archives avec système d\'authentification avancé, gestion des rôles et permissions utilisateurs.',
          technologies: ['Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Spring Security'],
          category: 'Management System',
          year: '2025',
          features: [
            'Gestion sécurisée des archives',
            'Système de permissions',
            'Interface utilisateur intuitive',
            'Audit et traçabilité'
          ],
          gradient: 'from-indigo-500 to-blue-600'
        },
        {
          title: 'Lotus Bungalow',
          description: 'Site vitrine élégant pour un hôtel à Madagascar. Design responsive et moderne réalisé entièrement en JavaScript vanilla avec animations fluides.',
          technologies: ['JavaScript', 'HTML5', 'CSS3', 'GSAP', 'Responsive Design'],
          category: 'Showcase Website',
          year: '2024',
          features: [
            'Design responsive moderne',
            'Animations fluides',
            'Galerie d\'images',
            'Formulaire de réservation'
          ],
          gradient: 'from-yellow-500 to-orange-600'
        }
      ]
    },
    en: {
      title: 'COMPLETED PROJECTS',
      subtitle: 'Discover my creations and achievements',
      viewProject: 'View project',
      viewCode: 'Source code',
      projects: [
        {
          title: 'Tapakila Event Platform',
          description: 'Complete event management platform with ticket booking system. React-Admin administration interface for managing events, seats and reservations.',
          technologies: ['React', 'Next.js', 'React-Admin', 'Node.js', 'PostgreSQL'],
          category: 'Web Application',
          year: '2025',
          features: [
            'Complete event management',
            'Real-time booking system',
            'Admin dashboard',
            'Secure payments'
          ],
          gradient: 'from-blue-500 to-purple-600'
        },
        {
          title: 'Garage Moto Management',
          description: 'Website for motorcycle garage with spare parts sales management, product catalog and service presentation.',
          technologies: ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'JavaScript'],
          category: 'Business Website',
          year: '2025',
          features: [
            'Spare parts catalog',
            'Inventory management',
            'Sales interface',
            'Service presentation'
          ],
          gradient: 'from-green-500 to-teal-600'
        },
        {
          title: 'Football Championship Manager',
          description: 'Complete football championship management application with player, team, match and ranking management. Modular architecture for optimal scalability.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'React'],
          category: 'Enterprise Application',
          year: '2025',
          features: [
            'Player and team management',
            'Match calendar',
            'Ranking system',
            'Detailed statistics'
          ],
          gradient: 'from-orange-500 to-red-600'
        },
        {
          title: 'ARC Archive Manager',
          description: 'Secure archive management web application with advanced authentication system, user roles and permissions management.',
          technologies: ['Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Spring Security'],
          category: 'Management System',
          year: '2025',
          features: [
            'Secure archive management',
            'Permission system',
            'Intuitive user interface',
            'Audit and traceability'
          ],
          gradient: 'from-indigo-500 to-blue-600'
        },
        {
          title: 'Lotus Bungalow',
          description: 'Elegant showcase website for a hotel in Madagascar. Responsive and modern design made entirely in vanilla JavaScript with smooth animations.',
          technologies: ['JavaScript', 'HTML5', 'CSS3', 'GSAP', 'Responsive Design'],
          category: 'Showcase Website',
          year: '2024',
          features: [
            'Modern responsive design',
            'Smooth animations',
            'Image gallery',
            'Booking form'
          ],
          gradient: 'from-yellow-500 to-orange-600'
        }
      ]
    }
  }

  return (
    <section ref={ref} id="projects" className="py-20 relative overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {content[language].projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="revolutionary-card h-full flex flex-col">
                {/* Header avec gradient */}
                <div className={`h-32 rounded-t-lg bg-gradient-to-r ${project.gradient} relative overflow-hidden mb-6`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-sm font-semibold opacity-90">{project.category}</div>
                      <div className="flex items-center justify-center mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gold-500 mb-3">
                      {language === 'fr' ? 'Fonctionnalités principales :' : 'Key Features:'}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-600 text-gold-400 rounded-full text-xs font-medium border border-gold-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-gold text-dark-700 rounded-lg font-semibold hover:shadow-gold-glow transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{content[language].viewProject}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 border border-gold-500 text-gold-500 rounded-lg font-semibold hover:bg-gold-500 hover:text-dark-700 transition-all duration-300"
                    >
                      <Code className="w-4 h-4" />
                      <span>{content[language].viewCode}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="revolutionary-card inline-block">
            <h3 className="text-xl font-bold text-white mb-4">
              {language === 'fr' 
                ? 'Intéressé par mes projets ?' 
                : 'Interested in my projects?'
              }
            </h3>
            <p className="text-gray-300 mb-6">
              {language === 'fr'
                ? 'N\'hésitez pas à me contacter pour discuter de votre prochain projet'
                : 'Feel free to contact me to discuss your next project'
              }
            </p>
            <motion.a
              href="#contact"
              className="revolutionary-btn shine-effect"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                {language === 'fr' ? 'Commençons à collaborer' : 'Let\'s start collaborating'}
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Effets de fond décoratifs */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Projects