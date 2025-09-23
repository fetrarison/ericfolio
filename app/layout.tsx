import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FETRARISON Eric - Développeur Full-Stack',
  description: 'Portfolio révolutionnaire de FETRARISON Eric, développeur full-stack passionné par les technologies modernes et l\'innovation.',
  keywords: ['développeur', 'full-stack', 'React', 'Next.js', 'JavaScript', 'portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}