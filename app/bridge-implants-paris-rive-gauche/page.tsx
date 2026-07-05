import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants pour les Patients de la Rive Gauche | Dr Attuil' },
  description: 'Vous habitez la Rive Gauche (5e-15e) ? Découvrez comment rejoindre facilement le cabinet du Dr Attuil pour votre bridge complet sur implants.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-rive-gauche` },
  openGraph: {
    title: 'Bridge complet sur implants — patients de la Rive Gauche',
    description: 'Le cabinet du Dr Attuil à Paris 11e, accessible depuis la Rive Gauche.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-rive-gauche`,
  },
}

const FAQS = [
  {
    question: "Le trajet depuis la Rive Gauche est-il long pour se rendre au cabinet ?",
    answer: `Le cabinet, situé ${SITE_CONFIG.address} dans le ${SITE_CONFIG.arrondissement}, reste accessible en métro depuis les arrondissements de la Rive Gauche, avec généralement une ou deux correspondances selon votre point de départ précis.`
  },
  {
    question: "Peut-on organiser les rendez-vous pour limiter les déplacements ?",
    answer: "Oui, le calendrier des rendez-vous (bilan, intervention, contrôles) est établi avec vous pour optimiser au mieux le nombre et l'organisation de vos venues au cabinet tout au long du traitement."
  },
  {
    question: "Le Dr Attuil reçoit-il des patients de toute la Rive Gauche ?",
    answer: "Oui, des patients venant des 5e, 6e, 7e, 13e, 14e et 15e arrondissements consultent régulièrement le Dr Attuil pour un bilan implantaire ou un traitement de bridge complet."
  },
]

export default function ParisRiveGauchePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Bridge complet sur implants — Rive Gauche' }]} />
          <p className="page-eyebrow">Paris 5e, 6e, 7e, 13e, 14e, 15e</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants pour les patients de la Rive Gauche
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le cabinet du Dr Benjamin Attuil accueille régulièrement des patients venant des arrondissements de la Rive Gauche pour leur traitement de bridge complet sur implants.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Un trajet simple malgré la distance</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Si vous résidez sur la Rive Gauche, le cabinet du Dr Attuil, situé {SITE_CONFIG.address}, reste accessible sans difficulté majeure grâce au réseau de métro parisien. De nombreux patients de ces arrondissements font ce choix pour bénéficier d'une expertise exclusivement dédiée à l'implantologie.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Le suivi d'un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link> s'étale sur plusieurs mois, avec un nombre de rendez-vous limité et planifié à l'avance, ce qui rend la distance rarement un obstacle réel pour les patients motivés par la qualité du suivi.
          </p>

          <CTABox variant="inline"
            title="Prendre rendez-vous depuis la Rive Gauche"
            subtitle="Consultation de bilan disponible rapidement — réponse sous 24h."
          />

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Questions fréquentes</h2>
          <div className="space-y-4 mb-12">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-6">
                <h3 className="font-serif font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-neutral-100 mb-12">
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Lire aussi</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Le chirurgien', href: '/chirurgien-implantologiste-paris' },
                { label: 'Consultation', href: '/consultation-implants-paris' },
                { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="tag hover:bg-brand-100 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <CTABox />
        </div>
      </article>
    </>
  )
}
