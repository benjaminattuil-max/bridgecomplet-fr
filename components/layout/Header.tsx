'use client'
import Link from 'next/link'
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/seo'

const NAV_ITEMS = [
  {
    label: 'Le traitement',
    href: '/bridge-complet-sur-implants',
    children: [
      { label: 'Qu\'est-ce qu\'un bridge complet ?', href: '/bridge-complet-sur-implants' },
      { label: 'All-on-4', href: '/all-on-4' },
      { label: 'All-on-6', href: '/all-on-6' },
      { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
      { label: 'Sédation consciente', href: '/sedation-consciente-implants' },
      { label: 'Durée de vie', href: '/duree-vie-bridge-implants' },
    ],
  },
  {
    label: 'Votre situation',
    href: '/edenté-total-solution-implants',
    children: [
      { label: 'Je suis totalement édenté', href: '/edenté-total-solution-implants' },
      { label: 'Je vais perdre mes dents', href: '/perdre-toutes-dents-solution' },
      { label: 'Je porte un dentier', href: '/appareil-complet-bridge-implants' },
      { label: 'J\'ai une parodontite', href: '/parodontite-et-implants' },
      { label: 'J\'ai peu d\'os', href: '/peu-os-implants-possible' },
    ],
  },
  {
    label: 'Vos questions',
    href: '/faq-bridge-complet-implants',
    children: [
      { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
      { label: 'Quel est le prix ?', href: '/prix-bridge-complet-implants' },
      { label: 'Financement', href: '/financement-bridge-implants' },
      { label: 'Taux de succès', href: '/taux-succes-implants-dentaires' },
      { label: 'FAQ complète', href: '/faq-bridge-complet-implants' },
    ],
  },
  { label: 'Cas cliniques', href: '/temoignages-patients-bridge-implants' },
  { label: 'Le chirurgien', href: '/chirurgien-implantologiste-paris' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      <div className="container-wide px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-serif text-lg font-bold text-brand-800 group-hover:text-brand-600 transition-colors">
              {SITE_CONFIG.doctorName}
            </span>
            <span className="text-xs text-neutral-400 tracking-wide">
              Implantologie Exclusive · Paris
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-700 transition-colors rounded flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-neutral-100 shadow-lg rounded-sm py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + menu mobile */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
              aria-label={`Appeler le ${SITE_CONFIG.phone}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE_CONFIG.phone}
            </a>

            <Link href="/consultation-implants-paris" className="btn-primary text-sm px-5 py-2.5">
              Prendre RDV
            </Link>

            {/* Burger mobile */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white py-4 px-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block py-2 font-medium text-neutral-800"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 border-l border-neutral-100 mb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 text-sm text-neutral-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-neutral-100">
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn-phone w-full justify-center">
              Appeler maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
