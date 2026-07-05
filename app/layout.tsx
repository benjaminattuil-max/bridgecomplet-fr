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

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const dentistSchema = generateDentistSchema()

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
