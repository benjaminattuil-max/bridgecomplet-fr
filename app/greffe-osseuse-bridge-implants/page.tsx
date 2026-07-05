import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Greffe Osseuse avant Implants Dentaires | Dr Attuil' },
  description: 'La greffe osseuse est-elle systématique avant la pose d\'implants ? Le Dr Attuil explique quand elle est réellement nécessaire, et les alternatives.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/greffe-osseuse-bridge-implants` },
  openGraph: {
    title: 'Greffe osseuse avant implants : quand est-elle nécessaire ?',
    description: 'Les situations où une greffe osseuse est nécessaire avant la pose d\'implants, et les alternatives possibles.',
    url: `${SITE_CONFIG.siteUrl}/greffe-osseuse-bridge-implants`,
  },
}

const FAQS = [
  {
    question: "La greffe osseuse est-elle systématique avant la pose d'implants ?",
    answer: "Non, absolument pas. Grâce aux techniques comme l'All-on-4 avec implants inclinés, les implants zygomatiques ou ptérygoïdiens, la grande majorité des bridges complets sont aujourd'hui réalisés sans greffe osseuse préalable. Elle n'est nécessaire que lorsque le volume osseux est réellement insuffisant pour ces alternatives."
  },
  {
    question: "En quoi consiste une greffe osseuse dentaire ?",
    answer: "Elle consiste à ajouter du matériau osseux (d'origine synthétique, animale ou parfois prélevé sur le patient lui-même) dans une zone où l'os est insuffisant, afin de permettre la pose d'implants dans de bonnes conditions quelques mois plus tard, une fois la greffe intégrée."
  },
  {
    question: "Combien de temps faut-il attendre après une greffe osseuse ?",
    answer: "Le délai de cicatrisation varie de 4 à 9 mois selon le type et l'ampleur de la greffe, avant de pouvoir poser les implants. C'est précisément ce délai que les techniques alternatives (implants inclinés, zygomatiques) permettent souvent d'éviter."
  },
  {
    question: "La greffe osseuse est-elle douloureuse ?",
    answer: "Réalisée sous anesthésie locale, l'intervention elle-même n'est pas douloureuse. Les suites sont comparables à celles d'une extraction dentaire ou d'une pose d'implant classique, avec une gêne modérée gérée par les antalgiques prescrits."
  },
]

export default function GreffeOsseusePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'Greffe osseuse pré-implantaire',
          'Intervention consistant à augmenter le volume osseux disponible avant la pose d\'implants dentaires, réservée aux cas où les techniques alternatives ne suffisent pas.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Greffe osseuse' }
          ]} />
          <p className="page-eyebrow">Une étape parfois évitable</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Greffe osseuse avant implants : quand est-elle vraiment nécessaire ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            C'est l'une des craintes les plus fréquentes : devoir subir une greffe osseuse lourde avant de pouvoir poser des implants. Dans la majorité des cas, ce n'est pourtant pas nécessaire.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Non, la greffe osseuse <strong>n'est pas systématique</strong>. Les techniques comme l'<Link href="/all-on-4" className="text-brand-700 underline">All-on-4</Link>, les implants zygomatiques ou ptérygoïdiens permettent d'éviter la greffe dans la grande majorité des cas de bridge complet, même en présence d'un os limité.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Quand la greffe reste-t-elle nécessaire ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Une greffe osseuse est envisagée lorsque le volume osseux est insuffisant pour obtenir une <strong>stabilité primaire</strong> satisfaisante des implants, même avec les techniques d'implants inclinés ou d'ancrage alternatif. Cela concerne surtout les cas de résorption osseuse très avancée, souvent après de nombreuses années d'édentement non traité.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Le type de greffe dépend de la zone concernée : un <Link href="/sinus-lift-implants" className="text-brand-600 hover:underline">sinus lift</Link> pour le maxillaire postérieur, une greffe en bloc ou en particules pour une résorption plus étendue.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Les alternatives à la greffe</h2>
          <ul className="space-y-2 text-neutral-700 mb-8 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Implants inclinés</strong> (All-on-4) exploitant l'os antérieur mieux préservé</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><Link href="/implants-zygomatiques" className="underline">Implants zygomatiques</Link>, ancrés dans l'os de la pommette</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><Link href="/implants-pterygoidiens" className="underline">Implants ptérygoïdiens</Link>, ancrés à l'arrière du palais</li>
          </ul>

          <CTABox variant="inline"
            title="Une greffe osseuse vous a été proposée ailleurs ?"
            subtitle="Le scanner 3D permet de vérifier si une alternative sans greffe est possible."
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
                { label: 'Peu d\'os, est-ce possible ?', href: '/peu-os-implants-possible' },
                { label: 'Sinus lift', href: '/sinus-lift-implants' },
                { label: 'Implants zygomatiques', href: '/implants-zygomatiques' },
                { label: 'Implants ptérygoïdiens', href: '/implants-pterygoidiens' },
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
