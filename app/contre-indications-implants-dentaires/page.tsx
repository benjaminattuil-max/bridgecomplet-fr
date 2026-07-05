import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Contre-indications aux Implants Dentaires : Quels Cas ? | Dr Attuil' },
  description: 'Existe-t-il des contre-indications aux implants dentaires ? Le Dr Benjamin Attuil fait le point sur les rares situations qui empêchent réellement ce traitement.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/contre-indications-implants-dentaires` },
  openGraph: {
    title: 'Contre-indications aux implants dentaires : le point complet',
    description: 'Les situations qui contre-indiquent réellement la pose d\'implants dentaires, et celles qui ne le font pas.',
    url: `${SITE_CONFIG.siteUrl}/contre-indications-implants-dentaires`,
  },
}

const ABSOLUTE = [
  'Certaines maladies osseuses sévères non stabilisées',
  'Traitement par bisphosphonates à haute dose ou antirésorptifs osseux dans un contexte oncologique, sans avis favorable de l\'oncologue',
  'Radiothérapie récente de la sphère cervico-faciale, sans évaluation spécialisée préalable',
  'Trouble sévère de la coagulation non contrôlé',
]

const RELATIVE = [
  { title: 'Tabagisme actif', desc: 'Augmente le risque d\'échec mais n\'empêche pas le traitement ; l\'arrêt ou la réduction du tabac est fortement recommandé.' },
  { title: 'Diabète non équilibré', desc: 'Un déséquilibre temporaire peut retarder le traitement, le temps de stabiliser la glycémie avec le médecin traitant.' },
  { title: 'Bruxisme sévère non traité', desc: 'Nécessite une prise en charge (gouttière de protection) avant ou en complément du traitement implantaire.' },
  { title: 'Âge avancé', desc: 'N\'est pas une contre-indication en soi ; c\'est l\'état de santé général qui prime, quel que soit l\'âge.' },
  { title: 'Grossesse', desc: 'Les interventions non urgentes sont généralement reportées après l\'accouchement, par précaution.' },
]

const FAQS = [
  {
    question: "Quelles sont les vraies contre-indications aux implants dentaires ?",
    answer: "Les contre-indications absolues sont rares : certaines maladies osseuses sévères non stabilisées, certains traitements oncologiques touchant l'os sans avis favorable de l'oncologue, une radiothérapie cervico-faciale récente, ou un trouble sévère de la coagulation non contrôlé. La plupart des autres situations (tabac, diabète, âge) sont des facteurs de risque à gérer, pas des interdictions absolues."
  },
  {
    question: "Le tabac est-il une contre-indication aux implants ?",
    answer: "Non, ce n'est pas une contre-indication absolue, mais un facteur de risque important qui augmente le taux d'échec. L'arrêt ou à défaut la réduction du tabac avant et après l'intervention est fortement recommandée pour maximiser les chances de succès."
  },
  {
    question: "L'âge est-il un frein à la pose d'implants ?",
    answer: "Non, l'âge en lui-même n'est pas une contre-indication. C'est l'état de santé général, la prise de certains traitements et la qualité osseuse qui déterminent la faisabilité, quel que soit l'âge du patient."
  },
  {
    question: "Comment savoir si l'on a une contre-indication ?",
    answer: "Un bilan médical complet, incluant votre historique de santé, vos traitements en cours et un scanner 3D, est réalisé lors de la consultation de bilan. C'est cette évaluation individualisée qui permet de confirmer l'absence de contre-indication, plutôt qu'une liste générale."
  },
]

export default function ContreIndicationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Contre-indications' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Contre-indications aux implants dentaires : le point complet
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Les vraies contre-indications absolues sont rares. La plupart des situations évoquées comme des freins sont en réalité des facteurs de risque à gérer, pas des interdictions.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Les contre-indications absolues (rares)</h2>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            {ABSOLUTE.map((item) => (
              <li key={item} className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>{item}</li>
            ))}
          </ul>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Les contre-indications relatives (facteurs de risque à gérer)</h2>
          <div className="space-y-3 mb-10">
            {RELATIVE.map((r) => (
              <div key={r.title} className="border-l-2 border-neutral-200 pl-4 py-1">
                <p className="font-semibold text-neutral-800 text-sm mb-1">{r.title}</p>
                <p className="text-neutral-600 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-neutral-700 mb-8 leading-relaxed">
            Pour approfondir des situations spécifiques, consultez nos pages dédiées aux <Link href="/implants-diabetes" className="text-brand-600 hover:underline">implants et diabète</Link>, aux <Link href="/implants-apres-chimiotherapie" className="text-brand-600 hover:underline">implants après chimiothérapie</Link>, et aux <Link href="/bridge-implants-personnes-agees" className="text-brand-600 hover:underline">implants chez les personnes âgées</Link>.
          </p>

          <CTABox variant="inline"
            title="Une situation médicale particulière ?"
            subtitle="Le bilan de consultation permet une évaluation individualisée et transparente."
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
                { label: 'Implants et diabète', href: '/implants-diabetes' },
                { label: 'Implants après chimiothérapie', href: '/implants-apres-chimiotherapie' },
                { label: 'Implants et tabac', href: '/implants-tabac-risques' },
                { label: 'Bridge implants et personnes âgées', href: '/bridge-implants-personnes-agees' },
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
