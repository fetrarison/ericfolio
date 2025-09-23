'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Award, Globe, Heart } from 'lucide-react'

interface AboutProps {
  language: 'fr' | 'en'
  setActiveSection: (section: string) => void
}

const About = ({ language, setActiveSection }: AboutProps) => {
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      setActiveSection('about')
    }
  }, [inView, setActiveSection])

  const content = {
    fr: {
      title: 'À PROPOS DE MOI',
      subtitle: 'Découvrez qui je suis',
      description: 'Développeur full-stack passionné avec une expertise approfondie dans les technologies web modernes. Je me spécialise dans la création d\'applications web robustes et scalables, en utilisant React, Next.js pour le front-end et Spring Boot, Symfony pour le back-end.',
      formation: {
        title: 'FORMATION',
        items: [
          {
            degree: 'Licence en Informatique',
            school: 'Haute École d\'Informatique, Ivandrà',
            icon: <Award className="w-5 h-5" />
          },
          {
            degree: 'Baccalauréat',
            school: 'Lycée Saint Jean, Ambohijanaka',
            icon: <Award className="w-5 h-5" />
          }
        ]
      },
      languages: {
        title: 'LANGUES',
        items: [
          { name: 'Malagasy', level: 'Langue maternelle', percentage: 100 },
          { name: 'Français', level: 'Niveau intermédiaire', percentage: 75 },
          { name: 'Anglais', level: 'Niveau normal', percentage: 60 }
        ]
      },
      interests: {
        title: 'CENTRES D\'INTÉRÊT',
        items: ['Basketball', 'Jeux vidéo', 'La passion mécanique']
      }
    },
    en: {
      title: 'ABOUT ME',
      subtitle: 'Discover who I am',
      description: 'Passionate full-stack developer with deep expertise in modern web technologies. I specialize in creating robust and scalable web applications, using React, Next.js for front-end and Spring Boot, Symfony for back-end.',
      formation: {
        title: 'EDUCATION',
        items: [
          {
            degree: 'Computer Science Degree',
            school: 'Higher School of Computer Science, Ivandrà',
            icon: <Award className="w-5 h-5" />
          },
          {
            degree: 'Baccalaureate',
            school: 'Saint Jean High School, Ambohijanaka',
            icon: <Award className="w-5 h-5" />
          }
        ]
      },
      languages: {
        title: 'LANGUAGES',
        items: [
          { name: 'Malagasy', level: 'Native language', percentage: 100 },
          { name: 'French', level: 'Intermediate level', percentage: 75 },
          { name: 'English', level: 'Normal level', percentage: 60 }
        ]
      },
      interests: {
        title: 'INTERESTS',
        items: ['Basketball', 'Video games', 'Mechanical passion']
      }
    }
  }

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description principale */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="revolutionary-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-dark-700" />
                </div>
                <h3 className="text-2xl font-bold text-white">Profil</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {content[language].description}
              </p>
            </div>

            {/* Formation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="revolutionary-card mt-8"
            >
              <h3 className="text-xl font-bold text-gold-500 mb-6">{content[language].formation.title}</h3>
              <div className="space-y-4">
                {content[language].formation.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-dark-600/50 rounded-lg"
                  >
                    <div className="text-gold-500 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{item.degree}</h4>
                      <p className="text-gray-400">{item.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Langues et Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Langues */}
            <div className="revolutionary-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-dark-700" />
                </div>
                <h3 className="text-xl font-bold text-gold-500">{content[language].languages.title}</h3>
              </div>
              <div className="space-y-4">
                {content[language].languages.items.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{lang.name}</span>
                      <span className="text-sm text-gray-400">{lang.level}</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-gold h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 1 + index * 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="revolutionary-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-dark-700" />
                </div>
                <h3 className="text-xl font-bold text-gold-500">{content[language].interests.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {content[language].interests.items.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-gold text-dark-700 rounded-full text-sm font-semibold"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Effet de fond décoratif */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </section>
  )
}

export default About