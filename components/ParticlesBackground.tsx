'use client'

import { useEffect } from 'react'

const ParticlesBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + 'vw'
      particle.style.animationDuration = (Math.random() * 20 + 10) + 's'
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString()
      particle.style.animationDelay = Math.random() * 20 + 's'
      
      const particlesContainer = document.querySelector('.particles')
      if (particlesContainer) {
        particlesContainer.appendChild(particle)
        
        // Nettoyer les particules après animation
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle)
          }
        }, 30000)
      }
    }

    // Créer des particules initiales
    for (let i = 0; i < 50; i++) {
      setTimeout(createParticle, i * 100)
    }

    // Créer de nouvelles particules périodiquement
    const interval = setInterval(createParticle, 300)

    return () => clearInterval(interval)
  }, [])

  return <div className="particles"></div>
}

export default ParticlesBackground