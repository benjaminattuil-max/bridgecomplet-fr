import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/seo'

interface CTABoxProps {
  title?: string
  subtitle?: string
  variant?: 'default' | 'compact' | 'inline'
}

export default function CTABox({
  title = 'Une question ? Prenez rendez-vous pour un bilan gratuit.',
  subtitle = 'Consultation de diagnostic — Réponse sous 24h',
  variant = 'default',
}: CTABoxProps) {
  if (variant === 'inline') {
    return (
      <div className="my-10 border-l-4 border-gold-400 pl-6 py-4 bg-brand-50 rounded-r-sm">
        <p className="font-serif text-lg font-semibold text-brand-800 mb-1">{title}</p>
        <p className="text-sm text-neutral-600 mb-4">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn-phone text-sm px-5 py-2.5">
            {SITE_CONFIG.phone}
          </a>
          <Link href="/consultation-implants-paris" className="btn-secondary text-sm px-5 py-2.5">
            RDV en ligne
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-brand-800 text-white rounded-sm p-8 md:p-12 text-center ${variant === 'compact' ? 'py-8' : ''}`}>
      <p className="font-serif text-2xl md:text-3xl font-bold mb-3">{title}</p>
      <p className="text-brand-200 mb-8">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn-phone">
          Appeler : {SITE_CONFIG.phone}
        </a>
        <Link href="/consultation-implants-paris" className="btn-secondary border-white text-white hover:bg-brand-700">
          Demander un RDV en ligne
        </Link>
      </div>
    </div>
  )
}
