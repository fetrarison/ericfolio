'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Globe, Server, Smartphone, Palette } from 'lucide-react'

interface SkillsProps {
  language: 'fr' | 'en'
  setActiveSection: (section: string) => void
}

const Skills = ({ language, setActiveSection }: SkillsProps) => {
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      setActiveSection('skills')
    }
  }, [inView, setActiveSection])

  const content = {
    fr: {
      title: 'COMPÉTENCES TECHNIQUES',
      subtitle: 'Technologies et outils que je maîtrise',
      categories: [
        {
          title: 'Front-end',
          icon: <Globe className="w-6 h-6" />,
          skills: [
            { name: 'HTML5', level: 95, color: '#E34F26' },
            { name: 'JavaScript (ES6+)', level: 90, color: '#F7DF1E' },
            { name: 'React', level: 88, color: '#61DAFB' },
            { name: 'Next.js', level: 85, color: '#000000' },
            { name: 'React-Admin', level: 80, color: '#61DAFB' }
          ]
        },
        {
          title: 'Back-end',
          icon: <Server className="w-6 h-6" />,
          skills: [
            { name: 'Java / Spring Boot', level: 92, color: '#ED8B00' },
            { name: 'PHP / Symfony', level: 88, color: '#777BB4' },
            { name: 'API REST', level: 90, color: '#25D366' },
            { name: 'Microservices', level: 78, color: '#FF6B6B' }
          ]
        },
        {
          title: 'Bases de données',
          icon: <Database className="w-6 h-6" />,
          skills: [
            { name: 'PostgreSQL', level: 90, color: '#336791' },
            { name: 'MySQL', level: 88, color: '#4479A1' },
            { name: 'Firebird', level: 75, color: '#FF6B35' }
          ]
        },
        {
          title: 'Outils & DevOps',
          icon: <Code className="w-6 h-6" />,
          skills: [
            { name: 'Git & GitHub', level: 92, color: '#F05032' },
            { name: 'Docker', level: 80, color: '#2496ED' },
            { name: 'Linux', level: 85, color: '#FCC624' },
            { name: 'JWT Auth', level: 88, color: '#000000' }
          ]
        }
      ]
    },
    en: {
      title: 'TECHNICAL SKILLS',
      subtitle: 'Technologies and tools I master',
      categories: [
        {
          title: 'Front-end',
          icon: <Globe className="w-6 h-6" />,
          skills: [
            { name: 'HTML5', level: 95, color: '#E34F26' },
            { name: 'JavaScript (ES6+)', level: 90, color: '#F7DF1E' },
            { name: 'React', level: 88, color: '#61DAFB' },
            { name: 'Next.js', level: 85, color: '#000000' },
            { name: 'React-Admin', level: 80, color: '#61DAFB' }
          ]
        },
        {
          title: 'Back-end',
          icon: <Server className="w-6 h-6" />,
          skills: [
            { name: 'Java / Spring Boot', level: 92, color: '#ED8B00' },
            { name: 'PHP / Symfony', level: 88, color: '#777BB4' },
            { name: 'REST API', level: 90, color: '#25D366' },
            { name: 'Microservices', level: 78, color: '#FF6B6B' }
          ]
        },
        {
          title: 'Databases',
          icon: <Database className="w-6 h-6" />,
          skills: [
            { name: 'PostgreSQL', level: 90, color: '#336791' },
            { name: 'MySQL', level: 88, color: '#4479A1' },
            { name: 'Firebird', level: 75, color: '#FF6B35' }
          ]
        },
        {
          title: 'Tools & DevOps',
          icon: <Code className="w-6 h-6" />,
          skills: [
            { name: 'Git & GitHub', level: 92, color: '#F05032' },
            { name: 'Docker', level: 80, color: '#2496ED' },
            { name: 'Linux', level: 85, color: '#FCC624' },
            { name: 'JWT Auth', level: 88, color: '#000000' }
          ]
        }
      ]
    }
  }

  return (
    <section ref={ref} id="skills" className="py-20 relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-8">
          {content[language].categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="revolutionary-card"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                  <div className="text-dark-700">{category.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-sm font-medium text-gold-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section des soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="revolutionary-card text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                <Palette className="w-6 h-6 text-dark-700" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {language === 'fr' ? 'Compétences Transversales' : 'Soft Skills'}
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                language === 'fr' ? 'Résolution de problèmes' : 'Problem Solving',
                language === 'fr' ? 'Travail d\'équipe' : 'Teamwork',
                language === 'fr' ? 'Apprentissage continu' : 'Continuous Learning',
                language === 'fr' ? 'Gestion de projet' : 'Project Management',
                language === 'fr' ? 'Communication' : 'Communication',
                language === 'fr' ? 'Créativité' : 'Creativity'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="px-6 py-3 bg-gradient-to-r from-gold-500/20 to-gold-600/20 border border-gold-500/30 rounded-full text-white font-medium hover:from-gold-500/30 hover:to-gold-600/30 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Effets de fond décoratifs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Skills