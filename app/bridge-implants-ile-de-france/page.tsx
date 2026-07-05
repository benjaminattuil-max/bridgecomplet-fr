import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants pour les Patients d\'Île-de-France | Dr Attuil' },
  description: 'Vous habitez en Île-de-France ? Le cabinet du Dr Attuil, accessible en RER et transports en commun, accompagne des patients de toute la région.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-ile-de-france` },
  openGraph: {
    title: 'Bridge complet sur implants — patients d\'Île-de-France',
    description: 'Le cabinet du Dr Attuil à Paris 11e, accessible depuis toute l\'Île-de-France.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-ile-de-france`,
  },
}

const FAQS = [
  {
    question: "Le cabinet accueille-t-il des patients de banlieue parisienne ?",
    answer: "Oui, une part importante des patients du Dr Attuil vient de toute l'Île-de-France, motivée par sa spécialisation exclusive en implantologie et bridge complet, difficile à trouver dans certains secteurs de la région."
  },
  {
    question: "Comment organiser un traitement avec un trajet plus long ?",
    answer: "Le nombre de rendez-vous nécessaires (bilan, intervention, contrôles) est limité et planifié à l'avance. De nombreux patients d'Île-de-France organisent ces venues autour de leurs disponibilités personnelles ou professionnelles sans difficulté particulière."
  },
  {
    question: "Existe-t-il un parking à proximité du cabinet ?",
    answer: "Le quartier dispose de quelques parkings publics à proximité. Les transports en commun (métro, RER via les grandes gares parisiennes) restent néanmoins la solution la plus simple pour la majorité des trajets depuis l'Île-de-France."
  },
]

export default function IleDeFrancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Bridge complet sur implants — Île-de-France' }]} />
          <p className="page-eyebrow">Toute la région parisienne</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants pour les patients d'Île-de-France
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le cabinet du Dr Benjamin Attuil accueille de nombreux patients venant de toute l'Île-de-France, à la recherche d'une expertise exclusive en implantologie.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Un cabinet accessible depuis toute la région</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Situé au {SITE_CONFIG.address}, à quelques minutes des grandes gares et lignes de RER parisiennes, le cabinet du Dr Attuil reste accessible depuis la plupart des communes d'Île-de-France, moyennant un trajet combinant RER ou train puis métro.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            La spécialisation exclusive du Dr Attuil dans le <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link> — une expertise que l'on ne retrouve pas dans tous les cabinets de proximité — motive de nombreux patients à privilégier ce déplacement pour la qualité du suivi et des résultats.
          </p>

          <CTABox variant="inline"
            title="Prendre rendez-vous depuis l'Île-de-France"
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
                { label: 'Bridge implants Province vs Paris', href: '/bridge-implants-province-paris' },
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
