import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Venir de Province pour un Bridge Complet sur Implants à Paris | Dr Attuil' },
  description: 'Vous habitez en province et cherchez un spécialiste du bridge complet sur implants ? Le Dr Attuil accompagne des patients de toute la France.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-province-paris` },
  openGraph: {
    title: 'Venir de province pour un bridge complet sur implants à Paris',
    description: 'Comment organiser un traitement de bridge complet sur implants à Paris en venant de province.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-province-paris`,
  },
}

const FAQS = [
  {
    question: "Peut-on suivre tout le traitement en venant de province ?",
    answer: "Oui, de nombreux patients de province choisissent de se faire traiter à Paris par le Dr Attuil. Le calendrier des rendez-vous (bilan, intervention, contrôles) est organisé en concertation pour limiter au maximum le nombre de déplacements nécessaires."
  },
  {
    question: "Combien de venues à Paris sont nécessaires au total ?",
    answer: "Le parcours comprend généralement une consultation de bilan, le jour de l'intervention (qui peut parfois être combiné avec le bilan selon les cas), puis quelques contrôles post-opératoires jusqu'à la pose de la prothèse définitive 4 à 6 mois plus tard. Ce nombre est optimisé au cas par cas."
  },
  {
    question: "Où loger pendant le séjour lié à l'intervention ?",
    answer: "De nombreux hôtels sont disponibles à proximité du cabinet, dans le 11e arrondissement et ses environs. Le cabinet peut vous orienter sur ce point lors de l'organisation de votre venue."
  },
  {
    question: "Le suivi à distance est-il possible entre les rendez-vous ?",
    answer: "Pour toute question entre les rendez-vous physiques, un contact direct avec le cabinet reste possible par téléphone. Les contrôles cliniques et radiographiques nécessitent en revanche une présence physique au cabinet."
  },
]

export default function ProvincePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Bridge complet sur implants — Patients de province' }]} />
          <p className="page-eyebrow">Toute la France</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Venir de province pour un bridge complet sur implants à Paris
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            De nombreux patients de province choisissent de se déplacer à Paris pour bénéficier de l'expertise exclusive du Dr Benjamin Attuil en implantologie.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Un parcours organisé pour limiter les déplacements</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le traitement d'un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link> ne nécessite pas des venues fréquentes : après la <Link href="/consultation-implants-paris" className="text-brand-600 hover:underline">consultation de bilan</Link>, le <Link href="/deroulement-journee-traitement" className="text-brand-600 hover:underline">jour de l'intervention</Link> et quelques contrôles post-opératoires suffisent généralement jusqu'à la pose de la prothèse définitive.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette organisation, pensée pour les patients venant de loin, permet de bénéficier d'une expertise exclusivement dédiée à l'implantologie sans que la distance ne devienne un frein réel au projet.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Bien préparer votre venue</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Paris étant bien desservi par train depuis toute la France, la logistique du déplacement reste simple. Le cabinet, accessible facilement en transports en commun depuis les gares parisiennes, peut vous conseiller sur l'organisation pratique de votre séjour (logement, durée à prévoir) lors de la prise de contact.
          </p>

          <CTABox variant="inline"
            title="Organiser votre traitement depuis la province"
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
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
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
