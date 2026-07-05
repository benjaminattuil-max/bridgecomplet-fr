import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Implants Dentaires et Tabac : Quels Risques ? | Dr Attuil' },
  description: 'Le tabac augmente-t-il le risque d\'échec des implants dentaires ? Le Dr Attuil détaille l\'impact du tabagisme et ses recommandations.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/implants-tabac-risques` },
  openGraph: {
    title: 'Implants dentaires et tabac : les risques réels',
    description: 'L\'impact du tabagisme sur le succès des implants dentaires, et comment le limiter.',
    url: `${SITE_CONFIG.siteUrl}/implants-tabac-risques`,
  },
}

const FAQS = [
  {
    question: "Le tabac empêche-t-il la pose d'implants dentaires ?",
    answer: "Non, ce n'est pas une contre-indication absolue, mais un facteur de risque majeur et bien documenté. Le tabac peut diviser par deux ou trois le taux de succès des implants selon certaines études, en raison de son impact sur la vascularisation osseuse et la cicatrisation."
  },
  {
    question: "Pourquoi le tabac augmente-t-il le risque d'échec ?",
    answer: "La nicotine provoque une vasoconstriction qui réduit l'apport sanguin aux tissus, ralentissant la cicatrisation et l'ostéointégration des implants. Le tabac augmente aussi le risque d'infection et de péri-implantite sur le long terme."
  },
  {
    question: "Faut-il arrêter de fumer avant la pose d'implants ?",
    answer: "C'est fortement recommandé, idéalement plusieurs semaines avant l'intervention et pendant toute la période de cicatrisation qui suit. Même une réduction significative de la consommation améliore les chances de succès par rapport à un tabagisme non maîtrisé."
  },
  {
    question: "Un fumeur peut-il quand même bénéficier d'un bridge complet sur implants ?",
    answer: "Oui, la grande majorité des fumeurs peuvent bénéficier d'un traitement implantaire, sous réserve d'une information claire sur les risques accrus et d'un accompagnement pour réduire ou arrêter le tabac autour de la période de l'intervention."
  },
]

export default function ImplantsTabacPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Implants et tabac' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Implants dentaires et tabac : les risques réels
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le tabac n'interdit pas les implants, mais en augmente sensiblement le risque d'échec. Voici pourquoi, et comment limiter cet impact.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Le tabac n'est <strong>pas une contre-indication absolue</strong>, mais un <strong>facteur de risque majeur</strong> qui peut réduire significativement le taux de succès des implants. L'arrêt, même temporaire autour de l'intervention, améliore nettement le pronostic.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Pourquoi le tabac est-il un facteur de risque ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La nicotine provoque une vasoconstriction des vaisseaux sanguins, réduisant l'apport d'oxygène et de nutriments nécessaires à la cicatrisation osseuse. Ce phénomène ralentit l'<Link href="/mise-en-charge-immediate" className="text-brand-600 hover:underline">ostéointégration</Link> et augmente le risque d'infection post-opératoire.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Sur le long terme, le tabac est également un facteur de risque bien identifié de <Link href="/echec-implant-que-faire" className="text-brand-600 hover:underline">péri-implantite</Link>, l'infection chronique qui peut compromettre la stabilité des implants des années après leur pose.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Nos recommandations</h2>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Arrêter ou réduire fortement le tabac <strong>plusieurs semaines avant</strong> l'intervention</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Maintenir cette réduction pendant toute la <strong>période de cicatrisation</strong> (4 à 6 mois)</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Renforcer l'<Link href="/entretien-bridge-implants" className="underline">hygiène bucco-dentaire</Link> sur le long terme</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Prévoir des <strong>contrôles plus rapprochés</strong> pour surveiller la santé des implants</li>
          </ul>

          <CTABox variant="inline"
            title="Fumeur et intéressé par un bridge complet ?"
            subtitle="Le Dr Attuil vous accompagne avec une information claire et sans jugement."
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
                { label: 'Contre-indications aux implants', href: '/contre-indications-implants-dentaires' },
                { label: 'Taux de succès des implants', href: '/taux-succes-implants-dentaires' },
                { label: 'Échec d\'implant : que faire ?', href: '/echec-implant-que-faire' },
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
