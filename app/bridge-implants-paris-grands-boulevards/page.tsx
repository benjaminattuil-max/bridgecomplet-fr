import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants — Patients des Grands Boulevards | Dr Attuil' },
  description: 'Vous habitez près des Grands Boulevards (9e, 10e) ? Le cabinet du Dr Attuil, à quelques stations de métro, est spécialisé en bridge complet sur implants.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-grands-boulevards` },
  openGraph: {
    title: 'Bridge complet sur implants — patients des Grands Boulevards',
    description: 'Le cabinet du Dr Attuil à Paris 11e, à proximité des Grands Boulevards.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-grands-boulevards`,
  },
}

const FAQS = [
  {
    question: "Le cabinet est-il proche du quartier des Grands Boulevards ?",
    answer: `Oui, le ${SITE_CONFIG.arrondissement} est limitrophe du quartier des Grands Boulevards (9e et 10e arrondissements), avec un trajet rapide en métro depuis ces secteurs.`
  },
  {
    question: "Peut-on obtenir un rendez-vous rapidement depuis ce quartier ?",
    answer: "La consultation de bilan initiale peut généralement être obtenue rapidement, avec une réponse sous 24h suite à votre demande en ligne ou par téléphone."
  },
]

export default function ParisGrandsBoulevardsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Bridge complet sur implants — Grands Boulevards' }]} />
          <p className="page-eyebrow">Paris 9e, 10e</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants pour les patients des Grands Boulevards
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Un accès rapide depuis les 9e et 10e arrondissements pour bénéficier de l'expertise du Dr Benjamin Attuil en bridge complet sur implants.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Un quartier voisin, un trajet court</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le {SITE_CONFIG.arrondissement} est directement voisin du secteur des Grands Boulevards, ce qui rend le cabinet du Dr Attuil particulièrement accessible pour les habitants et actifs des 9e et 10e arrondissements.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Que vous cherchiez une <Link href="/consultation-implants-paris" className="text-brand-600 hover:underline">consultation de bilan</Link> ou souhaitiez avancer directement vers un projet de <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link>, la proximité géographique facilite un suivi régulier sans contrainte de déplacement excessive.
          </p>

          <CTABox variant="inline"
            title="Prendre rendez-vous depuis les Grands Boulevards"
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
