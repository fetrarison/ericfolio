'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Send, User, MessageSquare } from 'lucide-react'

interface ContactProps {
  language: 'fr' | 'en'
  setActiveSection: (section: string) => void
}

const Contact = ({ language, setActiveSection }: ContactProps) => {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('contact')
    }
  }, [inView, setActiveSection])

  const content = {
    fr: {
      title: 'CONTACTEZ-MOI',
      subtitle: 'Travaillons ensemble sur votre prochain projet',
      form: {
        name: 'Nom complet',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message',
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'votre.email@exemple.com',
        subjectPlaceholder: 'Sujet de votre message',
        messagePlaceholder: 'Décrivez votre projet ou votre demande...'
      },
      info: {
        title: 'Informations de contact',
        description: 'N\'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. Je vous répondrai dans les plus brefs délais.',
        available: 'Disponible pour de nouveaux projets'
      },
      social: {
        title: 'Suivez-moi',
        github: 'Voir mes projets sur GitHub'
      }
    },
    en: {
      title: 'CONTACT ME',
      subtitle: 'Let\'s work together on your next project',
      form: {
        name: 'Full name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your.email@example.com',
        subjectPlaceholder: 'Subject of your message',
        messagePlaceholder: 'Describe your project or request...'
      },
      info: {
        title: 'Contact information',
        description: 'Feel free to contact me to discuss your projects or for any questions. I will respond as soon as possible.',
        available: 'Available for new projects'
      },
      social: {
        title: 'Follow me',
        github: 'View my projects on GitHub'
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: language === 'fr' ? 'Téléphone' : 'Phone',
      value: '0344319587',
      href: 'tel:0344319587'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'fetrarison5@gmail.com',
      href: 'mailto:fetrarison5@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: language === 'fr' ? 'Localisation' : 'Location',
      value: 'NANISANA, Madagascar',
      href: null
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'fetrarison',
      href: 'https://github.com/fetrarison'
    }
  ]

  return (
    <section ref={ref} id="contact" className="py-20 relative overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="revolutionary-card h-full">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-dark-700" />
                </div>
                <h3 className="text-2xl font-bold text-white">{content[language].info.title}</h3>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                {content[language].info.description}
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center group"
                  >
                    <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                      <div className="text-gold-500">{info.icon}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white hover:text-gold-400 transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-white font-medium">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gold-500/20 pt-6">
                <div className="flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-400 font-semibold">{content[language].info.available}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="revolutionary-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gold-400 mb-2">
                      {content[language].form.name}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={content[language].form.namePlaceholder}
                        className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gold-400 mb-2">
                      {content[language].form.email}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={content[language].form.emailPlaceholder}
                        className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gold-400 mb-2">
                    {content[language].form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={content[language].form.subjectPlaceholder}
                    className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gold-400 mb-2">
                    {content[language].form.message}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={content[language].form.messagePlaceholder}
                      rows={6}
                      className="w-full bg-dark-600 border border-gray-600 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full revolutionary-btn flex items-center justify-center space-x-2 shine-effect"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>{content[language].form.send}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-20 pt-10 border-t border-gold-500/20"
      >
        <p className="text-gray-400 mb-4">
          © 2025 FETRARISON Eric. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
        </p>
        <p className="text-sm text-gold-400">
          {language === 'fr' 
            ? 'Développé avec ❤️ en Next.js et Tailwind CSS'
            : 'Developed with ❤️ using Next.js and Tailwind CSS'
          }
        </p>
      </motion.div>

      {/* Effets de fond décoratifs */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Contact