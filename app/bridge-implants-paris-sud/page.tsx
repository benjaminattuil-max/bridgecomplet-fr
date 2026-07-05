import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants pour les Patients de Paris Sud | Dr Attuil' },
  description: 'Vous habitez Paris Sud (12e, 13e, 14e) ? Le cabinet du Dr Attuil est accessible en transports en commun pour votre bridge complet sur implants.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-sud` },
  openGraph: {
    title: 'Bridge complet sur implants — patients de Paris Sud',
    description: 'Le cabinet du Dr Attuil à Paris 11e, accessible depuis Paris Sud.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-sud`,
  },
}

const FAQS = [
  {
    question: "Comment se rendre au cabinet depuis Paris Sud ?",
    answer: `Le cabinet, situé ${SITE_CONFIG.address}, est accessible en métro depuis les 12e, 13e et 14e arrondissements, avec un trajet généralement direct ou à une correspondance selon votre point de départ.`
  },
  {
    question: "Le Dr Attuil reçoit-il des patients venant du 12e arrondissement, proche de Bastille ?",
    answer: "Oui, le 12e arrondissement est particulièrement proche du cabinet, situé juste à côté dans le 11e, ce qui en fait l'un des trajets les plus courts pour les patients du secteur."
  },
]

export default function ParisSudPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Bridge complet sur implants — Paris Sud' }]} />
          <p className="page-eyebrow">Paris 12e, 13e, 14e</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants pour les patients de Paris Sud
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Depuis les 12e, 13e et 14e arrondissements, le cabinet du Dr Benjamin Attuil reste facilement accessible pour votre parcours de soin.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Une accessibilité pratique</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le 12e arrondissement, notamment, est directement limitrophe du {SITE_CONFIG.arrondissement}, rendant le trajet particulièrement court pour les patients de ce secteur. Les 13e et 14e arrondissements restent également bien reliés par le réseau de métro parisien.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette accessibilité facilite le suivi complet d'un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link>, du <Link href="/consultation-implants-paris" className="text-brand-600 hover:underline">bilan initial</Link> jusqu'à la pose de la prothèse définitive.
          </p>

          <CTABox variant="inline"
            title="Prendre rendez-vous depuis Paris Sud"
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
