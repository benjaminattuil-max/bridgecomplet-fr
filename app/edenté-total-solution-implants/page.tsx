import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Édentement Total : la Solution du Bridge Complet sur Implants | Dr Attuil' },
  description: 'Vous n\'avez plus aucune dent sur une ou deux arcades ? Le Dr Attuil explique pourquoi le bridge complet sur implants est la solution de référence.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/edenté-total-solution-implants` },
  openGraph: {
    title: 'Édentement total : quelle solution avec les implants ?',
    description: 'Le bridge complet sur implants, solution de référence pour l\'édentement total.',
    url: `${SITE_CONFIG.siteUrl}/edenté-total-solution-implants`,
  },
}

const FAQS = [
  {
    question: "Peut-on poser des implants même sans aucune dent restante ?",
    answer: "Oui, c'est précisément l'indication principale du bridge complet sur implants. Qu'il vous reste zéro, une ou plusieurs dents sur l'arcade, le protocole All-on-4 ou All-on-6 permet de reconstruire une arcade complète fixe sur un nombre limité d'implants."
  },
  {
    question: "Faut-il un volume osseux important en cas d'édentement total ?",
    answer: "Un édentement ancien s'accompagne souvent d'une certaine résorption osseuse, mais les techniques actuelles (implants inclinés, zygomatiques, ptérygoïdiens) permettent de traiter la grande majorité des situations sans greffe osseuse lourde."
  },
  {
    question: "Peut-on traiter les deux mâchoires en même temps ?",
    answer: "Oui, il est possible de traiter le haut et le bas simultanément ou successivement, selon votre situation clinique, vos préférences et le plan de traitement établi lors du bilan."
  },
  {
    question: "Combien de temps pour retrouver des dents fixes en cas d'édentement total ?",
    answer: "Grâce à la mise en charge immédiate, une prothèse provisoire fixe peut être posée le jour même de la pose des implants, quel que soit le point de départ (dentier, édentement total non appareillé, dents résiduelles à extraire)."
  },
]

export default function EdenteTotalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Édentement total' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Édentement total : la solution du bridge complet sur implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Vous n'avez plus aucune dent sur une ou deux arcades ? C'est précisément la situation pour laquelle le bridge complet sur implants a été conçu.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Une solution pensée pour votre situation</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            L'édentement total — la perte complète des dents sur une arcade — était autrefois traité uniquement par un dentier amovible complet. Le <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link> offre aujourd'hui une alternative fixe : 4 à 8 implants suffisent à ancrer une arcade entière de dents, sans dépendre de chaque dent individuellement comme le ferait un dentier posé sur la gencive.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Que votre édentement soit récent ou ancien, appareillé par un dentier depuis des années ou non traité, une évaluation précise par scanner 3D permet de déterminer la solution la mieux adaptée à votre anatomie.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Et si vous portez un dentier depuis longtemps ?</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Un édentement ancien s'accompagne généralement d'une résorption osseuse progressive, la mâchoire n'étant plus stimulée par les racines dentaires. Cette situation, loin d'être un obstacle, est prise en compte lors de la planification : les techniques modernes (implants inclinés, zygomatiques) permettent de traiter la grande majorité de ces cas sans greffe lourde. Voir notre page dédiée si vous <Link href="/deteste-dentier-alternative-fixe" className="text-brand-600 hover:underline">détestez votre dentier actuel</Link>.
          </p>

          <CTABox variant="inline"
            title="Retrouver des dents fixes, quelle que soit votre situation de départ"
            subtitle="Le bilan avec scanner 3D permet d'évaluer précisément votre cas."
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
                { label: 'Je vais perdre mes dents', href: '/perdre-toutes-dents-solution' },
                { label: 'Je déteste mon dentier', href: '/deteste-dentier-alternative-fixe' },
                { label: 'Dentier vs bridge sur implants', href: '/dentier-vs-bridge-implants' },
                { label: 'Peu d\'os, est-ce possible ?', href: '/peu-os-implants-possible' },
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
