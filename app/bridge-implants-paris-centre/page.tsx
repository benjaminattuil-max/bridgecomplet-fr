import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants pour les Patients de Paris Centre | Dr Attuil' },
  description: 'Vous habitez Paris Centre (1er-4e) ? Le cabinet du Dr Attuil, spécialiste du bridge complet sur implants, est facilement accessible.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-centre` },
  openGraph: {
    title: 'Bridge complet sur implants — patients de Paris Centre',
    description: 'Le cabinet du Dr Attuil à Paris 11e, facilement accessible depuis Paris Centre.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-centre`,
  },
}

const FAQS = [
  {
    question: "Le cabinet est-il facilement accessible depuis Paris Centre ?",
    answer: `Oui. Le cabinet du Dr Benjamin Attuil est situé au ${SITE_CONFIG.address}, dans le ${SITE_CONFIG.arrondissement}, à proximité immédiate des 1er, 2e, 3e et 4e arrondissements, bien desservi par plusieurs lignes de métro.`
  },
  {
    question: "Faut-il plusieurs déplacements pour un bridge complet sur implants ?",
    answer: "Oui, le parcours comprend plusieurs rendez-vous : la consultation de bilan avec scanner 3D, le jour de l'intervention, puis plusieurs contrôles post-opératoires jusqu'à la pose de la prothèse définitive plusieurs mois plus tard. La proximité du cabinet facilite ce suivi."
  },
  {
    question: "Peut-on se garer facilement près du cabinet ?",
    answer: "Le quartier étant central, les places de stationnement en voirie peuvent être limitées aux heures de pointe. Les transports en commun restent la solution la plus pratique pour se rendre au cabinet depuis Paris Centre."
  },
]

export default function ParisCentrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Bridge complet sur implants — Paris Centre' }]} />
          <p className="page-eyebrow">Paris 1er, 2e, 3e, 4e</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants pour les patients de Paris Centre
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le cabinet du Dr Benjamin Attuil, à Paris 11e, accueille de nombreux patients venant de Paris Centre pour leur traitement de bridge complet sur implants.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Un cabinet central, facile d'accès</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Situé au {SITE_CONFIG.address}, le cabinet du Dr Attuil se trouve à quelques stations de métro des 1er, 2e, 3e et 4e arrondissements, ce qui en fait une destination pratique pour les patients de Paris Centre à la recherche d'un spécialiste exclusif de l'implantologie.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Le traitement d'un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link> nécessite plusieurs visites échelonnées sur quelques mois : la proximité géographique facilite grandement ce suivi, sans les contraintes d'un long trajet régulier.
          </p>

          <CTABox variant="inline"
            title="Prendre rendez-vous depuis Paris Centre"
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
