import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/seo'

const FOOTER_LINKS = {
  'Le traitement': [
    { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
    { label: 'All-on-4', href: '/all-on-4' },
    { label: 'All-on-6', href: '/all-on-6' },
    { label: 'Mise en charge immédiate', href: '/mise-en-charge-immediate' },
    { label: 'Sédation consciente', href: '/sedation-consciente-implants' },
    { label: 'Durée de vie', href: '/duree-vie-bridge-implants' },
  ],
  'Votre situation': [
    { label: 'Je suis édenté total', href: '/edenté-total-solution-implants' },
    { label: 'Je vais perdre mes dents', href: '/perdre-toutes-dents-solution' },
    { label: 'Je déteste mon dentier', href: '/deteste-dentier-alternative-fixe' },
    { label: 'J\'ai peu d\'os', href: '/peu-os-implants-possible' },
    { label: 'J\'ai une parodontite', href: '/parodontite-et-implants' },
  ],
  'Informations': [
    { label: 'Prix et financement', href: '/prix-bridge-complet-implants' },
    { label: 'FAQ complète', href: '/faq-bridge-complet-implants' },
    { label: 'Cas cliniques', href: '/temoignages-patients-bridge-implants' },
    { label: 'Le chirurgien', href: '/chirurgien-implantologiste-paris' },
    { label: 'Glossaire', href: '/glossaire-implantologie' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Bande CTA */}
      <div className="bg-brand-800 py-10 px-4">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl font-bold mb-1">Prêt à retrouver un sourire fixe ?</p>
            <p className="text-brand-200 text-sm">Consultation de diagnostic disponible — réponse sous 24h</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn-phone whitespace-nowrap">
              {SITE_CONFIG.phone}
            </a>
            <Link href="/consultation-implants-paris" className="btn-secondary border-white text-white hover:bg-brand-700 whitespace-nowrap">
              Demander un RDV en ligne
            </Link>
          </div>
        </div>
      </div>

      {/* Corps du footer */}
      <div className="section-sm px-4">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* Identité */}
            <div>
              <p className="font-serif text-lg font-bold mb-1">{SITE_CONFIG.doctorName}</p>
              <p className="text-neutral-400 text-sm mb-4">{SITE_CONFIG.doctorTitle}</p>
              <address className="not-italic text-sm text-neutral-400 space-y-1">
                <p>{SITE_CONFIG.address}</p>
                <p>{SITE_CONFIG.postalCode} {SITE_CONFIG.city}</p>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="block hover:text-white transition-colors mt-2 font-medium">
                  {SITE_CONFIG.phone}
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-white transition-colors text-xs">
                  {SITE_CONFIG.email}
                </a>
              </address>
            </div>

            {/* Liens */}
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">{category}</p>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Barre basse */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <p>© {year} {SITE_CONFIG.cabinetName} — Tous droits réservés</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
              <Link href="/plan-du-site" className="hover:text-white transition-colors">Plan du site</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
