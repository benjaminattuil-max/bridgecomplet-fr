import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { defaultMetadata, generateDentistSchema, SITE_CONFIG } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Mode maintenance temporaire : passer à false pour remettre le site en ligne normalement.
const MAINTENANCE_MODE = true

export const metadata: Metadata = MAINTENANCE_MODE
  ? {
      title: { absolute: 'Site en cours de mise à jour — Dr Benjamin Attuil' },
      robots: { index: false, follow: false },
    }
  : defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const dentistSchema = generateDentistSchema()

  if (MAINTENANCE_MODE) {
    return (
      <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
        <body
          className="font-sans antialiased"
          style={{
            background: '#0d1a40',
            color: '#ffffff',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div style={{ maxWidth: 560, textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#d4a54a', marginBottom: 16 }}>
              Mise à jour en cours
            </p>
            <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.25, marginBottom: 20 }}>
              Le site est en cours d&apos;actualisation
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#b3ccff', marginBottom: 32 }}>
              Nous mettons à jour le contenu du site pour vous offrir une information encore plus complète.
              Le site sera de nouveau en ligne très prochainement.
              Pour toute question ou prise de rendez-vous, contactez directement le cabinet.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#b8892e', color: '#ffffff', fontWeight: 700, fontSize: 16, padding: '14px 28px', borderRadius: 4, textDecoration: 'none' }}
            >
              📞 {SITE_CONFIG.phone}
            </a>
            <p style={{ marginTop: 40, fontSize: 14, color: '#7a8bc4' }}>
              Dr Benjamin Attuil — Implantologie Exclusive, Paris 11e
            </p>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* JSON-LD global — cabinet médical */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        {/* Préconnexion Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans text-neutral-900 bg-white antialiased">
        {/* Barre d'urgence — téléphone toujours visible */}
        <div className="bg-brand-700 text-white text-sm py-2 px-4 text-center">
          <span className="opacity-80">Consultation implants Paris — </span>
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="font-semibold hover:underline">
            {SITE_CONFIG.phone}
          </a>
          <span className="opacity-80"> — Du lundi au vendredi 9h–18h</span>
        </div>

        <Header />

        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
